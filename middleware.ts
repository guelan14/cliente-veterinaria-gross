import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  console.log("Middleware ejecutado");
  console.log("Token recibido:", token);

  if (!token) {
    console.log("No hay token → redirigiendo a /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(token, SECRET);
    console.log("Token válido. Payload:", payload);
    return NextResponse.next();
  } catch (error) {
    console.error("Error en jwtVerify:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
