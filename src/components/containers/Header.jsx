import React from "react";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-end md:justify-between ">
      <span className="md:block hidden">email</span>
      <span>social icons</span>
    </div>
  );
}
