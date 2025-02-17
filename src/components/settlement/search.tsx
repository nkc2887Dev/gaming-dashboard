import React from "react";
import Input from "@/components/ui/input";
import { GradientButton } from "@/components/ui/gradient-button";

const FindSettlement = () => {
  return (
    <div className="flex items-center justify-center w-full bg-[#045662] gap-2">
      <Input className="h-8 m-2" />
      <GradientButton className="w-sm m-2" label="Fill All" size="sm" />
      <Input type="password" className="h-8 m-2" />
      <GradientButton className="w-sm m-2" label="Submit" size="sm" />
      <GradientButton className="w-sm m-2" label="Clear All" size="sm" />
    </div>
  );
};

export default FindSettlement;
