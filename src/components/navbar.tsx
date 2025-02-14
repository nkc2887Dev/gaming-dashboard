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
import UserStats from "./userstats";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path:string) => {
    if (router.pathname === path) {
      e.preventDefault();
    }else{
      router.push(path);
    }
  };
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
          {/* </div>
        <div className="flex gap-4"> */}
          <Link className="block p-2 hover:bg-[#16A4BC]" href="/dashboard">
            Dashboard
          </Link>
          <Link className="block p-2 hover:bg-[#16A4BC]" href="/client" onClick={(e)=>handleClick(e, "/client")}>
            Clients
          </Link>
          <Link className="block p-2 hover:bg-[#16A4BC]" href="/sport-analysis">
            Sport Analysis
          </Link>

          {/* Settlement Dropdown */}
          <div className="relative group">
            <button
              // onClick={() => toggleDropdown(NAVBAR_MENU.SETTLEMENT)}
              className="flex items-center gap-1 hover:text-gray-300 block p-2 hover:bg-[#16A4BC]"
            >
              Settlement <ArrowBigDownDash className="h-4 w-4 text-white" />
            </button>
            {/* {activeDropdown === NAVBAR_MENU.SETTLEMENT && ( */}
            <div className="z-[9999] absolute left-0 mt-2 w-40 bg-[#16A4BC] text-white py-2 rounded shadow-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/settlement/user"
                className="block p-2 hover:bg-[#017082] text-sm"
              >
                User Settlement
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/settlement/master"
                className="block p-2 hover:bg-[#017082] text-sm"
              >
                Master Settlement
              </Link>
            </div>
            {/* )} */}
          </div>

          {/* Reports Dropdown */}
          <div className="relative group">
            <button
              // onClick={() => toggleDropdown(NAVBAR_MENU.REPORT)}
              className="flex items-center gap-1 hover:text-gray-300 block p-2 hover:bg-[#16A4BC]"
            >
              Reports <ArrowBigDownDash className="h-4 w-4 text-white" />
            </button>
            {/* {activeDropdown === NAVBAR_MENU.REPORT && ( */}
            <div className="z-[9999] absolute left-0 mt-2 w-52 bg-[#16A4BC] text-white py-1 rounded shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/report/user-detail"
                className="block px-4 py-2 hover:bg-[#017082] transition text-sm"
              >
                User Detail
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/report/account-statement"
                className="block px-4 py-2 hover:bg-[#017082] transition text-sm"
              >
                Account Statement
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/report/settlement-balance"
                className="block px-4 py-2 hover:bg-[#017082] transition text-sm"
              >
                Settlement/Balance Report
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/report/transaction"
                className="block px-4 py-2 hover:bg-[#017082] transition text-sm"
              >
                Transaction Report
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/report/current-bets"
                className="block px-4 py-2 hover:bg-[#017082] transition text-sm"
              >
                Current Bets
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/report/profit-loss"
                className="block px-4 py-2 hover:bg-[#017082] transition text-sm"
              >
                Profit & Loss Report
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/report/event-profit-loss"
                className="block px-4 py-2 hover:bg-[#017082] transition text-sm"
              >
                Event Profit & Loss Report
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/report/bet-history"
                className="block px-4 py-2 hover:bg-[#017082] transition text-sm"
              >
                Bet History
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/report/live-bets"
                className="block px-4 py-2 hover:bg-[#017082] transition text-sm"
              >
                Live Bets
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/report/sports-revenue"
                className="block px-4 py-2 hover:bg-[#017082] transition text-sm"
              >
                Sports Revenue
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/report/ip-lookup"
                className="block px-4 py-2 hover:bg-[#017082] transition text-sm"
              >
                IP Lookup
              </Link>
            </div>
            {/* )} */}
          </div>

          <Link href="/cutting">Cutting</Link>

          {/* Control Dropdown */}
          <div className="relative group">
            <button
              // onClick={() => toggleDropdown(NAVBAR_MENU.CONTROL)}
              className="flex items-center gap-1 hover:text-gray-300 block p-2 hover:bg-[#16A4BC]"
            >
              Control <ArrowBigDownDash className="h-4 w-4 text-white" />
            </button>
            {/* {activeDropdown === NAVBAR_MENU.CONTROL && ( */}
            <div className="z-[9999] absolute left-0 mt-2 w-40 bg-[#16A4BC] text-white py-2 rounded shadow-lg  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/control/user"
                className="block p-2 hover:bg-[#017082] text-sm"
              >
                User Control
              </Link>
              <div className="border-b border-[#159ab3] w-full"></div>
              <Link
                href="/control/master"
                className="block p-2 hover:bg-[#017082] text-sm"
              >
                Master Control
              </Link>
            </div>
            {/* )} */}
          </div>
        </div>
        {/* Profile Dropdown */}
        <div className="flex gap-4 relative dropdown">
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
                className="block w-full flex items-center py-2 hover:bg-[#159ab3] hover:text-white text-sm group"
              >
                <MoveRight className="text-black group-hover:text-white h-4 w-4 mr-2" />{" "}
                Change Password
              </Link>
              <Link
                href="/"
                className="block w-full flex items-center py-2 hover:bg-[#159ab3] hover:text-white text-sm group"
              >
                <MoveRight className="text-black group-hover:text-white h-4 w-4 mr-2" />{" "}
                Logout
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Toggle Section */}
      <div className="bg-[#017082]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-center items-center p-2 hover:bg-[#017082] transition-colors"
        >
          {isOpen ? (
            <CircleChevronUp className="text-white h-4 w-4" />
          ) : (
            <CircleChevronDown className="text-white h-4 w-4" />
          )}
        </button>
        {isOpen && <UserStats />}
      </div>

      {/* Sidebar Menu */}
      <div
        className={`absolute left-0 bg-[#008fb3] text-white overflow-hidden transition-all duration-300 z-[9999] ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <SportsMenu />
      </div>
    </>
  );
}
