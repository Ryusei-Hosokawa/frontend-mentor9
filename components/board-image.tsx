import Image from 'next/image';

interface BoardImageProps {
  name: string;
  width: number;
  height: number;
  bgColor: string;
  additionalClass?: string;
}

export default function BoardImage({ name, width, height, bgColor, additionalClass }: BoardImageProps) {
  return (
    <div className={`relative w-full  h-[160px] rounded-[15px] ${bgColor}`}>
      <Image
        src={`/images/${name}`}
        alt="Board icon"
        width={width}
        height={height}
        className={`absolute ${additionalClass}`}
      />
    </div>
  );
}
