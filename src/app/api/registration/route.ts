import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  console.log("Origin:", origin);

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
      return NextResponse.json(
        { message: "User already exists" },
        { headers: responseHeaders }
      );
    }

    if (body != null) {
      const newUser = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
        },
      });

      return NextResponse.json(
        { message: "User created successfully", user: newUser },
        { headers: responseHeaders }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400, headers: responseHeaders }
      );
    }
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: responseHeaders }
    );
  }
}

// Preflight request handler for CORS
export function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    },
  });
}
