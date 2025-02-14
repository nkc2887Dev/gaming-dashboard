import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface TableProps {
  headers: string[];
  data: (string | number | null)[][];
}

export function GamePlayTable({ headers, data }: TableProps) {
  return (
    <Table className="border rounded-md">
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead key={index} className="border-r shadow-xl font-bold">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex} className="text-center">
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex} className="border-r font-bold">
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
