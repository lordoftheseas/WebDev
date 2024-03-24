import Link from "next/link";
import { useState } from "react";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaFileDownload,
  FaPhone,
  FaFilePdf,
} from "react-icons/fa"; // Resume icon
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
      <Link href="https://www.linkedin.com" passHref>
        <RiLinkedinFill className="hover:text-accent transition-all duration-300" />
      </Link>

      {/* Instagram Icon */}
      <Link href="https://www.instagram.com" passHref>
        <RiInstagramFill className="hover:text-accent transition-all duration-300" />
      </Link>

      {/* GitHub Icon */}
      <Link href="https://github.com" passHref>
        <RiGithubFill className="hover:text-accent transition-all duration-300" />
      </Link>

      {/* Phone Icon */}
      <Link
        href={"tel:+1234567890"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaPhone />
      </Link>
    </div>
  );
};

export default Socials;

// // Import necessary modules
// import Link from "next/link";
// import { useState } from "react";
// import {
//   RiLinkedinFill,
//   RiInstagramFill,
//   RiFacebookFill,
//   RiGithubFill,
//   RiPhoneFill,
// } from "react-icons/ri";

// import { FaEnvelope, FaEnvelopeOpen, FaPhone } from "react-icons/fa";

// const Socials = () => {
//   // State to track hover status
//   const [isHovered, setIsHovered] = useState(false);

//   // Function to handle click and open email client
//   const handleEnvelopeClick = () => {
//     const email = "ramtelabhi04@gmail.com";
//     window.location.href = `mailto:${email}`;
//   };

//   return (
//     <div className="flex items-center gap-x-5 text-lg">
//       <div
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={handleEnvelopeClick}
//         style={{
//           cursor: "pointer",
//         }}
//         className={isHovered ? "text-accent" : ""}
//       >
//         {isHovered ? <FaEnvelopeOpen /> : <FaEnvelope />}
//       </div>
//       {/* <Link
//         href="tel:+1234567890"
//         className="hover:text-accent transition-all duration-300"
//         passHref
//       >
//         <FaPhone />
//       </Link> */}

//       <Link href={""} className="hover:text-accent transition-all duration-300">
//         <RiLinkedinFill />
//       </Link>
//       <Link href={""} className="hover:text-accent transition-all duration-300">
//         <RiInstagramFill />
//       </Link>
//       <Link href={""} className="hover:text-accent transition-all duration-300">
//         <RiFacebookFill />
//       </Link>
//       <Link href={""} className="hover:text-accent transition-all duration-300">
//         <RiGithubFill />
//       </Link>
// <Link
//   href={"tel:+1234567890"}
//   className="hover:text-accent transition-all duration-300"
// >
//   <RiPhoneFill />
// </Link>
//     </div>
//   );
// };

// export default Socials;
