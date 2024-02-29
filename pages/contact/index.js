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
      .sendForm("service_41w5f2c", "template_2z9wu3e", formRef.current, {
        publicKey: "shW7OtSZA6ltxnT2L",
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

// const Contact = () => {
//   const formRef = useRef();
//   const [emailSent, setEmailSent] = useState(false); // Add this line

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_41w5f2c", "template_2z9wu3e", formRef.current, {
//         publicKey: "shW7OtSZA6ltxnT2L",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!!!");
//           setEmailSent(true); // Update the state variable when the email is successfully sent
//         },
//         (error) => {
//           console.log("FAILED....", error.text);
//         }
//       );
//   };

//   return (
//     <div className="h-full bg-primary/30">
//       {emailSent && <div>Email has been sent! ✔️</div>}{" "}
//       {/* Conditionally render the checkbox */}
//       <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
//         {/* text and form */}
//         <div className="flex flex-col w-full max-w-[700px] bg-pink-500/10">
//           {/* text */}
//           <motion.h2
//             variants={fadeIn("up", 0.2)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="h2 text-center mb-12"
//           >
//             Let's <span className="text-accent">connect.</span>
//           </motion.h2>
//           {/* form */}
//           <motion.form
//             ref={formRef}
//             variants={fadeIn("up", 0.4)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="flex-1 flex flex-col gap-6 w-full mx-auto"
//             onSubmit={handleSubmit}
//           >
//             {/* input group */}
//             <div className="flex gap-x-6 w-full">
//               <input
//                 type="text"
//                 name="user_name"
//                 className="input"
//                 placeholder="Name"
//               ></input>
//               <input
//                 type="text"
//                 name="user_email"
//                 className="input"
//                 placeholder="email"
//                 autocapitalize="none"
//               ></input>
//             </div>
//             <input
//               type="text"
//               name="message"
//               className="input"
//               placeholder="Subject"
//             ></input>
//             <textarea
//               name="message_body"
//               placeholder="Message"
//               className="textarea"
//             ></textarea>
//             <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
//               <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
//                 Send
//               </span>
//               <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import React, { useState } from "react";

// const Contact = () => {

// const formRef = useRef(null);
// const handleSubmit = () => {};
//   const [isLoading, setIsLoading] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const handleChange = () => {}; // empty callback function here for the time being
//   const handleFocus = () => {}; // called when we click on it
//   const handleBlur = () => {}; // called when we click out
//   return (
//     <section className="relative flex lg:flex-row flex-col max-container">
//       <div className="flex-1 min-w-[50%] flex flex-col">
//         <h1 className="head-text">Get in Touch</h1>
//         <form className="w-full flex flex-col gap-7 mt-14">
//           <label className="text-black-500 font-semibold">
//             Name
//             <input
//               type="text"
//               name="name"
//               className="input"
//               placeholder="Abhi Ramtel"
//               required
//               value={form.name}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//             ></input>
//           </label>
//           <label className="text-black-500 font-semibold">
//             Email
//             <input
//               type="email"
//               name="email"
//               className="input"
//               placeholder="email here"
//               required
//               value={form.email}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               autoCapitalize="none"
//             ></input>
//           </label>
//           <label className="text-black-500 font-semibold">
//             Your Message
//             <textarea
//               name="message"
//               row={4}
//               className="textarea"
//               placeholder="Hi, Let's connect!"
//               required
//               value={form.message}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//             ></textarea>
//           </label>
//           <button
//             type="submit"
//             className="btn"
//             disabled={isLoading}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           >
//             {isLoading ? "Sending...." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
