"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    setEmail("");
    setPassword("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // const data = await res.json();
    // console.log(data);

    // if (res.ok) {
    //   const data = await res.json();
    //   console.log("Response Data:", data);
    // } else {
    //   console.error("HTTP Error:", res.status);
    //   // Handle the error as needed
    // }

    // try {
    //   const res = await signIn("credentials", {
    //     ...credentials,
    //     redirect: false,
    //   });

    //   if (res?.error) {
    //     // toast.error(`${res.error}`);
    //     // setIsReqSent(false);
    //   } else {
    //     // setIsReqSent(false);
    //     router.push("/");
    //   }
    // } catch (error) {
    //   // Handle login error
    //   console.error(error);
    // }
  };

  return (
    <section className="flex justify-center items-center flex-col h-screen">
      <div className=" shadow-lg w-[50%] py-4 px-4">
        <h1 className="text-center font-bold text-cyan-600 text-2xl">Log In</h1>{" "}
        <form onSubmit={handleSubmit} className="flex flex-col px-4 mb-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your E-mail"
            className="my-4 p-2 outline-none border border-gray-700"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your password"
            className="my-4 p-2 outline-none border border-gray-700"
          />
          <button className="bg-blue-500 text-white w-44 rounded-full py-2">
            Login
          </button>
        </form>
        <p className="text-right">
          Dont have an account?{" "}
          <Link href="/signup" className="underline mx-2">
            Singup
          </Link>
        </p>
      </div>
    </section>
  );
}
