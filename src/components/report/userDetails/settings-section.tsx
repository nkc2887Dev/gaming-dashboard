import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
  {
    id: 8,
    label: "Casino Control",
  },
];

const ElipsButton = ({ label }: { label: string }) => {
  return (
    <Button
      variant="secondary"
      className="rounded-full border-black bg-gradient-to-b from-[#004d66] via-[#008080] to-[#00b3b3] text-white transition-all duration-300 group hover:from-[#159ab3] hover:to-[#03364c]"
    >
      {label}
    </Button>
  );
};

export function SettingsSection() {
  return (
    <Card className="mb-4 relative">
      <div className="absolute -top-3 left-4 bg-white px-2 text-lg font-semibold">
        Settings:
      </div>
      <CardContent>
        <div className="py-7 grid grid-cols-4 gap-4 mb-4">
          {ButtonData.map((button) => {
            return <ElipsButton key={button.id} label={button.label} />;
          })}
        </div>
        <div className="flex gap-8">
          <div className="flex items-center space-x-2">
            <Checkbox id="userLock" />
            <Label htmlFor="userLock">User Lock</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="betLock" />
            <Label htmlFor="betLock">Bet Lock</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checkLimit" />
            <Label htmlFor="checkLimit">Check Limit</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
