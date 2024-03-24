// components
import Circles from "../../components/Circles";
// icons
import { BsArrowRight } from "react-icons/bs";
// framer
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

import { useRef } from "react";

import emailjs from "@emailjs/browser";

import { useState, useEffect } from "react";

const Contact = () => {
  const formRef = useRef();
  const [emailSent, setEmailSent] = useState(false); // Add this line

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_41w5f2c", "template_rtwcmbc", formRef.current, {
        publicKey: "sLi9hafvYwQVm2rat",
      })
      .then(
        () => {
          console.log("SUCCESS!!!");
          setEmailSent(true);
          setTimeout(() => setEmailSent(false), 5000);
        },
        (error) => {
          console.log("FAILED....", error.text);
        }
      );
  };

  // Add this useEffect hook
  useEffect(() => {
    const handleClick = () => {
      setEmailSent(false);
    };

    if (emailSent) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [emailSent]);

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px] bg-pink-500/10 relative">
          {/* Email sent message */}
          {emailSent && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                backgroundColor: "#ffffff",
                padding: "10px",
                borderRadius: "5px",
                color: "black", // Change the color to black
              }}
            >
              Email has been sent! ✔️
            </div>
          )}
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            ref={formRef}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="user_name"
                className="input"
                placeholder="Name"
              ></input>
              <input
                type="text"
                name="user_email"
                className="input"
                placeholder="email"
                autocapitalize="none"
              ></input>
            </div>
            <input
              type="text"
              name="message"
              className="input"
              placeholder="Subject"
            ></input>
            <textarea
              name="message_body"
              placeholder="Message"
              className="textarea"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Send
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
