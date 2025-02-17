import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { BettingLimits } from "@/@types/betting";
import { Card, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";

interface MinMaxBetsTableProps {
  data: BettingLimits;
}

const headers = [
  { sport: "Cricket", columns: ["Odds", "Bookmaker", "Fancy", "Lottery"] },
  { sport: "Soccer", columns: ["Odds", "Bookmaker", "Over Under", "Lottery"] },
  { sport: "Tennis", columns: ["Odds", "Set Winner", "Bookmaker", "Lottery"] },
  { sport: "Horse", columns: ["Odds"] },
  { sport: "Greyhound", columns: ["Odds"] },
];

export function MinMaxBetsTable({ data }: MinMaxBetsTableProps) {
  return (
    <>
      <Card className="mb-4 relative bg-[#F7F7F8]">
        <div className="absolute -top-3 left-4 px-2 text-lg font-bold">
          Min Max Bets:
        </div>
        <CardContent className="pt-7">
          <div className="border">
            <Table className="border-collapse">
              <TableHeader>
                <TableRow>
                  <TableCell className="text-left font-medium"></TableCell>
                  <TableCell className="text-left font-medium" colSpan={4}>
                    Cricket
                  </TableCell>
                  <TableCell className="text-left font-medium" colSpan={4}>
                    Soccer
                  </TableCell>
                  <TableCell className="text-left font-medium" colSpan={4}>
                    Tennis
                  </TableCell>
                  <TableCell className="text-left font-medium">Horse</TableCell>
                  <TableCell className="text-left font-medium">
                    GreyHound
                  </TableCell>
                </TableRow>
                <TableRow className="bg-[#ECECEC]">
                  <TableCell className="text-left font-medium"></TableCell>
                  {headers.flatMap(({ columns }) =>
                    columns.map((col, index) => (
                      <TableCell
                        key={col + index}
                        className="text-left font-medium"
                      >
                        {col}
                      </TableCell>
                    )),
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="w-24 text-left font-medium bg-[#ECECEC]">
                    Max Bet
                  </TableCell>
                  {Array.from({ length: 14 }).map((_, index) => (
                    <TableCell key={index}>
                      <Input type="number" min={0} className="w-14" />
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="w-24 text-left font-medium bg-[#ECECEC]">
                    Max Profit
                  </TableCell>
                  {Array.from({ length: 14 }).map((_, index) => (
                    <TableCell key={index}>
                      <Input type="number" min={0} className="w-14" />
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow>
                  <TableCell rowSpan={1} className=""></TableCell>
                  <TableCell colSpan={1} className="text-left">
                    Sportbook
                  </TableCell>
                  <TableCell colSpan={2} className="text-left">
                    Election
                  </TableCell>
                </TableRow>
                <TableRow className="bg-[#ECECEC]">
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>Fancy</TableCell>
                  <TableCell>Lottery</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="w-24 text-left bg-[#ECECEC]">
                    Max Bet
                  </TableCell>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <TableCell key={index}>
                      <Input type="number" min={0} className="w-96" />
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="w-24 text-left bg-[#ECECEC]">
                    Max Profit
                  </TableCell>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <TableCell key={index}>
                      <Input type="number" min={0} className="w-96" />
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
