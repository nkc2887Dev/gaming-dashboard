import MasterPasswordModal from "@/components/common/model/MasterPassword";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ElipsButton } from "@/components/ui/gradient-button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ButtonData = [
  {
    id: 1,
    label: "User Update",
  },
  {
    id: 2,
    label: "Deposit / Credit",
  },
  {
    id: 3,
    label: "Settlement",
  },
  {
    id: 4,
    label: "Last Login",
  },
  {
    id: 5,
    label: "Change Password",
  },
  {
    id: 6,
    label: "Withdrawal",
  },
  {
    id: 7,
    label: "Game Control",
  },
  // {
  //   id: 8,
  //   label: "Casino Control",
  // },
];

export function SettingsSection({
  setCheckLimitOpen,
}: {
  setCheckLimitOpen?: (open: boolean) => void;
}) {
  const [openUserModal, setOpenUserModal] = useState(false);
  const [isUserChecked, setIsUserChecked] = useState(false);
  const [openBetModal, setOpenBetModal] = useState(false);
  const [isBetChecked, setIsBetChecked] = useState(false);

  const handleUserCheckedChange = (checked: boolean) => {
    setIsUserChecked(checked);
    setOpenUserModal(true);
  };

  const handleBetCheckedChange = (checked: boolean) => {
    setIsBetChecked(checked);
    setOpenBetModal(true);
  };

  return (
    <>
      <Card className="mb-4 relative bg-[#F7F7F8]">
        <div className="absolute -top-3 left-4 px-2 text-lg font-bold">
          Settings:
        </div>
        <CardContent>
          <div className="pt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-2 mb-4 justify-start">
            {ButtonData.map((button) => {
              return <ElipsButton key={button.id} label={button.label} />;
            })}
          </div>
          <div className="flex gap-8 ml-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="userLock"
                onCheckedChange={handleUserCheckedChange}
              />
              <Label htmlFor="userLock" className="text-sm">
                User Lock
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="betLock" onCheckedChange={handleBetCheckedChange} />
              <Label htmlFor="betLock" className="text-sm">
                Bet Lock
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkLimit"
                onCheckedChange={(checked) => setCheckLimitOpen?.(!!checked)}
              />
              <Label htmlFor="checkLimit" className="text-sm">
                Check Limit
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>
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
}
