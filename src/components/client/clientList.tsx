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
import { SHOW_ENTRIES } from "@/utils/constants/pagination";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { NAVIGATION_PATHS } from "@/utils/constants/routes";
import { Pagination } from "@/components/common/pagination";
import Image from "next/image";
import csv from "@/assets/icons/csv.png";
import csvall from "@/assets/icons/csvall.png";
import pdf from "@/assets/icons/pdf.png";
import pdfall from "@/assets/icons/pdfall.png";
import { Checkbox } from "../ui/checkbox";
import MasterPasswordModal from "../common/model/MasterPassword";

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

const ClientList = () => {
  const [openUserModal, setOpenUserModal] = useState(false);
  const [isUserChecked, setIsUserChecked] = useState(false);
  const [openBetModal, setOpenBetModal] = useState(false);
  const [isBetChecked, setIsBetChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageEntry, setPageEntry] = useState<string>(SHOW_ENTRIES.TWENTY_FIVE);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handleUserCheckedChange = (checked: boolean) => {
    setIsUserChecked(checked);
    setOpenUserModal(true);
  };

  const handleBetCheckedChange = (checked: boolean) => {
    setIsBetChecked(checked);
    setOpenBetModal(true);
  };

  const router = useRouter();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // setShowDetails(true);
    }
  };
  const showEntries = Object.values(SHOW_ENTRIES);
  return (
    <>
      <div className="p-4">
        <div className="p-4 sm:p-6 border rounded bg-white shadow-md">
          <h2 className="text-lg font-semibold">Client List</h2>
          <div className="space-y-1">
            <div className="flex items-center justify-between flex-wrap lg:flex-nowrap">
              <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-2">
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
                <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-2">
                  {[csv, csvall, pdf, pdfall].map((title, index) => (
                    <div key={index}>
                      <button type="button">
                        <Image
                          src={title}
                          alt={title.toString()}
                          width={40}
                          height={40}
                          className="sm:max-w-sm rounded-md"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center text-sm flex-wrap sm:flex-nowrap font-bold">
                <div className="flex items-center text-sm mr-2">
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
                </div>
                <Button
                  onClick={() => router.push(NAVIGATION_PATHS.ADD_CLIENT)}
                  className="m-2 ml-0 text-nowrap rounded-sm text-sm font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#2E899C] to-[#159ab3] text-white shadow-md hover:from-[#159ab3] hover:to-[#03364c]"
                >
                  Add Client Account
                </Button>
                <Button className="m-2 ml-0  text-nowrap rounded-sm text-sm font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#2E899C] to-[#159ab3] text-white shadow-md hover:from-[#159ab3] hover:to-[#03364c]">
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
                        {Header.map((header, colIndex) => {
                          const key = Object.keys(data[0])[
                            colIndex
                          ] as keyof typeof item;
                          const isHighlighted = [
                            "Credit Reference",
                            "Balance",
                          ].includes(header.title);

                          if (header.title === "Actions") {
                            return (
                              <td
                                key={colIndex}
                                className="px-2 py-1 text-center border-r"
                              >
                                <div className="flex gap-1">
                                  {[
                                    {
                                      label: "U",
                                      color: "#FC8D5E",
                                      textColor: "text-white",
                                    },
                                    {
                                      label: "D|C",
                                      color: "#006400",
                                      textColor: "text-white",
                                    },
                                    {
                                      label: "W",
                                      color: "#1F3A93",
                                      textColor: "text-white",
                                    },
                                    {
                                      label: "P",
                                      color: "#FFF200",
                                      textColor: "text-black",
                                    },
                                    {
                                      label: "GC",
                                      color: "#E8A0CF",
                                      textColor: "text-black",
                                    },
                                    {
                                      label: "CC",
                                      color: "#32CD32",
                                      textColor: "text-black",
                                    },
                                  ].map((btn, index) => (
                                    <button
                                      key={index}
                                      className={`font-bold px-2 py-1 rounded ${btn.textColor}`}
                                      style={{ backgroundColor: btn.color }}
                                    >
                                      {btn.label}
                                    </button>
                                  ))}
                                </div>
                              </td>
                            );
                          }

                          if (header.title === "U Lock") {
                            return (
                              <td
                                key={colIndex}
                                className="px-4 py-2 text-center border-r"
                              >
                                <Checkbox
                                  id="userLock"
                                  onCheckedChange={handleUserCheckedChange}
                                />
                              </td>
                            );
                          }

                          if (header.title === "B Lock") {
                            return (
                              <td
                                key={colIndex}
                                className="px-4 py-2 text-center border-r"
                              >
                                <Checkbox
                                  id="betLock"
                                  onCheckedChange={handleBetCheckedChange}
                                />
                              </td>
                            );
                          }

                          return (
                            <td
                              key={colIndex}
                              className={`px-4 py-2 text-center border-r ${
                                isHighlighted ? "text-[#0E7926]" : ""
                              }`}
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
            <div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
              <span>
                Showing {0} - {0} of {0} entries
              </span>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                basePath="/client"
                queryParam="page"
              />
            </div>
          </div>
        </div>
      </div>
      {openUserModal && (
        <MasterPasswordModal
          isOpen={openUserModal}
          onClose={() => setOpenUserModal(false)}
          title={isUserChecked ? "Lock User" : "Unlock User"}
        />
      )}
      {openBetModal && (
        <MasterPasswordModal
          isOpen={openBetModal}
          onClose={() => setOpenBetModal(false)}
          title={isBetChecked ? "Lock Bet" : "Unlock Bet"}
        />
      )}
    </>
  );
};

export default ClientList;
