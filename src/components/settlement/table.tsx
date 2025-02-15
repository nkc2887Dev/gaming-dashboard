import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { SettlementTableProps } from "@/@types/settlement";

export function SettlementTable({
  title,
  subTitle,
  headers,
  data,
  headerColor,
}: SettlementTableProps) {
  return (
    <div className="w-full rounded-sm">
      <div className={`${headerColor} px-4 py-2 text-white`}>
        <h3 className="text-lg font-medium">{subTitle}</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-[#E8E8E8] hover:bg-[#E8E8E8]">
            {headers.map((header) => (
              <TableCell
                key={header.key}
                className="border-x border-gray-300 p-2 font-medium text-black"
              >
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {headers.map((header) => (
                <TableCell
                  key={`${index}-${header.key}`}
                  className="border-x border-gray-300 p-2"
                >
                  {row[header.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
