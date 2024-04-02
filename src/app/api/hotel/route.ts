import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function Get(request: NextApiRequest) {
  return new NextResponse("hotel");
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);

  return new Response("OK");
}
