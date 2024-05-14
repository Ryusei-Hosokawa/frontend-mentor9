import { ModeToggle } from "@/components/mode-toggle";
import ProfileBox from "@/components/profile-box";

export default function Home() {
  return (
    <main className="px-[15px] font-Rubik">
      <div className="max-w-[1110px] mx-auto">
        <div className="pt-5 mb-40">
          <ModeToggle />
        </div>

        <div className="flex justify-between">
          <ProfileBox />
          <div className="flex">
            {/* <CategoryBoard /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
