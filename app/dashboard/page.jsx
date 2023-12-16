"use client";

import { signOut } from "next-auth/react";

export default function Dashboard() {
  return (
    <button className="bg-red-500 mt-4 py-2 px-2" onClick={() => signOut()}>
      Logout
    </button>
  );
}
