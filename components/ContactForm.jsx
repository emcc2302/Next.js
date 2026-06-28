"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all the fields.");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Message sent successfully!");

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Contact Us</h2>

      <InputField
        label="Name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextAreaField
        label="Message"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">
        Send Message
      </button>
    </form>
  );
}