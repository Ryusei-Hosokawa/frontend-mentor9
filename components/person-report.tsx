import PersonImage from "@/components/person-image";
import ReportContents from "@/components/report-contents";

export default function PersonReport() {
  return (
    <div className="bg-[#5747EA] rounded-[15px] pt-[37px] pb-[80px] px-[32px]">
      <PersonImage />
      <ReportContents />
    </div>
  );
}
