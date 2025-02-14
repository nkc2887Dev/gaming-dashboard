import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import type { AccountDetails } from "@/utils/@types";

interface AccountDetailsSectionProps {
  accountDetails: AccountDetails;
}

const accountFields = [
  { key: "creditRef", label: "Credit Ref :" },
  { key: "balance", label: "Balance :" },
  { key: "availableBalance", label: "Available Balance :" },
  { key: "pl", label: "P/L :" },
  { key: "upLineBalance", label: "UpLine Balance :" },
  { key: "downLineBalance", label: "DownLine Balance :" },
  { key: "exposure", label: "Exposure :" },
  { key: "maxProfit", label: "Max Profit :" },
  { key: "maxBet", label: "Max Bet :" },
  { key: "betLock", label: "Bet Lock :" },
  { key: "active", label: "Active :" },
  { key: "createdOn", label: "Created On :" },
];
export function AccountDetailsSection({
  accountDetails,
}: AccountDetailsSectionProps) {
  return (
    <Card className="mb-4 relative bg-[#F7F7F8]">
      <div className="absolute -top-3 left-4 bg-white px-2 text-lg font-bold">
        Account Details:
      </div>
      <CardContent className="pt-7 grid grid-cols-4 gap-4">
        {accountFields.map(({ key, label }) => (
          <div key={key} className="flex gap-2">
            <Label className="text-[#73819A]">{label}</Label>
            <span className="font-semibold">{accountDetails[key as keyof AccountDetails] || "-"}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
