import Image from "next/image";
import ImageJeremy from "/public/images/image-jeremy.png";

export default function PersonImage() {
  return (
    <div className="relative bg-[#fff] w-[78px] h-[78px] rounded-[50%] border-[3px] border-[#fff] border-solid box-content shadow-xl mb-[43px]">
      <Image
        src={ImageJeremy}
        alt="Picture of the author"
        className="absolute  rounded-full w-[78px] h-[78px]"
      />
    </div>
  );
}
