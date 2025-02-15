import { SettlementData, TableHeader } from "@/@types/settlement"

export const settlementHeadersWithBal: TableHeader[] = [
    { key: "account", label: "Account" },
    { key: "clientPL", label: "Client(P/L)" },
    { key: "shortBalance", label: "Short Balance" },
    { key: "settleAmount", label: "Settle Amount" },
    { key: "remarks", label: "Remarks" },
]
export const settlementHeaders: TableHeader[] = [
    { key: "account", label: "Account" },
    { key: "clientPL", label: "Client(P/L)" },
    { key: "settleAmount", label: "Settle Amount" },
    { key: "remarks", label: "Remarks" },
]
  
export const sampleCreditUserSettlementData: SettlementData[] = [
    {
      account: "Account 1",
      clientPL: 1000,
      settleAmount: 1500,
      remarks: "Pending",
    },
    {
      account: "Account 2",
      clientPL: -500,
      settleAmount: -300,
      remarks: "Completed",
    },
]
export const sampleDebitUserSettlementData: SettlementData[] = [
    {
      account: "Account 1",
      clientPL: 1000,
      settleAmount: 1500,
      remarks: "Pending",
    },
    {
      account: "Account 2",
      clientPL: -500,
      settleAmount: -300,
      remarks: "Completed",
    },
]
export const sampleCreditMasterSettlementData: SettlementData[] = [
    {
      account: "Account 1",
      clientPL: 1000,
      shortBalance: 500,
      settleAmount: 1500,
      remarks: "Pending",
    },
    {
      account: "Account 2",
      clientPL: -500,
      shortBalance: 200,
      settleAmount: -300,
      remarks: "Completed",
    },
]
export const sampleDebitMasterSettlementData: SettlementData[] = [
    {
      account: "Account 1",
      clientPL: 1000,
      settleAmount: 1500,
      remarks: "Pending",
    },
    {
      account: "Account 2",
      clientPL: -500,
      settleAmount: -300,
      remarks: "Completed",
    },
]