import { useEffect, useState } from "react";
import Input from "@/components/ui/input";
import DatePicker from "react-datepicker";
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
import { Button } from "@/components/ui/button";
import { SHOW_ENTRIES } from "@/utils/constants/pagination";
import { Pagination } from "@/components/common/pagination";
import Image from "next/image";
import csv from "@/assets/icons/csv.png";
import pdf from "@/assets/icons/pdf.png";

type ReportDropdown = {
  [key: string]: {
    [subKey: string]: string;
  };
};

const REPORT_DROPDOWN: ReportDropdown = {
  ALL: {
    ALL: "ALL",
  },
  "BALANCE REPORT": {
    ALL: "ALL",
  },
  "GAME REPORT": {
    ALL: "ALL",
    CRICKET: "cricket",
    // TENNIS: "tennis",
    // SOCCER: "soccer",
  },
  "SETTLEMENT REPORT": {
    ALL: "ALL",
  },
  "BONUS REPORT": {
    ALL: "ALL",
  },
};

const UserDataPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const [selectedSport, setSelectedSport] = useState("ALL");
  const [listOfSub, setListOfSub] = useState<string[]>([]);
  const [selectedSubSport, setSelectedSubSport] = useState("ALL");
  const [pageEntry, setPageEntry] = useState<string>(SHOW_ENTRIES.TWENTY_FIVE);
  const [showDetails, setShowDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const firstDropdown = Object.keys(REPORT_DROPDOWN);
  useEffect(() => {
    setListOfSub(Object.values(REPORT_DROPDOWN[selectedSport]));
  }, [selectedSport]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShowDetails(true);
    }
  };
  const showEntries = Object.values(SHOW_ENTRIES);
  return (
    <div className="min-h-screen p-4">
      <div className="m-2 p-4 sm:p-6 border rounded bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4">Account Statement Report</h2>

        {/* Search and Filters Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-5">
          {/* Dropdown 1 */}
          <Select
            className="w-full sm:max-w-xs border border-gray-300 rounded text-[#495057]"
            value={selectedSport}
            onChange={setSelectedSport}
          >
            <SelectTrigger className="h-10 w-full flex items-center justify-between px-3 border border-gray-300 rounded bg-white">
              <SelectValue placeholder={selectedSport} />
              <ChevronDown className="h-4 w-4 ml-2" />
            </SelectTrigger>
            <SelectContent>
              {firstDropdown &&
                firstDropdown.map((sports, index) => (
                  <SelectItem key={index} value={sports}>
                    {sports}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>

          {/* Dropdown 2 */}
          <Select
            className="w-full sm:max-w-xs border border-gray-300 rounded text-[#495057]"
            value={selectedSubSport}
            onChange={setSelectedSubSport}
          >
            <SelectTrigger className="h-10 w-full flex items-center justify-between px-3 border border-gray-300 rounded bg-white">
              <SelectValue placeholder={selectedSubSport} />
              <ChevronDown className="h-4 w-4 ml-2" />
            </SelectTrigger>
            <SelectContent>
              {listOfSub &&
                listOfSub.map((sports, index) => (
                  <SelectItem key={index} value={sports}>
                    {sports}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          {/* Search Input */}
          <Input
            type="text"
            placeholder="Search by client"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-10 w-full sm:max-w-sm border border-gray-300 rounded px-3"
          />

          {/* Date Pickers */}
          <DatePicker
            selected={fromDate}
            onChange={(date: Date | null) => setFromDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={5}
            dateFormat="dd/MM/yyyy HH:mm"
            className="border border-gray-400 px-3 py-2 h-10 rounded-md text-center w-full sm:w-[180px] text-[#495057]"
          />
          <DatePicker
            selected={toDate}
            onChange={(date: Date | null) => setToDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={5}
            dateFormat="dd/MM/yyyy HH:mm"
            className="border border-gray-400 px-3 py-2 h-10 rounded-md text-center w-full sm:w-[180px] text-[#495057]"
          />

          {/* Action Buttons */}
          <GradientButton
            className="w-full sm:w-auto rounded-l-lg text-md px-3 py-2 h-10"
            label="Go"
            size="sm"
            onclick={() => setShowDetails(true)}
          />
          <Button
            variant="destructive"
            className="w-full sm:w-auto rounded-r-lg text-md px-3 py-2 h-10"
            size="sm"
            onClick={() => setShowDetails(false)}
          >
            Reset
          </Button>
        </div>

        {/* User Details Section */}
        {showDetails && (
          <div className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                <Input
                  type="text"
                  placeholder="Search by client"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="h-10 sm:max-w-sm border border-gray-300 rounded px-3"
                />
                {[csv, pdf].map((title, index) => (
                  <button key={index} type="button">
                    <Image
                      src={title}
                      alt={title.toString()}
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                  </button>
                ))}
              </div>
              <table className="border border-gray-300 w-1/3">
                <tbody>
                  <tr>
                    <td className="px-4 py-1 border">Opening Balance</td>
                    <td className="px-4 py-1 border font-bold text-[#0E7926]">
                      0.00
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-1 border">Closing Balance</td>
                    <td className="px-4 py-1 border font-bold text-[#0E7926]">
                      0.00
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center">
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
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-[#016A82] text-white text-left">
                    <th className="px-4 py-2 border-r w-[30%]">Date & Time</th>
                    <th className="px-4 py-2 border-r w-[5%]">Credit</th>
                    <th className="px-4 py-2 border-r w-[5%]">Debit</th>
                    <th className="px-4 py-2 border-r w-[5%]">Closing</th>
                    <th className="px-4 py-2 border-r w-[30%]">Description</th>
                    <th className="px-4 py-2 border-r w-[25%]">From → To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300 bg-gray-100">
                    <td className="px-4 py-2 border-r">
                      10/2/2025, 9:19:13 pm
                    </td>
                    <td className="px-4 py-2 border-r">152.58.34.51</td>
                    <td className="px-4 py-2 border-r">DESKTOP</td>
                    <td className="px-4 py-2 border-r font-bold text-[#0E7926]">
                      0.00
                    </td>
                    <td className="px-4 py-2 border-r">Closing Balance</td>
                    <td className="px-4 py-2 border-r"></td>
                  </tr>
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-3 text-center text-gray-500"
                    >
                      No Data Found.
                    </td>
                  </tr>
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
        )}
      </div>
    </div>
  );
};

export default UserDataPage;
