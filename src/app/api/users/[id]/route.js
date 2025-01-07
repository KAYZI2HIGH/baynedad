import { connectToDB } from "@/lib/mongo"
import { User } from "@/lib/mongo/models"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req, { params }) => {
  const id = (await params).id

  try {
    connectToDB()

    const user = await User.findById(id)
    return NextResponse.json(user)
  } catch (error) {
    console.log(error)
    return NextResponse.json(error)
  }

}