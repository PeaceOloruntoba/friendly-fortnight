import React from "react";
import PageHead from "../components/shared/PageHead";
import ContactForm from "../components/ui/contact/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      <PageHead name={"Contact"} />
      <ContactForm />
    </div>
  );
}
