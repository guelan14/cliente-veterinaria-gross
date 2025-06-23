import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { user, pass } = await request.json();

  const foundUser = await prisma.user.findUnique({
    where: { username: user },
  });

  if (!foundUser) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 401 });
  }

  const isValid = await bcrypt.compare(pass, foundUser.passwordHash);
  if (!isValid) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }

  const token = signToken({ id: foundUser.id, username: foundUser.username });

  const cookie = serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  return NextResponse.json({ success: true }, {
    status: 200,
    headers: {
      "Set-Cookie": cookie,
    },
  });
}
