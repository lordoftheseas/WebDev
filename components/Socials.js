import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaEnvelopeOpen, FaPhone, FaFilePdf } from "react-icons/fa"; // Resume icon
import { RiLinkedinFill, RiInstagramFill, RiGithubFill } from "react-icons/ri";

const Socials = () => {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle click and open email client
  const handleEnvelopeClick = () => {
    const email = "ramtelabhi04@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  // Function to handle click and open/download resume
  const handleResumeClick = () => {
    const resumePath = "/resume.pdf"; // Replace with the actual path to your resume file
    window.open(resumePath, "_blank"); // Opens the resume in a new tab
    // Alternatively, you can download the resume by changing the above line to:
    // window.location.href = resumePath;
  };

  const handleIconClick = () => {
    const resumePath = "/resume.pdf"; // Replace with the actual path to your resume file
    window.open(resumePath, "_blank"); // Opens the resume in a new tab
    // Alternatively, you can download the resume by changing the above line to:
    // window.location.href = resumePath;
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

      {/* Resume Icon */}
      <div
        onClick={handleResumeClick}
        style={{
          cursor: "pointer",
        }}
        className="hover:text-accent transition-all duration-300"
      >
        <FaFilePdf />
      </div>

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </a>

      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramFill />
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </a>

      {/* Phone Icon */}
      <a
        href="tel:+1234567890"
        className="hover:text-accent transition-all duration-300"
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default Socials;
