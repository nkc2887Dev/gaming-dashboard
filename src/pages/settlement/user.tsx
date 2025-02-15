import { SettlementTable } from "@/components/settlement/table";
import { sampleCreditUserSettlementData, sampleDebitUserSettlementData, settlementHeaders } from "@/lib/settlment";
import React from "react";

const UserSettlement = () => {
  return (
      <div className="m-2 p-6 border rounded">
        <h2 className="text-lg font-semibold mb-2">User Settlement</h2>
        <div className="flex items-center gap-8">
          <SettlementTable
            title="User Settlement"
            subTitle="Creditors Account (dena hai)"
            headers={settlementHeaders}
            data={sampleCreditUserSettlementData}
            headerColor="bg-[#28A745]"
          />
          <SettlementTable
            title="User Settlement"
            subTitle="Debtors Account (lena hai)"
            headers={settlementHeaders}
            data={sampleDebitUserSettlementData}
            headerColor="bg-[#CB0707]"
          />
        </div>
    </div>
  );
};

export default UserSettlement;
