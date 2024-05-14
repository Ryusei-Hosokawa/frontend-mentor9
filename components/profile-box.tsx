import TimeCategory from "@/components/time-category";
import PersonReport from "@/components/person-report";

export default function PersonImg() {
  return (
    <div className="bg-[#1C204B] w-full max-w-[255px] rounded-[15px]">
      <PersonReport />
      <TimeCategory />
    </div>
  );
}
