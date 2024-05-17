import { ModeToggle } from "@/components/mode-toggle";
import ProfileBox from "@/components/profile-box";
import CategoryBoard from "@/components/category-board";

export default function Home() {
  return (
    <main className="px-[15px] pb-[100px] font-Rubik">
      <div className="max-w-[1110px] mx-auto">
        <div className="pt-5 lg:mb-40 mb-[20px]">
          <ModeToggle />
        </div>
        
        <div className="w-full max-w-[1100px]">
          <div className="mx-auto flex flex-col lg:flex-row lg:gap-x-[30px] gap-x-[2.6%] gap-y-[24px]">
            <ProfileBox />
            <ul className="w-full relative flex justify-center flex-wrap gap-x-[3.6%] lg:gap-y-[30px] gap-y-[24px]">
              <CategoryBoard
                imageName="icon-work.svg"
                imageWidth={87}
                imageHeight={87}
                imageBgColor="bg-[#FF8B64]"
                imageAdditionalClass="top-[-11px] right-[17px]"
                categoryName="Work"
                categoryTime={32}
                categoryPreviousResult={36}
              />
              <CategoryBoard
                imageName="icon-play.svg"
                imageWidth={90}
                imageHeight={90}
                imageBgColor="bg-[#55C2E6]"
                imageAdditionalClass="top-[-14px] right-[11px]"
                categoryName="Play"
                categoryTime={10}
                categoryPreviousResult={8}
              />
              <CategoryBoard
                imageName="icon-study.svg"
                imageWidth={87}
                imageHeight={87}
                imageBgColor="bg-[#FF5E7D]"
                imageAdditionalClass="top-[-6px] right-[17px]"
                categoryName="Study"
                categoryTime={4}
                categoryPreviousResult={7}
              />
              <CategoryBoard
                imageName="icon-exercise.svg"
                imageWidth={79}
                imageHeight={53}
                imageBgColor="bg-[#4BCF82]"
                imageAdditionalClass="top-[-1px] right-[18px]"
                categoryName="Exercise"
                categoryTime={4}
                categoryPreviousResult={5}
              />
              <CategoryBoard
                imageName="icon-social.svg"
                imageWidth={74}
                imageHeight={100}
                imageBgColor="bg-[#7335D2]"
                imageAdditionalClass="top-[-15px] right-[13px]"
                categoryName="Social"
                categoryTime={5}
                categoryPreviousResult={10}
              />
              <CategoryBoard
                imageName="icon-self-care.svg"
                imageWidth={66}
                imageHeight={62}
                imageBgColor="bg-[#F1C75B]"
                imageAdditionalClass="top-[-10px] right-[15px]"
                categoryName="Self Care"
                categoryTime={2}
                categoryPreviousResult={2}
              />
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
