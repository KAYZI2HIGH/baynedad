import { connectToDB } from "@/lib/mongo";
import { Property } from "@/lib/mongo/models";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDB();

    const properties = await Property.find();
    return NextResponse.json(properties);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
};
