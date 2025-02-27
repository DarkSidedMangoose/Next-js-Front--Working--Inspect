"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <button onClick={() => navigate.push("/dashboard")}>sada</button>
      <form onSubmit={submitHandler}>
        <input type="text" className="border-2 border-black" />
      </form>
    </div>
  );
}
