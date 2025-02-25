import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      heya
      <ul>
        <li>
          <Link href="/dashboard">dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
