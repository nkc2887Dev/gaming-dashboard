import { Card, CardContent } from "@/components/ui/card";
import { GamePlayTable } from "@/components/game-play-table";
import type { GamePlay } from "@/@types/userDetails";

interface GamePlaySectionProps {
  gamePlays: GamePlay[];
}

export function GamePlaySection({ gamePlays }: GamePlaySectionProps) {
  return (
    <Card className="mb-4 relative">
      {/* Section Title */}
      <div className="absolute -top-3 left-4 px-2 text-lg font-bold">
        Game Play:
      </div>

      <CardContent className="pt-6">
        {/* Header Tabs */}
        <div className="border rounded-lg p-2 bg-white">
          <div className="flex justify-between border rounded-md overflow-hidden text-center text-[#73819A] text-sm bg-gray-100">
            <span className="flex-1 py-2 border-r font-semibold">P&L</span>
            <span className="flex-1 py-2 border-r font-semibold">
              Commission
            </span>
            <span className="flex-1 py-2 font-semibold">Total Bet</span>
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-3 gap-6 mt-4">
          {/* First Table - Sports Betting */}
          <GamePlayTable
            headers={["Sport", "Bet", "Bet Amount", "P & L"]}
            data={gamePlays.map((game) => [
              game.sport,
              game.bet,
              game.betAmount,
              game.pl,
            ])}
          />

          {/* Second Table - Casino P&L */}
          <GamePlayTable
            headers={["Casino", "Total P & L"]}
            data={gamePlays.map((game) => [game.casino, game.totalPL])}
          />

          {/* Third Table - Market Data */}
          <GamePlayTable
            headers={["Sport", "Market", "P & L"]}
            data={gamePlays.map((game) => [game.sport, game.market, game.pl])}
          />
        </div>
      </CardContent>
    </Card>
  );
}
