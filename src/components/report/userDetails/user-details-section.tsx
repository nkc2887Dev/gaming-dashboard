import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import type { UserDetails } from "@/utils/@types";

interface UserDetailsSectionProps {
  userDetails: UserDetails;
}

export function UserDetailsSection({ userDetails }: UserDetailsSectionProps) {
  return (
    <Card className="mb-4 relative">
      <div className="absolute -top-3 left-4 bg-white px-2 text-lg font-semibold">
        User Details:
      </div>
      <CardContent className="py-10 grid grid-cols-3 gap-4">
        <div className="space-y-3">
          <div className="flex gap-2">
            <Label className="w-32 text-gray-600">User Name :</Label>
            <span className="font-semibold">{userDetails.userName}</span>
          </div>
          <div className="flex gap-2">
            <Label className="w-32 text-gray-600">Reference Name :</Label>
            <span className="font-semibold">{userDetails.referenceName}</span>
          </div>
          <div className="flex gap-2">
            <Label className="w-32 text-gray-600">Parents :</Label>
            <span className="font-semibold">{userDetails.parents}</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Label className="w-32 text-gray-600">Role :</Label>
            <span className="font-semibold">{userDetails.role}</span>
          </div>
          <div className="flex gap-2">
            <Label className="w-32 text-gray-600">Email :</Label>
            <span className="font-semibold">{userDetails.email || "-"}</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Label className="w-32 text-gray-600">Client Name :</Label>
            <span className="font-semibold">{userDetails.clientName}</span>
          </div>
          <div className="flex gap-2">
            <Label className="w-32 text-gray-600">Mobile :</Label>
            <span className="font-semibold">{userDetails.mobile}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
