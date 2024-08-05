import { type NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData();
  console.log(formData);
  const apiResponse = await fetch("https://slander.sundai.club/upload", {
    method: "POST",
    headers: {},
    body: formData,
  });
  const res = await apiResponse.json();
  console.log(res);
  const id = res.taskId;
  console.log({ id });
  try {
    const apiResponse = await fetch(
      `https://slander.sundai.club/status/${id}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "67521af040ea4b14a64e6607fa45e4a7",
        },
      },
    );
    console.log(apiResponse);
    const res = await apiResponse.json();
    console.log(res);
    return new NextResponse(res);
  } catch (err) {
    console.log(err);
    return new NextResponse(err);
  }
}
