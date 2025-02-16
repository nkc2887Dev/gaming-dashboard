import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import type { UserDetails } from "@/@types/userDetails";

interface UserDetailsSectionProps {
  userDetails: UserDetails;
}

interface DetailGroupProps {
  details: { key: keyof UserDetails; label: string }[];
  userDetails: UserDetails;
}

const DetailGroup = ({ details, userDetails }: DetailGroupProps) => (
  <div className="space-y-3">
    {details.map(({ key, label }) => (
      <div key={key} className="flex gap-2">
        <Label className="text-[#73819A]">{label}</Label>
        <span className="font-semibold">{userDetails[key] || "-"}</span>
      </div>
    ))}
  </div>
);

export function UserDetailsSection({ userDetails }: UserDetailsSectionProps) {
  const userDetailGroups: { key: keyof UserDetails; label: string }[][] = [
    [
      { key: "userName", label: "User Name :" },
      { key: "referenceName", label: "Reference Name :" },
      { key: "parents", label: "Parents :" },
    ],
    [
      { key: "role", label: "Role :" },
      { key: "email", label: "Email :" },
    ],
    [
      { key: "clientName", label: "Client Name :" },
      { key: "mobile", label: "Mobile :" },
    ],
  ];

  return (
    <Card className="mb-4 relative bg-[#F7F7F8]">
      <div className="absolute -top-3 left-4 px-2 text-lg font-bold">
        User Details:
      </div>
      <CardContent className="pt-10 grid grid-cols-3 gap-4">
        {userDetailGroups.map((group, index) => (
          <DetailGroup key={index} details={group} userDetails={userDetails} />
        ))}
      </CardContent>
    </Card>
  );
}
