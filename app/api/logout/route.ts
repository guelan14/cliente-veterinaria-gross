// app/api/logout/route.ts

import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function GET() {
  console.log("Logout API called - borrando cookie token");
  const cookie = serialize("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0),
    path: "/",
  });

  return new NextResponse(null, {
    status: 200,
    headers: {
      "Set-Cookie": cookie,
    },
  });
}

