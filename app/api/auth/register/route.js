import { auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const { email, password } = data;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const data = await res.json();
    console.log(data);

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    const message = err.code;
    return NextResponse.json({ message }, { status: 400 });
  }
}
