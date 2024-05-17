"use client"

import { useState } from "react";
import TimeCategoryLink from "./time-category-link";

export default function TimeCategory() {
  const [activeLink, setActiveLink] = useState("Daily");

  return (
    <div className="flex lg:flex-col justify-between sm:justify-start pt-[28px] pb-[32px] px-0 lg:px-[30px] text-[18px] font-[400] text-[#7078C9] leading-[1em]">
      <TimeCategoryLink
        href="/"
        linkText="Daily"
        isActive={activeLink === "Daily"}
        onClick={() => setActiveLink("Daily")}
      />
      <TimeCategoryLink
        href="/"
        linkText="Weekly"
        isActive={activeLink === "Weekly"}
        onClick={() => setActiveLink("Weekly")}
      />
      <TimeCategoryLink
        href="/"
        linkText="Monthly"
        isActive={activeLink === "Monthly"}
        onClick={() => setActiveLink("Monthly")}
      />
    </div>
  );
}
