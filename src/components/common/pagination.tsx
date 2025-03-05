"use client";

import type React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { PaginationProps } from "@/@types/common";

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath,
  queryParam = "page",
  onPageChange,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createPageUrl = (page: number) => {
    if (!basePath) {
      return "#";
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set(queryParam, page.toString());
    return `${basePath}?${params.toString()}`;
  };

  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    } else if (basePath) {
      router.push(createPageUrl(page));
    }
  };

  return (
    <div className="flex justify-center my-6">
      <div className="inline-flex rounded-sm overflow-hidden">
        <PaginationButton
          label="First"
          onClick={() => handlePageChange(1)}
          disabled={currentPage <= 1}
          url={createPageUrl(1)}
        />
        <PaginationButton
          label="Prev"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          url={createPageUrl(currentPage - 1)}
        />
        <PaginationButton
          label={currentPage.toString()}
          isActive={true}
          onClick={() => {}}
          url="#"
        />
        <PaginationButton
          label="Next"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          url={createPageUrl(currentPage + 1)}
        />
        <PaginationButton
          label="Last"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage >= totalPages}
          url={createPageUrl(totalPages)}
        />
      </div>
    </div>
  );
};

interface PaginationButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
  url: string;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  label,
  onClick,
  disabled = false,
  isActive = false,
  url,
}) => {
  const baseClasses =
    "p-2 text-center border border-[#1497AF] min-w-[50px] text-white text-md font-bold";
  const activeClasses = "bg-[#03364c]";
  const inactiveClasses =
    "bg-gradient-to-b from-[#92D8E4] to-[#699EAA] hover:from-[#699EAA] hover:to-[#92D8E4]";
  const disabledClasses = "opacity-60 cursor-not-allowed";

  const className = `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${disabled ? disabledClasses : ""}`;

  if (disabled) {
    return <span className={className}>{label}</span>;
  }

  if (url === "#" || isActive) {
    return (
      <button
        className={className}
        onClick={onClick}
        disabled={disabled || isActive}
      >
        {label}
      </button>
    );
  }

  return (
    <Link
      href={url}
      className={className}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        onClick();
      }}
    >
      {label}
    </Link>
  );
};
