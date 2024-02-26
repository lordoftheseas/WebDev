import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = () => {}; // empty callback function here for the time being
  const handleFocus = () => {}; // called when we click on it
  const handleBlur = () => {}; // called when we click out
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Abhi Ramtel"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></input>
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="email here"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoCapitalize="none"
            ></input>
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              row={4}
              className="textarea"
              placeholder="Hi, Let's connect!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
