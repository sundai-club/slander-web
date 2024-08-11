import { type NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const apiResponse = await fetch("https://slander.sundai.club/strategies", {
      method: "GET",
      headers: {},
    });
    const res = await apiResponse.json();
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ message: "hello" });
}
