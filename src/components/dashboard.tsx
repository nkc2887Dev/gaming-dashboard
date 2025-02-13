"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Input from "@/components/ui/input"

// Define TypeScript interfaces
interface MetricBox {
  title: string
  value: number
}

interface Player {
  player: string
  amount: number
}

interface Market {
  sport: string
  market: string
  amount: number
}

// interface UserCount {
//   role: string
//   count: number
// }

// interface GameplayDetails {
//   totalBets: number
//   totalBetAmount: number
//   totalPL: number
// }

interface CasinoDetail {
  name: string
  value: number
}

// Sample data
const metricBoxes: MetricBox[] = [
  { title: "P&L", value: 0 },
  { title: "COMMISSION", value: 0 },
  { title: "DEPOSIT", value: 0 },
  { title: "WITHDRAWAL", value: 0 },
  { title: "TOTAL BETS", value: 0 },
  { title: "SPORTSBOOK P&L", value: 0 },
]

const winningPlayers: Player[] = []
const losingPlayers: Player[] = []
const winningMarkets: Market[] = []
const losingMarkets: Market[] = []

const casinoDetails: CasinoDetail[] = [
  { name: "Indian Poker/ Live Casino P&L", value: 0 },
  { name: "Indian Poker II P&L", value: 0 },
  { name: "Evolution P&L", value: 0 },
  { name: "Vivo P&L", value: 0 },
  { name: "Betgames P&L", value: 0 },
  { name: "Casino III P&L", value: 0 },
  { name: "Spribe P&L", value: 0 },
  { name: "Total P&L", value: 0 },
]

export default function Dashboard() {
  const [fromDate, setFromDate] = useState("2025-02-10")
  const [toDate, setToDate] = useState("2025-02-17")
  const [selectedSport, setSelectedSport] = useState("cricket");

  return (
    <div className="p-4">
      <h2 className="font-bold p-2">Dashboard</h2>
      {/* Date Range Selector */}
      <div className="bg-white p-4 rounded-lg mb-4 flex gap-4 items-end border shadow-xl">
        <div>
          <label className="block text-sm mb-1">From Date:</label>
          <Input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="w-48 border" />
        </div>
        <div>
          <label className="block text-sm mb-1">To Date:</label>
          <Input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-48 border rounded-lg" />
        </div>
        <Button className="bg-[#008fb3] hover:bg-[#006666] w-sm rounded-l-lg">Submit</Button>
        <Button variant="destructive" className="w-sm rounded-r-lg">Reset</Button>
      </div>

      {/* Metric Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        {metricBoxes.map((box, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border shadow-xl">
            <h2 className="text-sm font-semibold bg-[#008fb3] text-white p-2 rounded-t-lg -mt-4 -mx-4 mb-2">
              {box.title}
            </h2>
            <p className="text-2xl font-bold">{box.value}</p>
          </div>
        ))}
      </div>

      {/* Players and Markets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        {/* Top 5 Winning Players */}
        <div className="bg-white rounded-lg overflow-hidden border shadow-xl">
          <h2 className="text-sm font-semibold bg-[#008fb3] text-white p-2">TOP 5 WINNING PLAYER</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2">Player</th>
                <th className="text-right p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {winningPlayers.length === 0 && (
                <tr>
                  <td colSpan={2} className="text-center p-2">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Similar tables for other sections */}
        {/* TOP 5 LOSING PLAYER */}
        <div className="bg-white rounded-lg overflow-hidden border shadow-xl">
          <h2 className="text-sm font-semibold bg-[#008fb3] text-white p-2">TOP 5 LOSING PLAYER</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2">Player</th>
                <th className="text-right p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {losingPlayers.length === 0 && (
                <tr>
                  <td colSpan={2} className="text-center p-2">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* TOP 5 WINNING MARKETS */}
        <div className="bg-white rounded-lg overflow-hidden border shadow-xl">
          <h2 className="text-sm font-semibold bg-[#008fb3] text-white p-2">TOP 5 WINNING MARKETS</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2">Sport</th>
                <th className="text-left p-2">Market</th>
                <th className="text-right p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {winningMarkets.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center p-2">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* TOP 5 LOSING MARKETS */}
        <div className="bg-white rounded-lg overflow-hidden border shadow-xl">
          <h2 className="text-sm font-semibold bg-[#008fb3] text-white p-2">TOP 5 LOSING MARKETS</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2">Sport</th>
                <th className="text-left p-2">Market</th>
                <th className="text-right p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {losingMarkets.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center p-2">
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
        <div className="bg-white rounded-lg overflow-hidden border shadow-xl">
          <h2 className="text-sm font-semibold bg-[#008fb3] text-white p-2">USER COUNT</h2>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Role</th>
                  <th className="text-right">Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="text-center py-2">
                    No data available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SPORTS GAMEPLAY DETAILS */}
        <div className="bg-white rounded-lg overflow-hidden border shadow-xl">
          <h2 className="text-sm font-semibold bg-[#008fb3] text-white p-2">SPORTS GAMEPLAY DETAILS</h2>
          <div className="p-4">
            <Select value={selectedSport} onChange={setSelectedSport}>
              <SelectTrigger>
                <SelectValue placeholder="Select Sports" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cricket">Cricket</SelectItem>
                <SelectItem value="football">Football</SelectItem>
                <SelectItem value="tennis">Tennis</SelectItem>
              </SelectContent>
            </Select>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Total Bets</span>
                <span>0</span>
              </div>
              <div className="flex justify-between">
                <span>Total Bet Amount</span>
                <span>0</span>
              </div>
              <div className="flex justify-between">
                <span>Total P&L</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>

        {/* OTHERS GAMEPLAY DETAILS */}
        <div className="bg-white rounded-lg overflow-hidden border shadow-xl">
          <h2 className="text-sm font-semibold bg-[#008fb3] text-white p-2">OTHERS GAMEPLAY DETAILS</h2>
          <div className="p-4">
            <Select value={selectedSport} onChange={setSelectedSport}>
              <SelectTrigger>
                <SelectValue placeholder="Select Other" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="other1">Other 1</SelectItem>
                <SelectItem value="other2">Other 2</SelectItem>
              </SelectContent>
            </Select>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Total Bets</span>
                <span>0</span>
              </div>
              <div className="flex justify-between">
                <span>Total Bet Amount</span>
                <span>0</span>
              </div>
              <div className="flex justify-between">
                <span>Total P&L</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>

        {/* CASINO GAMEPLAY DETAILS */}
        <div className="bg-white rounded-lg overflow-hidden border shadow-xl">
          <h2 className="text-sm font-semibold bg-[#008fb3] text-white p-2">CASINO GAMEPLAY DETAILS</h2>
          <div className="p-4">
            <div className="space-y-2">
              {casinoDetails.map((detail, index) => (
                <div key={index} className="flex justify-between">
                  <span>{detail.name}</span>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

