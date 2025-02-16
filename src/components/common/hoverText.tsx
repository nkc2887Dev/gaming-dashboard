import React from "react";

const HoverText = ({ value }: { value: string }) => {
  return (
    <div className="relative group w-fit">
      <span className="font-semibold truncate max-w-[130px] inline-block">
        {value || "-"}
      </span>
      {value && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block 
               bg-black text-white text-xs font-bold rounded px-2 py-1 whitespace-nowrap"
        >
          {value}
        </span>
      )}
    </div>
  );
};

export default HoverText;
