import { NextRequest, NextResponse } from "next/server";

// we can either make interface Props like in components or we can set data type for params like this
export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10) {
    return NextResponse.json({ error: "User data not found" }, { status: 404 });
  }
  return NextResponse.json({ name: "hashir", age: 23 });
}
