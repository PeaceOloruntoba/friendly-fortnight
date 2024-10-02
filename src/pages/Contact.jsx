import React from "react";
import PageHead from "../components/shared/PageHead";
import ContactForm from "../components/ui/contact/ContactForm";
import Contacts from "../components/containers/Contacts";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      <PageHead name={"Contact"} />
      <Contacts />
    </div>
  );
}
