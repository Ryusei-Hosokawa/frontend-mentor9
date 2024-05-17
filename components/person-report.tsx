import PersonImage from "@/components/person-image";
import ReportContents from "@/components/report-contents";

export default function PersonReport() {
  return (
    <div
      className="
      flex 
      lg:flex-col 
      flex-row 
      bg-[#5747EA] 
      rounded-[15px] 
      lg:pt-[34px] 
      lg:pb-[80px] 
      pt-[35px] 
      pb-[34px] 
      px-[32px]
    "
    >
      <PersonImage />
      <ReportContents />
    </div>
  );
}
