import Ellipses from "@/components/ellipses";

interface CategoryStatusProps {
  name: string;
  time: number;
  previousResult: number;
}

export default function CategoryStatus({
  name,
  time,
  previousResult,
}: CategoryStatusProps) {
  return (
    <div className="absolute top-[38px] lg:top-[45px] w-full bg-[#1C204B] px-[30px] lg:pt-[29px] pt-[28px] pb-[32px] rounded-[15px]">
      <div className="flex justify-between">
        <h2 className="text-[18px] text-[#fff] font-[500]">{name}</h2>
        <ul className="flex justify-between w-[21px]">
          <Ellipses />
          <Ellipses />
          <Ellipses />
        </ul>
      </div>
      <div className="lg:flex-col lg:justify-normal lg:items-start flex flex-row justify-between items-center">
        <data className="block lg:text-[56px] text-[32px] text-[#fff] font-[300]">
          {time}hrs
        </data>
        <data className="block text-[15px] text-[#BBC0FF] font-[400]">
          Last Week - {previousResult}hrs
        </data>
      </div>
    </div>
  );
}
