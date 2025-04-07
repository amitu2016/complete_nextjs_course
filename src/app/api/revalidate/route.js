import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export function GET(){
    revalidateTag("postsupdation");
    return NextResponse.json({ revalidated: true, now: Date.now(), message: 'Revalidated cache' });
}