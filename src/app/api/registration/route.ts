import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const exists = await prisma.user.findMany({
      where: {
        name: body.name,
        email: body.email,
      },
    });

    if (exists.length > 0) {
      return NextResponse.json({
        message: "User already exists",
      });
    }

    if (body != null) {
      const newUser = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
        },
      });

      return NextResponse.json({
        message: "User created successfully",
        user: newUser,
      });
    } else {
      return NextResponse.json(
        {
          error: "Invalid request body",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
