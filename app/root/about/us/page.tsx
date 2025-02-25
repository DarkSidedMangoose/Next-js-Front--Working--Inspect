import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about/1">User 1</Link>
          <Link href="/about/2">User 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
