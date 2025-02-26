import { useState } from "react";
import Input from "@/components/ui/input";
import "react-datepicker/dist/react-datepicker.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { SHOW_ENTRIES } from "@/utils/constants/pagination";
import { Button } from "@/components/ui/button";

const Header = [
  { title: "User Name", space: 15 },
  { title: "Credit Reference", space: 10 },
  { title: "Balance", space: 8 },
  { title: "Pending Bal.", space: 8 },
  { title: "Available Bal.", space: 8 },
  { title: "Current P&L", space: 8 },
  { title: "Exposure", space: 8 },
  { title: "U Lock", space: 4 },
  { title: "B Lock", space: 4 },
  { title: "My %", space: 4 },
  { title: "Type", space: 8 },
  { title: "Actions", space: 15 },
];

const data = [
  {
    username: "testsuperadmin123",
    creditReference: "50.00",
    balance: "50.00",
    pendingBalance: "0.00",
    availableBalance: "50.00",
    currentPnL: "0.00",
    exposure: "0.00",
    uLock: "",
    bLock: "",
    myPercentage: "78%",
    type: "SuperMaster",
  },
];

const ClientList = ({
  setPage,
}: {
  setPage: (page: "clientList" | "addClient") => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageEntry, setPageEntry] = useState<string>("25");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // setShowDetails(true);
    }
  };
  const showEntries = Object.values(SHOW_ENTRIES);
  return (
    <div className="min-h-screen p-4">
      <div className="sm:p-6 border rounded bg-white shadow-md">
        <h2 className="text-lg font-semibold">Client List</h2>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-2">
              <Input
                type="text"
                placeholder="Search by client"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="h-8 sm:max-w-sm border border-gray-300 rounded"
              />
              <Input
                type="text"
                placeholder="Search by client"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="h-8 sm:max-w-sm border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center text-sm font-bold">
              <span>Show</span>
              <Select
                className="w-full m-2 sm:max-w-xs border border-gray-300 rounded text-[#495057]"
                value={pageEntry}
                onChange={setPageEntry}
              >
                <SelectTrigger className="h-10 w-full flex items-center justify-between px-3 border border-gray-300 rounded bg-white">
                  <SelectValue placeholder={pageEntry} />
                  <ChevronDown className="h-4 w-4 ml-2" />
                </SelectTrigger>
                <SelectContent>
                  {showEntries &&
                    showEntries.map((entry, index) => (
                      <SelectItem key={index} value={entry}>
                        {entry}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <span>entries</span>
              <Button
                onClick={() => setPage("addClient")}
                className="ml-2 text-nowrap rounded-sm text-sm font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#2E899C] to-[#159ab3] text-white shadow-md hover:from-[#159ab3] hover:to-[#03364c]"
              >
                Add Client Account
              </Button>
              <Button className="ml-2 text-nowrap rounded-sm text-sm font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#2E899C] to-[#159ab3] text-white shadow-md hover:from-[#159ab3] hover:to-[#03364c]">
                Inactive List
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto py-2">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-[#016A82] text-white text-left">
                  {Header.map(({ title, space }, index) => (
                    <th
                      key={index}
                      style={{ width: `${space}%` }}
                      className="p-2 text-sm font-bold border-r"
                    >
                      <span className="text-nowrap">{title} ↑↓</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((item, rowIndex) => (
                    <tr key={rowIndex} className="border-t border-gray-300">
                      {Header.map(({}, colIndex) => {
                        const key = Object.keys(data[0])[
                          colIndex
                        ] as keyof typeof item;
                        return (
                          <td
                            key={colIndex}
                            className="px-4 py-2 text-center border-r"
                          >
                            {item[key] || "--"}
                          </td>
                        );
                      })}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={Header.length}
                      className="px-6 py-3 text-center text-gray-500"
                    >
                      No Data Found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between">
            <span>
              Showing {0} - {0} of {0} entries
            </span>
            <div className="flex">
              <GradientButton className="!rounded-none" label="First" />
              <GradientButton className="!rounded-none" label="Prev" />
              <GradientButton className="!rounded-none" label={"1"} />
              <GradientButton className="!rounded-none" label="Next" />
              <GradientButton className="!rounded-none" label="Last" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientList;
