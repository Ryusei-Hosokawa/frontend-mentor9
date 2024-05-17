import Image from "next/image";
import ImageJeremy from "/public/images/image-jeremy.png";

export default function PersonImage() {
  return (
    <div
      className="
      relative 
      bg-[#fff]
      lg:w-[78px]
      lg:h-[78px]
      w-[64px]
      h-[64px]
      rounded-[50%]
      border-[3px]
      border-[#fff]
      border-solid
      box-content
      shadow-xl
      lg:mb-[40px]
      mr-[17px]
      lg:mr-[0px]
      "
    >
      <Image
        src={ImageJeremy}
        alt="Picture of the author"
        className="absolute"
      />
    </div>
  );
}
