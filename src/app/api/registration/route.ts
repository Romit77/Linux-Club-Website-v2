import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const responseHeaders = {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
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
