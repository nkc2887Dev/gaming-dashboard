"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GradientButton } from "@/components/ui/gradient-button";
import Popup from "./ui/popup";

interface MetricBox {
  title: string;
  value: number;
}

interface Player {
  player: string;
  amount: number;
}

interface Market {
  sport: string;
  market: string;
  amount: number;
}

// interface CasinoDetail {
//   name: string;
//   value: number;
// }

// Sample data
const metricBoxes: MetricBox[] = [
  { title: "P&L", value: 0 },
  { title: "COMMISSION", value: 0 },
  { title: "DEPOSIT", value: 0 },
  { title: "WITHDRAWAL", value: 0 },
  { title: "TOTAL BETS", value: 0 },
  { title: "SPORTSBOOK P&L", value: 0 },
];

const winningPlayers: Player[] = [];
const losingPlayers: Player[] = [];
const winningMarkets: Market[] = [];
const losingMarkets: Market[] = [];

// const casinoDetails: CasinoDetail[] = [
//   { name: "Indian Poker/ Live Casino P&L", value: 0 },
//   { name: "Indian Poker II P&L", value: 0 },
//   { name: "Evolution P&L", value: 0 },
//   { name: "Vivo P&L", value: 0 },
//   { name: "Betgames P&L", value: 0 },
//   { name: "Casino III P&L", value: 0 },
//   { name: "Spribe P&L", value: 0 },
//   { name: "Total P&L", value: 0 },
// ];

export default function Dashboard() {
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const [selectedSport, setSelectedSport] = useState("cricket");

  return (
    <div className="p-4 mb-4">
      <Popup />
      <h2 className="text-lg font-semibold mb-2">Dashboard</h2>
      {/* Date Range Selector */}
      <div
        className="bg-white p-4 rounded-md mb-4 flex flex-wrap gap-4 items-start border shadow-xl"
        style={{ boxShadow: "0px 4px 10px rgba(22, 163, 187, 0.3)" }}
      >
        <div>
          <label className="block text-sm mb-1">From Date:</label>
          <DatePicker
            selected={fromDate}
            onChange={(date: Date | null) => setFromDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={5}
            dateFormat="dd/MM/yyyy HH:mm"
            className="border border-gray-400 px-3 py-2 rounded-md text-center w-[180px]"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">To Date:</label>
          <DatePicker
            selected={toDate}
            onChange={(date: Date | null) => setToDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={5}
            dateFormat="dd/MM/yyyy HH:mm"
            className="border border-gray-400 px-3 py-2 rounded-md text-center w-[180px]"
          />
        </div>
        <div className="flex gap-2 mt-6">
          <GradientButton className="rounded-l-lg" label="Submit" size="lg" />
          <Button variant="destructive" className="w-lg rounded-r-lg" size="lg">
            Reset
          </Button>
        </div>
      </div>

      {/* Metric Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        {metricBoxes.map((box, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md border shadow-xl"
            style={{ boxShadow: "0px 4px 10px rgba(22, 163, 187, 0.3)" }}
          >
            <h2 className="text-sm font-bold bg-[#16A3BB] text-black p-2 rounded-t-lg -mt-4 -mx-4 mb-2">
              {box.title}
            </h2>
            <p className="text-sm font-bold">{box.value}</p>
          </div>
        ))}
      </div>

      {/* Players and Markets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        {/* Top 5 Winning Players */}
        <div
          className="bg-white rounded-md overflow-hidden border shadow-xl"
          style={{ boxShadow: "0px 4px 10px rgba(22, 163, 187, 0.3)" }}
        >
          <h2 className="text-md font-bold bg-[#16A3BB] text-black p-2">
            TOP 5 WINNING PLAYER
          </h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left text-sm p-2 border-l">Player</th>
                <th className="text-right text-sm p-2 border-l">Amount</th>
              </tr>
            </thead>
            <tbody>
              {winningPlayers.length === 0 && (
                <tr>
                  <td colSpan={2} className="text-center text-sm p-2">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Similar tables for other sections */}
        {/* TOP 5 LOSING PLAYER */}
        <div
          className="bg-white rounded-md overflow-hidden border shadow-xl"
          style={{ boxShadow: "0px 4px 10px rgba(22, 163, 187, 0.3)" }}
        >
          <h2 className="text-sm font-bold bg-[#16A3BB] text-black p-2">
            TOP 5 LOSING PLAYER
          </h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left text-sm p-2 border-l">Player</th>
                <th className="text-right text-sm p-2 border-l">Amount</th>
              </tr>
            </thead>
            <tbody>
              {losingPlayers.length === 0 && (
                <tr>
                  <td colSpan={2} className="text-center text-sm p-2">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* TOP 5 WINNING MARKETS */}
        <div
          className="bg-white rounded-md overflow-hidden border shadow-xl"
          style={{ boxShadow: "0px 4px 10px rgba(22, 163, 187, 0.3)" }}
        >
          <h2 className="text-sm font-bold bg-[#16A3BB] text-black p-2">
            TOP 5 WINNING MARKETS
          </h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left text-sm p-2 border-l">Sport</th>
                <th className="text-left text-sm p-2 border-l">Market</th>
                <th className="text-right text-sm p-2 border-l">Amount</th>
              </tr>
            </thead>
            <tbody>
              {winningMarkets.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center text-sm p-2">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* TOP 5 LOSING MARKETS */}
        <div
          className="bg-white rounded-md overflow-hidden border shadow-xl"
          style={{ boxShadow: "0px 4px 10px rgba(22, 163, 187, 0.3)" }}
        >
          <h2 className="text-sm font-bold bg-[#16A3BB] text-black p-2">
            TOP 5 LOSING MARKETS
          </h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left text-sm p-2 border-l">Sport</th>
                <th className="text-left text-sm p-2 border-l">Market</th>
                <th className="text-right text-sm p-2 border-l">Amount</th>
              </tr>
            </thead>
            <tbody>
              {losingMarkets.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center text-sm p-2">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* USER COUNT */}
        <div
          className="bg-white rounded-md overflow-hidden border shadow-xl"
          style={{ boxShadow: "0px 4px 10px rgba(22, 163, 187, 0.3)" }}
        >
          <h2 className="text-sm font-bold bg-[#16A3BB] text-black p-2">
            USER COUNT
          </h2>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left text-sm">Role</th>
                  <th className="text-right text-sm border-l">Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="text-center text-sm py-2">
                    No data available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SPORTS GAMEPLAY DETAILS */}
        <div
          className="bg-white rounded-md overflow-hidden border shadow-xl"
          style={{ boxShadow: "0px 4px 10px rgba(22, 163, 187, 0.3)" }}
        >
          <h2 className="text-sm font-bold bg-[#16A3BB] text-black p-2">
            SPORTS GAMEPLAY DETAILS
          </h2>
          <div className="p-4">
            <Select value={selectedSport} onChange={setSelectedSport}>
              <SelectTrigger>
                <div className="flex items-center justify-between">
                  <SelectValue placeholder="Select Sports" />
                  <ChevronDown className="h-4 w-4 ml-2" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cricket">Cricket</SelectItem>
                {/* <SelectItem value="football">Football</SelectItem> */}
                {/* <SelectItem value="tennis">Tennis</SelectItem> */}
              </SelectContent>
            </Select>
            {/* Table */}
            <table className="w-full mt-4 border border-gray-300">
              <tbody>
                <tr className="border-b">
                  <td className="text-sm px-3 py-2">Total Bets</td>
                  <td className="text-sm px-3 py-2 text-right border-l">0</td>
                </tr>
                <tr className="border-b">
                  <td className="text-sm px-3 py-2">Total Bet Amount</td>
                  <td className="text-sm px-3 py-2 text-right border-l">0</td>
                </tr>
                <tr>
                  <td className="text-sm px-3 py-2">Total P&L</td>
                  <td className="text-sm px-3 py-2 text-right border-l">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* OTHERS GAMEPLAY DETAILS */}
        <div
          className="bg-white rounded-md overflow-hidden border shadow-xl"
          style={{ boxShadow: "0px 4px 10px rgba(22, 163, 187, 0.3)" }}
        >
          <h2 className="text-sm font-bold bg-[#16A3BB] text-black p-2">
            OTHERS GAMEPLAY DETAILS
          </h2>
          <div className="p-4">
            <Select value={selectedSport} onChange={setSelectedSport}>
              <SelectTrigger>
                <div className="flex items-center justify-between">
                  <SelectValue placeholder="Select Other" />
                  <ChevronDown className="h-4 w-4 ml-2" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="other1">Other 1</SelectItem>
                <SelectItem value="other2">Other 2</SelectItem>
              </SelectContent>
            </Select>
            <table className="w-full mt-4 border border-gray-300">
              <tbody>
                <tr className="border-b">
                  <td className="text-sm px-3 py-2">Total Bets</td>
                  <td className="text-sm px-3 py-2 text-right border-l">0</td>
                </tr>
                <tr className="border-b">
                  <td className="text-sm px-3 py-2">Total Bet Amount</td>
                  <td className="text-sm px-3 py-2 text-right border-l">0</td>
                </tr>
                <tr>
                  <td className="text-sm px-3 py-2">Total P&L</td>
                  <td className="text-sm px-3 py-2 text-right border-l">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CASINO GAMEPLAY DETAILS */}
        {/* <div
          className="bg-white rounded-md overflow-hidden border shadow-xl"
          style={{ boxShadow: "0px 4px 10px rgba(22, 163, 187, 0.3)" }}
        >
          <h2 className="text-sm font-bold bg-[#16A3BB] text-black p-2">
            CASINO GAMEPLAY DETAILS
          </h2>
          <div className="p-4">
            <div className="space-y-2">
              {casinoDetails.map((detail, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-sm">{detail.name}</span>
                  <span className="text-sm">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
