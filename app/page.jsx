import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <div className="bg-cyan-700 text-white  h-screen">
      {" "}
      <h1>Hello {session?.user.name} </h1>
      <p>your email: {session?.user.email}</p>
    </div>
  );
}
