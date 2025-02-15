import React from "react";
import { Button } from "./button";
import Link from "next/link";

interface GradientButton {
  label: string;
  redirect?: string;
  className?: string;
  size?: "lg" | "default" | "sm" | "icon";
  onclick?: () => void;
}

const GradientButton = ({
  label,
  className = "",
  redirect = "",
  size,
  onclick
}: GradientButton) => {
  return (
    <Button onClick={onclick} {...(size ? { size } : {})} className={`${className} rounded-md font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#1497AF] to-[#022D44] text-white shadow-md hover:bg-[#017082]`}>
      {redirect ? <Link href={redirect}>{label}</Link> : label}
    </Button>
  );
};

const ElipsButton = ({ label }: { label: string }) => {
  return (
    <Button className="rounded-full text-xs font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#2E899C] to-[#159ab3] text-white shadow-md transition-all duration-300 group hover:from-[#159ab3] hover:to-[#03364c]">
      {label}
    </Button>
  );
};

export { GradientButton, ElipsButton };
