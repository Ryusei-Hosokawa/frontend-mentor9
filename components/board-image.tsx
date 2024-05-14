import Image from "next/image";

interface BoardImageProps {
  imageName: string;
  imageWidth: number;
  backgroundColor: string;
}

export default function BoardImage({imageName, imageWidth, backgroundColor}: BoardImageProps) {

  const bgClass = `bg-[#${backgroundColor}]`
  
  return (
    <div className={`relative w-full rounded-[15px] ${bgClass}`}>
      <Image
        src={`/images/${imageName}`}
        alt="Board icon"
        width={imageWidth}
        className="absolute w-[78px] h-[78px]"
      />
    </div>
  );
}
