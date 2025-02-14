import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import type { AccountDetails } from "@/utils/@types";

interface AccountDetailsSectionProps {
  accountDetails: AccountDetails;
}

export function AccountDetailsSection({
  accountDetails,
}: AccountDetailsSectionProps) {
  return (
    <Card className="mb-4 relative">
      <div className="absolute -top-3 left-4 bg-white px-2 text-lg font-semibold">
        Account Details:
      </div>
      <CardContent className="py-7 grid grid-cols-4 gap-4">
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">Credit Ref :</Label>
          <span>{accountDetails.creditRef}</span>
        </div>
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">Balance :</Label>
          <span>{accountDetails.balance}</span>
        </div>
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">Available Balance :</Label>
          <span>{accountDetails.availableBalance}</span>
        </div>
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">P/L :</Label>
          <span>{accountDetails.pl || "-"}</span>
        </div>
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">UpLine Balance :</Label>
          <span>{accountDetails.upLineBalance || "-"}</span>
        </div>
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">DownLine Balance :</Label>
          <span>{accountDetails.downLineBalance || "-"}</span>
        </div>
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">Exposure :</Label>
          <span>{accountDetails.exposure || "-"}</span>
        </div>
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">Max Profit :</Label>
          <span>{accountDetails.maxProfit || "-"}</span>
        </div>
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">Max Bet :</Label>
          <span>{accountDetails.maxBet || "-"}</span>
        </div>
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">Bet Lock :</Label>
          <span>{accountDetails.betLock}</span>
        </div>
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">Active :</Label>
          <span>{accountDetails.active}</span>
        </div>
        <div className="flex gap-2">
          <Label className="w-32 text-gray-600">Created On :</Label>
          <span>{accountDetails.createdOn}</span>
        </div>
      </CardContent>
    </Card>
  );
}
