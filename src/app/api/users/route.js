import { connectToDB } from "@/lib/mongo"
import { User } from "@/lib/mongo/models"
import { NextResponse } from "next/server"

export const GET= async(req) => {
  try {
    connectToDB()

    const users = await User.find()
    return NextResponse.json(users);
  } catch (error) {
    console.log(error)
    return NextResponse.json(error);
  }
}