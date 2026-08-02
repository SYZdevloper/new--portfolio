import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error: "Lead storage is not configured yet.",
      nextStep: "Connect this route to your CRM, email service or database before launch.",
    },
    { status: 501 },
  );
}
