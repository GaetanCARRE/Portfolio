import { NextResponse } from "next/server";
import { CREDLY_USERNAME } from "@/lib/data";

export const revalidate = 3600; // revalidate every hour

export async function GET() {
  try {
    const response = await fetch(
      `https://www.credly.com/users/${CREDLY_USERNAME}/badges.json`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { data: [], metadata: { count: 0, total_count: 0, total_pages: 0 } },
        { status: 200 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { data: [], metadata: { count: 0, total_count: 0, total_pages: 0 } },
      { status: 200 }
    );
  }
}
