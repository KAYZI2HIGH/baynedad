import { connectToDB } from "@/lib/mongo";
import { Property } from "@/lib/mongo/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const _id = (await params)._id;

  try {
    connectToDB();

    const property = await Property.findById(_id);
    return NextResponse.json(property);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};
