import { type NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest, response: NextResponse) {
  const apiResponse = await fetch("https://api.mockapi.com/upload", {
    method: "POST",
    headers: {
      "x-api-key": "67521af040ea4b14a64e6607fa45e4a7",
    },
    body: await request.formData(),
  });
  return new NextResponse(apiResponse);
}
