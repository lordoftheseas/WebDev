// Import necessary modules
import Link from "next/link";
import { useState } from "react";
import {
  RiLinkedinFill,
  RiInstagramFill,
  RiFacebookFill,
  RiGithubFill,
  RiPhoneFill,
} from "react-icons/ri";

import { FaEnvelope, FaEnvelopeOpen, FaPhone } from "react-icons/fa";

const Socials = () => {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle click and open email client
  const handleEnvelopeClick = () => {
    const email = "ramtelabhi04@gmail.com";
    const subject = "Subject of the email";
    const body = "Body of the email";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex items-center gap-x-5 text-lg">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleEnvelopeClick}
        style={{
          cursor: "pointer",
        }}
        className={isHovered ? "text-accent" : ""}
      >
        {isHovered ? <FaEnvelopeOpen /> : <FaEnvelope />}
      </div>
      {/* <Link
        href="tel:+1234567890"
        className="hover:text-accent transition-all duration-300"
        passHref
      >
        <FaPhone />
      </Link> */}

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramFill />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookFill />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link
        href={"tel:+1234567890"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiPhoneFill />
      </Link>
    </div>
  );
};

export default Socials;
