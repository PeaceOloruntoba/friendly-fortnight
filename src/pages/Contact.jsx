import React from "react";
import PageHead from "../components/shared/PageHead";
import Contacts from "../components/containers/Contacts";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      <PageHead name={"Contact"} />
      <Contacts />
    </div>
  );
}
