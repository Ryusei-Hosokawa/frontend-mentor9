import Link from "next/link";

interface TimeCategoryLinkProps {
  href: string;
  linkText: string;
  isActive: boolean;
  onClick: () => void;
}

export default function TimeCategoryLink({
  href,
  linkText,
  isActive,
  onClick,
}: TimeCategoryLinkProps) {
  return (
    <>
      <Link
        href={href}
        className={
          isActive
            ? "block [&:not(:last-child)]:mb-[21px] leading-[1em] text-[#fff]"
            : "block [&:not(:last-child)]:mb-[21px] leading-[1em] text-[#7078C9]"
        }
        onClick={onClick}
      >
        {linkText}
      </Link>
    </>
  );
}
