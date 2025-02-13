"use client"

import { useState } from "react"
import { SquareMinus, SquarePlus, SquareX } from "lucide-react"
import { sportsData } from "@/lib/menu-data"

export default function SportsMenu() {
  const [expandedSports, setExpandedSports] = useState<string[]>(["cricket"])
  const [expandedTournaments, setExpandedTournaments] = useState<string[]>([])

  const toggleSport = (sportId: string) => {
    setExpandedSports((prev) => (prev.includes(sportId) ? prev.filter((id) => id !== sportId) : [...prev, sportId]))
  }

  const toggleTournament = (tournamentId: string) => {
    setExpandedTournaments((prev) =>
      prev.includes(tournamentId) ? prev.filter((id) => id !== tournamentId) : [...prev, tournamentId],
    )
  }

  return (
    <div className="w-64 bg-[#008fb3] text-white min-h-screen">
      {sportsData.map((sport) => (
        <div key={sport.id}>
          <button
            onClick={() => toggleSport(sport.id)}
            className="w-full flex items-center p-3 hover:bg-[#006666] transition-colors"
          >
            {expandedSports.includes(sport.id) ? (
              <SquareMinus className="h-4 w-4 mr-2" />
            ) : (
              <SquarePlus className="h-4 w-4 mr-2" />
            )}
            {sport.name}
          </button>

          {expandedSports.includes(sport.id) && sport.tournaments.length > 0 && (
            <div className="pl-4 text-black bg-[#d2dcf6]">
              {sport.tournaments.map((tournament) => (
                <div key={tournament.id}>
                  <button
                    onClick={() => toggleTournament(tournament.id)}
                    className="w-full flex items-center p-2 text-sm hover:bg-[#006666] transition-colors"
                  >
                    {expandedTournaments.includes(tournament.id) ? (
                      <SquareMinus className="h-3 w-3 mr-2" />
                    ) : (
                      <SquarePlus className="h-3 w-3 mr-2" />
                    )}
                    {tournament.name}
                  </button>

                  {expandedTournaments.includes(tournament.id) && tournament.matches.length > 0 && (
                    <div className="pl-4">
                      {tournament.matches.map((match) => (
                        <div key={match.id} className="w-full flex items-center p-2 text-sm hover:bg-[#006666] transition-colors cursor-pointer">
                          <SquareX className="h-3 w-3 mr-2 text-gray-500" /> <span>{match.name}</span>
                        </div>
                      ))}

                      {/* <div className="p-2 space-y-2">
                        <div className="space-x-2">
                          {bettingOptions.map((option) => (
                            <label key={option.id} className="inline-flex items-center mr-2 mb-2">
                              <input type="checkbox" className="form-checkbox h-3 w-3 text-blue-600" />
                              <span className="ml-1 text-xs">{option.label}</span>
                            </label>
                          ))}
                        </div>

                        <div className="space-x-2">
                          {overUnderOptions.map((option) => (
                            <label key={option.id} className="inline-flex items-center mr-2">
                              <input type="checkbox" className="form-checkbox h-3 w-3 text-blue-600" />
                              <span className="ml-1 text-xs">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div> */}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}