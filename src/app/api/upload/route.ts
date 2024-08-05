import { type NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData();
  const apiResponse = await fetch("https://slander.sundai.club/upload", {
    method: "POST",
    headers: {},
    body: formData,
  });
  const res = await apiResponse.json();
  console.log(res);
  const id = res.taskId;
  return NextResponse.json({ id });
}
