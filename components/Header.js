// this is the header file
//next image
import Image from "next/image";

//next Link
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              width={220}
              height={48}
              alt="logo by Abhi"
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

/*
Header Element: The outermost element is a <header> HTML element.

className: This attribute is used for applying CSS classes to the header element.
"absolute": Positions the header element using absolute positioning.
"z-30": Sets the z-index to 30, determining the stacking order of the element.
"w-full": Makes the header element take the full width of its container.
"flex items-center": Uses Flexbox to horizontally align items and vertically center them.
"px-16 xl:px-0 xl:h-[90px]": Sets padding, responsive padding, and height for different screen sizes using Tailwind CSS classes.
*/
