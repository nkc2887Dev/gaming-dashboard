"use client";

import {
  ArrowBigDownDash,
  SquareMinus,
  SquarePlus,
  SquareX,
} from "lucide-react";
import { sportsData } from "@/lib/menu-data";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const NAVBAR_MENU = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Clients", path: "/client" },
  { name: "Sport Analysis", path: "/sport-analysis" },
];

const DROPDOWN_MENUS = {
  settlement: [
    { name: "User", path: "/settlement/user" },
    { name: "Master", path: "/settlement/master" },
  ],
  reports: [
    { name: "User Detail", path: "/report/user-detail" },
    { name: "Account Statement", path: "/report/account-statement" },
    { name: "Settlement/Balance Report", path: "/report/settlement-balance" },
    { name: "Transaction Report", path: "/report/transaction" },
    { name: "Current Bets", path: "/report/current-bets" },
    { name: "Profit & Loss Report", path: "/report/profit-loss" },
    { name: "Event Profit & Loss Report", path: "/report/event-profit-loss" },
    { name: "Bet History", path: "/report/bet-history" },
    { name: "Live Bets", path: "/report/live-bets" },
    { name: "Sports Revenue", path: "/report/sports-revenue" },
    { name: "IP Lookup", path: "/report/ip-lookup" },
  ],
  control: [{ name: "Game", path: "/control/game" }],
};
export default function SportsMenu({
  isMobile,
  setIsMenuOpen,
  isMenuOpen,
}: {
  isMobile: Boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: Boolean;
}) {
  const [expandedSports, setExpandedSports] = useState<string[]>(["cricket"]);
  const [expandedTournaments, setExpandedTournaments] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  const toggleSport = (sportId: string) => {
    setExpandedSports((prev) =>
      prev.includes(sportId)
        ? prev.filter((id) => id !== sportId)
        : [...prev, sportId]
    );
  };

  const toggleTournament = (tournamentId: string) => {
    setExpandedTournaments((prev) =>
      prev.includes(tournamentId)
        ? prev.filter((id) => id !== tournamentId)
        : [...prev, tournamentId]
    );
  };

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  const handleClick = (path: string) => {
    setIsMenuOpen(false);
    if (router.pathname !== path) {
      router.push(path);
    }
  };

  return (
    <div className="w-full bg-[#008fb3] text-white min-h-screen md:w-64">
      {isMobile && (
        <div className="pl-2">
          {NAVBAR_MENU.map(({ name, path }) => (
            <Link
              key={path}
              className="w-full border-b border-[#159ab3] flex items-center justify-between p-3 hover:bg-[#42C2E2] transition-colors"
              href={path}
              onClick={() => handleClick(path)}
            >
              <div className="flex items-center gap-3">
                <span className="text-base font-medium">▶ {name}</span>
              </div>
            </Link>
          ))}

          <div className="w-full border-b border-[#159ab3]">
            {Object.entries(DROPDOWN_MENUS).map(([key, items]) => (
              <div key={key} className="relative group">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full border-b border-[#159ab3] flex items-center justify-between p-3 hover:bg-[#42C2E2] transition-colors z-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base font-medium">
                      ▶ {key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                  </div>
                  <ArrowBigDownDash
                    className={`h-5 w-5 text-white transition-transform ${
                      activeDropdown === key ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === key && (
                  <div>
                    {items.map(({ name, path }) => (
                      <Link key={path} href={path} className="block text-sm">
                        <div className="flex items-center p-3 text-sm hover:bg-white/10 transition-colors cursor-pointer">
                          <span>{name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {sportsData.map((sport) => (
        <div key={sport.id} className="border-b border-[#159ab3]">
          <button
            onClick={() => toggleSport(sport.id)}
            className="w-full flex items-center justify-between p-3 hover:bg-[#42C2E2] transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-base font-medium">{sport.name}</span>
            </div>
            <ArrowBigDownDash
              className={`h-5 w-5 text-white transition-transform ${
                expandedSports.includes(sport.id) ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedSports.includes(sport.id) &&
            sport.tournaments.length > 0 && (
              <div className="bg-[#d2dcf6] text-black">
                {sport.tournaments.map((tournament) => (
                  <div key={tournament.id}>
                    <button
                      onClick={() => toggleTournament(tournament.id)}
                      className="w-full flex items-center p-3 text-sm hover:bg-white/10 transition-colors"
                    >
                      {expandedTournaments.includes(tournament.id) ? (
                        <SquareMinus className="h-4 w-4 mr-3" />
                      ) : (
                        <SquarePlus className="h-4 w-4 mr-3" />
                      )}
                      {tournament.name}
                    </button>

                    {expandedTournaments.includes(tournament.id) && (
                      <div className="pl-8">
                        {tournament.matches.map((match) => (
                          <div
                            key={match.id}
                            className="flex items-center p-3 text-sm hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            <SquareX className="h-4 w-4 mr-3 text-gray-500" />
                            <span>{match.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );
}
