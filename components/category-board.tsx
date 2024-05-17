import BoardImage from "@/components/board-image";
import CategoryStatus from "@/components/category-status";

interface CategoryBoardProps {
  imageName: string;
  imageWidth: number;
  imageHeight: number;
  imageBgColor: string;
  imageAdditionalClass?: string;
  categoryName: string;
  categoryTime: number;
  categoryPreviousResult: number;
}


export default function CategoryBoard(
    {imageName, 
    imageWidth, 
    imageHeight, 
    imageBgColor, 
    imageAdditionalClass, 
    categoryName, 
    categoryTime, 
    categoryPreviousResult}: CategoryBoardProps
) {
  return (
    <li className="overflow-hidden lg:w-[30.9%] sm:w-[48%] w-full list-none relative rounded-[15px]">
      <BoardImage
        name={imageName}
        width={imageWidth}
        height={imageHeight}
        bgColor={imageBgColor}
        additionalClass={imageAdditionalClass}
      />
      <CategoryStatus 
        name={categoryName}
        time={categoryTime}
        previousResult={categoryPreviousResult}
      />
    </li>
  );
}
