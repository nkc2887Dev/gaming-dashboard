"use client";

import {
  CircleChevronDown,
  Menu,
  X,
  CircleChevronUp,
  ArrowBigDownDash,
  MoveRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SportsMenu from "./sportsMenu";
import { useEffect, useState } from "react";

const NAVBAR_MENU = {
  SETTLEMENT: "settlement",
  REPORT: "report",
  CONTROL: "control",
  PROFILE: "profile",
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="w-full bg-gradient-to-b from-[#03364c] to-[#159ab3] text-white p-2 flex items-center justify-between relative">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        <div className="flex items-center gap-4 ml-5">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/client">Clients</Link>
          <Link href="/sport-analysis">Sport Analysis</Link>

          {/* Settlement Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown(NAVBAR_MENU.SETTLEMENT)}
              className="flex items-center gap-1 hover:text-gray-300"
            >
              Settlement <ArrowBigDownDash className="h-4 w-4 text-white" />
            </button>
            {activeDropdown === NAVBAR_MENU.SETTLEMENT && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black py-2 rounded shadow-lg">
                <Link
                  href="/settlement/user"
                  className="block p-2 hover:bg-[#159ab3] py-2 hover:text-white] text-sm"
                >
                  User Settlement
                </Link>
                <Link
                  href="/settlement/master"
                  className="block p-2 hover:bg-[#159ab3] py-2 hover:text-white text-sm"
                >
                  Master Settlement
                </Link>
              </div>
            )}
          </div>

          {/* Reports Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown(NAVBAR_MENU.REPORT)}
              className="flex items-center gap-1 hover:text-gray-300"
            >
              Reports <ArrowBigDownDash className="h-4 w-4 text-white" />
            </button>
            {activeDropdown === NAVBAR_MENU.REPORT && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black py-2 rounded shadow-lg">
                <Link
                  href="/report/sales"
                  className="block p-2 hover:bg-[#159ab3] py-2 hover:text-white text-sm"
                >
                  Sales Report
                </Link>
                <Link
                  href="/report/finance"
                  className="block p-2 hover:bg-[#159ab3] py-2 hover:text-white text-sm"
                >
                  Finance Report
                </Link>
              </div>
            )}
          </div>

          <Link href="/cutting">Cutting</Link>

          {/* Control Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown(NAVBAR_MENU.CONTROL)}
              className="flex items-center gap-1 hover:text-gray-300"
            >
              Control <ArrowBigDownDash className="h-4 w-4 text-white" />
            </button>
            {activeDropdown === NAVBAR_MENU.CONTROL && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black py-2 rounded shadow-lg">
                <Link
                  href="/control/user"
                  className="block p-2 hover:bg-[#159ab3] py-2 hover:text-white text-sm"
                >
                  User Control
                </Link>
                <Link
                  href="/control/master"
                  className="block p-2 hover:bg-[#159ab3] py-2 hover:text-white text-sm"
                >
                  Master Control
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="flex items-center gap-4 relative dropdown">
          <button
            onClick={() => toggleDropdown(NAVBAR_MENU.PROFILE)}
            className="flex items-center gap-1 hover:text-gray-300"
          >
            {"user"}
          </button>
          {activeDropdown === NAVBAR_MENU.PROFILE && (
            <div className="absolute bottom-0 right-0 translate-y-full w-40 bg-white text-black py-2 rounded shadow-lg">
              <Link
                href="/profile/change-password"
                className="block w-full flex items-center py-2 hover:bg-[#159ab3] hover:text-white text-sm"
              >
                <MoveRight className="text-white h-4 w-4 mr-2" /> Change
                Password
              </Link>
              <Link
                href="/"
                className="block w-full flex items-center py-2 hover:bg-[#159ab3] hover:text-white text-sm"
              >
                <MoveRight className="text-white h-4 w-4 mr-2" /> Logout
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Toggle Section */}
      <div className="bg-[#017082]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-center items-center p-3 hover:bg-[#017082] transition-colors"
        >
          {isOpen ? (
            <CircleChevronUp className="text-white h-4 w-4" />
          ) : (
            <CircleChevronDown className="text-white h-4 w-4" />
          )}
        </button>
        {isOpen && (
          <div className="p-3 text-white">Sport details go here...</div>
        )}
      </div>

      {/* Sidebar Menu */}
      <div
        className={`absolute left-0 bg-[#008fb3] text-white overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <SportsMenu />
      </div>
    </>
  );
}
