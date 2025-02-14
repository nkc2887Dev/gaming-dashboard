import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import type { GamePlay } from "@/utils/@types";

interface GamePlaySectionProps {
  gamePlays: GamePlay[]
}

export function GamePlaySection({ gamePlays }: GamePlaySectionProps) {
  return (
    <Card className="mb-4 relative">
      <div className="absolute -top-3 left-4 bg-white px-2 text-lg font-semibold">
      Game Play:
      </div>
      <CardContent>
        <div className="py-7 grid grid-cols-3 gap-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sport</TableHead>
                <TableHead>Bet</TableHead>
                <TableHead>Bet Amount</TableHead>
                <TableHead>P & L</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gamePlays.map((game, index) => (
                <TableRow key={index}>
                  <TableCell>{game.sport}</TableCell>
                  <TableCell>{game.bet}</TableCell>
                  <TableCell>{game.betAmount}</TableCell>
                  <TableCell>{game.pl}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Casino</TableHead>
                <TableHead>Total P & L</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gamePlays.map((game, index) => (
                <TableRow key={index}>
                  <TableCell>{game.casino}</TableCell>
                  <TableCell>{game.totalPL}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sport</TableHead>
                <TableHead>Market</TableHead>
                <TableHead>P & L</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gamePlays.map((game, index) => (
                <TableRow key={index}>
                  <TableCell>{game.sport}</TableCell>
                  <TableCell>{game.market}</TableCell>
                  <TableCell>{game.pl}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

