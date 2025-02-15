import { SettlementTable } from "@/components/settlement/table";
import {
  sampleCreditMasterSettlementData,
  sampleDebitMasterSettlementData,
  settlementHeaders,
  settlementHeadersWithBal,
} from "@/lib/settlment";
import React from "react";

const MasterSettlement = () => {
  return (
    <div className="m-2 p-6 border rounded">
      <h2 className="text-lg font-semibold mb-2">Master Settlement</h2>
      <div className="flex items-center gap-8">
        <SettlementTable
          title="Master Settlement"
          subTitle="Creditors Account (dena hai)"
          headers={settlementHeadersWithBal}
          data={sampleCreditMasterSettlementData}
          headerColor="bg-[#28A745]"
        />
        <SettlementTable
          title="Master Settlement"
          subTitle="Debtors Account (lena hai)"
          headers={settlementHeaders}
          data={sampleDebitMasterSettlementData}
          headerColor="bg-[#CB0707]"
        />
      </div>
    </div>
  );
};

export default MasterSettlement;
