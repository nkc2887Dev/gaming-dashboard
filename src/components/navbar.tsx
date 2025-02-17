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
import SportsMenu from "@/components/sportsMenu";
import { useEffect, useState } from "react";
import UserStats from "@/components/userstats";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/assets/image/logo.jpg";

const NAVBAR_MENU = {
  SETTLEMENT: "settlement",
  REPORT: "report",
  CONTROL: "control",
  PROFILE: "profile",
};

export default function Navbar({ className }: { className: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (router.pathname === path) {
      e.preventDefault();
    } else {
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
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav
        className={`${className} w-full bg-gradient-to-b from-[#03364c] to-[#159ab3] text-white p-2 flex items-center justify-between relative`}
      >
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
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md mr-10"
          />
          {!isMobile && (
            <>
              <Link className="block p-2 hover:bg-[#16A4BC]" href="/dashboard">
                Dashboard
              </Link>
              <Link
                className="block p-2 hover:bg-[#16A4BC]"
                href="/client"
                onClick={(e) => handleClick(e, "/client")}
              >
                Clients
              </Link>
              <Link
                className="block p-2 hover:bg-[#16A4BC]"
                href="/sport-analysis"
              >
                Sport Analysis
              </Link>

              {/* Settlement Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-gray-300 block p-2 hover:bg-[#16A4BC]">
                  Settlement{" "}
                  <ArrowBigDownDash className="h-5 w-5 text-white transition-transform group-hover:rotate-180" />
                </button>
                <div className="z-[9999] absolute left-0 mt-2 w-40 bg-[#16A4BC] text-white py-2 rounded shadow-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/settlement/user"
                    className="block p-2 hover:bg-[#017082] text-sm"
                  >
                    User
                  </Link>
                  <div className="border-b border-[#159ab3] w-full"></div>
                  <Link
                    href="/settlement/master"
                    className="block p-2 hover:bg-[#017082] text-sm"
                  >
                    Master
                  </Link>
                </div>
              </div>

              {/* Reports Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-gray-300 block p-2 hover:bg-[#16A4BC]">
                  Reports{" "}
                  <ArrowBigDownDash className="h-5 w-5 text-white transition-transform group-hover:rotate-180" />
                </button>
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
              </div>

              {/* Cutting */}
              {/* <button className="flex items-center gap-1 hover:text-gray-300 block p-2 hover:bg-[#16A4BC]">
                <Link href="/cutting">Cutting</Link>
              </button> */}

              {/* Control Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-gray-300 block p-2 hover:bg-[#16A4BC]">
                  Control{" "}
                  <ArrowBigDownDash className="h-5 w-5 text-white transition-transform group-hover:rotate-180" />
                </button>
                <div className="z-[9999] absolute left-0 mt-2 w-40 bg-[#16A4BC] text-white py-2 rounded shadow-lg  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/control/game"
                    className="block p-2 hover:bg-[#017082] text-sm"
                  >
                    Game
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        {/* Profile Dropdown */}
        <div className="flex gap-4 relative dropdown">
          <button
            onClick={() => toggleDropdown(NAVBAR_MENU.PROFILE)}
            className="flex items-center gap-1 hover:text-gray-300"
          >
            {"user"}{" "}
            <ArrowBigDownDash
              className={`h-5 w-5 text-white transition-transform ${
                activeDropdown === NAVBAR_MENU.PROFILE ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeDropdown === NAVBAR_MENU.PROFILE && (
            <div className="absolute bottom-0 right-0 translate-y-full w-40 bg-white text-black py-2 rounded shadow-lg">
              <Link
                href="/profile/change-password"
                className="block w-full flex items-center py-2 hover:bg-[#159ab3] hover:text-white text-sm group"
              >
                <MoveRight className="text-black group-hover:text-white h-4 w-4 mr-2" />
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
        className={cn(
          "fixed left-0 w-64 bg-[#008fb3] transition-transform duration-300 z-[999]",
          "top-14 h-[calc(100vh-3.5rem)]", // Default for desktop
          "md:top-14 md:h-[calc(100vh-3.5rem)]", // Adjust for tablets
          "sm:top-12 sm:h-[calc(100vh-3rem)]", // Adjust for smaller screens
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex h-full flex-col text-white">
          <SportsMenu isMobile={isMobile} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </nav>
      </div>
    </>
  );
}
