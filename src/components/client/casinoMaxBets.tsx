import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";
import { CasinoMaxBetsTableProps } from "@/@types/client";

const headers = [
  { sport: "Indian Poker/ Live Casino" },
  { sport: "Indian Poker II" },
  { sport: "Evolution" },
  { sport: "Vivo" },
  { sport: "Betgames" },
  { sport: "Casino III" },
  { sport: "Spribe" },
];

export function CasinoMaxBetsTable({ options }: CasinoMaxBetsTableProps) {
  return (
    <>
      <Card
        className={`mb-4 relative ${options?.border ? options.border : ""} ${options?.titleBg ? options.titleBg : "bg-[#F7F7F8]"}`}
      >
        <div
          className={`absolute -top-3 left-4 px-2 ${options?.title ? options.title : "text-lg"} ${options?.titleBg ? options.titleBg : ""} font-bold`}
        >
          Casino Max Bets:
        </div>
        <CardContent className="pt-7">
          <div className="border">
            <Table className="border-collapse">
              <TableHeader>
                <TableRow>
                  {headers.map((header, index) => (
                    <TableCell key={index} className="text-left font-medium">
                      {header.sport}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <TableCell key={index} className="bg-[#ECECEC]">
                      <Input type="number" min={0} className="w-full" />
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
