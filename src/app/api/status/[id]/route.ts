import { type NextRequest, NextResponse } from "next/server";
export async function POST(
  request: NextRequest,
  route: { params: { id: string } },
) {
  const { id } = route.params;
  console.log(id);
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
    const res = await apiResponse.json();
    console.log(res);
    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
