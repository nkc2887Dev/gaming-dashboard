import { mockData } from "@/lib/user-details";
import { useState } from "react";
import Input from "@/components/ui/input";
import { UserDetailsSection } from "@/components/report/userDetails/user-details-section";
import { SettingsSection } from "@/components/report/userDetails/settings-section";
import { AccountDetailsSection } from "@/components/report/userDetails/account-details-section";
import { GamePlaySection } from "@/components/report/userDetails/game-play-section";
import { MinMaxBetsTable } from "@/components/report/userDetails/min-max-bets";

const UserDataPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [checkLimitOpen, setCheckLimitOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShowDetails(true);
    }
  };

  return (
    <div className="m-2 p-6 border rounded">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">User Details</h2>
        <div className="flex items-start">
          <Input
            type="text"
            placeholder="Search by client"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="max-w-xs border"
          />
        </div>
      </div>
      {showDetails && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <UserDetailsSection userDetails={mockData.userDetails} />
            <SettingsSection setCheckLimitOpen={setCheckLimitOpen} />
          </div>
          {checkLimitOpen && <MinMaxBetsTable data={mockData.minMaxData} />}
          <AccountDetailsSection accountDetails={mockData.accountDetails} />
          <GamePlaySection gamePlays={mockData.gamePlays} />
        </div>
      )}
    </div>
  );
};

export default UserDataPage;
