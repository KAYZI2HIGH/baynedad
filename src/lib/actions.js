'use server'

import { signIn } from "../../auth";
import { connectToDB } from "./mongo";
import { Property, User } from "./mongo/models";

import { redirect } from "next/navigation";

import bcrypt from 'bcryptjs'
import { revalidatePath } from "next/cache";

import { writeFile } from "fs/promises";
import path from "path";

export const registerFormAction = async (data) => {
  'use server'

  const { name, email, phone, password } = data

  try {
    connectToDB();
    

    const user = await User.findOne({ email })

    if (user) {
      return {error: 'User already exist.'}
    }

    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      name,
      email,
      phone,
      password: hasedPassword,
    });

    await newUser.save();
    console.log('Saved a new user to DB')
    return {success: 'User registered successfully.'}
  } catch (error) {
    console.log(error)
    return {error: 'something went wrong!'}
  }
};

export const loginFormAction = async (data) => {
  'use server'

  const { email, password } = data


  try {
    await signIn('credentials', { email, password, redirect: false })
  } catch (error) {
    
    console.log(error);

    if (error.type.includes('CredentialsSignin')) {
      return { error: 'Invalid username or password.' }
    }
    throw error
  }
}

export const addPropertyAction = async (formData) => {
  "use server";

     const propertyName = formData.get("propertyName");
     const description = formData.get("description");
     const location = formData.get("location");
     const price = formData.get("price");
     const features = formData.getAll("features");
     const propertyType = formData.get("propertyType");
     const agentId = formData.get("agentId");
     const images = formData.getAll("images");

  try {
    connectToDB();

    let imageUrls = [];

    // 🖼️ Handle Multiple Image Uploads
    if (images && images.length > 0) {
      for (const image of images) {
        const buffer = await image.arrayBuffer();
        const imageName = `${Date.now()}-${image.name}`;
        const imagePath = path.join(process.cwd(), "public/uploads", imageName);

        await writeFile(imagePath, Buffer.from(buffer));

        // Save relative path or full URL
        imageUrls.push(`/uploads/${imageName}`);
      }
    }

    const newProperty = new Property({
      title: propertyName,
      description,
      location,
      price,
      type: propertyType,
      features,
      agentId,
      images: imageUrls, // Store array of image URLs in the database
    });

    await newProperty.save();
    console.log("Saved a new Property with Multiple Images to DB");

    revalidatePath("/properties");
    revalidatePath("/addproperty");

    return { success: "Property listed successfully with images." };
  } catch (error) {
    console.error("Failed to save property with images:", error);
    return { error: "Something went wrong!" };
  }
};

export const deleteProperty = async (id) => {
  'use server'

  try {
    connectToDB()

    await Property.deleteOne({ _id: id })
    revalidatePath('/properties')
    revalidatePath('/addproperty')
    console.log('Property deleted.')
  } catch (error) {
    console.log(error)
    console.log('something went wrong when deleting property.')
    
  }
}