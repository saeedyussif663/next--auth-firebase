"use client";

import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    setEmail("");
    setPassword("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      // show error message using toast

      return;
    }

    console.log(data);
  };

  return (
    <section className="flex justify-center items-center flex-col h-screen">
      <div className=" shadow-lg w-[50%] py-4 px-4">
        <h1 className="text-center font-bold text-cyan-600 text-2xl">
          Sing Up
        </h1>{" "}
        <form className="flex flex-col px-4 mb-4" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your E-mail"
            className="my-4 p-2 outline-none border border-gray-700"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="my-4 p-2 outline-none border border-gray-700"
          />
          <button className="bg-blue-500 text-white w-44 rounded-full py-2">
            Sign Up
          </button>
        </form>
        <p className="text-right">
          Dont have an account?{" "}
          <Link href="/login" className="underline mx-2">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
