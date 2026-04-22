import { NextResponse } from "next/server";
import { CREDLY_USERNAME } from "@/lib/data";
import type { CredlyResponse } from "@/lib/types";

export const revalidate = 3600;

export async function GET() {
  try {
    const response = await fetch(
      `https://www.credly.com/users/${CREDLY_USERNAME}/badges.json`,
      {
        next: { revalidate },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to load certifications from Credly." },
        { status: response.status }
      );
    }

    const data = (await response.json()) as CredlyResponse;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Unable to load certifications from Credly." },
      { status: 502 }
    );
  }
}
