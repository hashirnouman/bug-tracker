import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
// if we remove the request: NextRequest Next.js will cache the result to prevent this add request: NextRequest
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  /**
   * write the below code like this is not safe becuase mallicious user can
   * send any kind of a data specially in no sql database this approach is unsafe
   *
   *  prisma.user.create({data: body});
   *
   */
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user) {
    return NextResponse.json(
      { error: "A user with this email already exists" },
      { status: 400 }
    );
  }
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
