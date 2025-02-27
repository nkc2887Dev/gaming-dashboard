import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type ClientFormData = {
  userType: string;
  client: string;
  userName: string;
  password: string;
  reTypePassword: string;
  refName: string;
  creditReference: string;
  addDeposit: string;
  depositRemark: string;
  commission: string;
  downlineSharing: string;
  maxBet: string;
  maxProfit: string;
  masterPassword: string;
};

const ROLES = [
  "Select User Type",
  "Admin",
  "Super Master",
  "Sub Super Master",
  "Master",
  "User",
];

const ClientFormDefaultData = {
  userType: undefined,
  client: undefined,
  userName: undefined,
  password: undefined,
  reTypePassword: undefined,
  refName: undefined,
  creditReference: undefined,
  addDeposit: undefined,
  depositRemark: undefined,
  commission: undefined,
  downlineSharing: undefined,
  maxBet: undefined,
  maxProfit: undefined,
  masterPassword: undefined,
};

const AddClient = ({
  setPage,
}: {
  setPage: (page: "clientList" | "addClient") => void;
}) => {
  const [selectedUserType, setSelectedUserType] = useState(ROLES[0]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormData>({
    defaultValues: ClientFormDefaultData,
  });

  const onSubmit: SubmitHandler<ClientFormData> = (data) => {
    console.log("Form Data:", data);
    // Handle form submission (e.g., API call)
  };

  return (
    <div className="min-h-screen p-4">
      <div className="sm:p-6 border rounded bg-white shadow-md">
        <h2 className="text-lg font-semibold pb-5">Add/Edit Client Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-3 grid grid-cols-2 gap-5">
            <Card className="relative border border-black">
              <div className="bg-white absolute -top-3 left-4 px-2 text-sm font-bold">
                Account Details:
              </div>
              <CardContent className="flex items-center gap-3 p-5">
                <div className="w-full">
                  <label className="text-black text-sm">Account Type:</label>
                  <Select
                    value={selectedUserType}
                    onChange={setSelectedUserType}
                    className="w-full"
                  >
                    <SelectTrigger className="flex items-center justify-between text-sm h-9 px-4 py-2 bg-white border border-gray-400 text-gray rounded-md focus:outline-none">
                      <SelectValue placeholder={selectedUserType} />
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLES.map((role) => (
                        <SelectItem
                          key={role}
                          value={role}
                          className="rounded-md hover:bg-[#3F83F8] py-1 hover:text-white"
                        >
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.userType && (
                    <p className="text-red-500 text-xs">
                      {errors.userType.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label className="text-black text-sm">Client Name:</label>
                  <Input
                    type="text"
                    {...register("client", {
                      required: "Client Name is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                    placeholder="Client Name"
                  />
                  {errors.client && (
                    <p className="text-red-500 text-xs">
                      {errors.client.message}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card className="relative border border-black">
              <div className="bg-white absolute -top-3 left-4 px-2 text-sm font-bold">
                Personal Details:
              </div>
              <CardContent className="grid grid-cols-2 gap-3 p-5">
                <div className="w-full">
                  <label className="text-black text-sm">User Name:</label>
                  <Input
                    type="text"
                    {...register("userName", {
                      required: "User Name is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                  />
                  {errors.userName && (
                    <p className="text-red-500 text-xs">
                      {errors.userName.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label className="text-black text-sm">Password:</label>
                  <Input
                    type="text"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label className="text-black text-sm">Retype Password:</label>
                  <Input
                    type="text"
                    {...register("reTypePassword", {
                      required: "ReType Password is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                  />
                  {errors.reTypePassword && (
                    <p className="text-red-500 text-xs">
                      {errors.reTypePassword.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label className="text-black text-sm">Reference Name:</label>
                  <Input
                    type="text"
                    {...register("refName", {
                      required: "Reference Name is required",
                    })}
                    placeholder="Reference Name"
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                  />
                  {errors.refName && (
                    <p className="text-red-500 text-xs">
                      {errors.refName.message}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card className="relative border border-black">
              <div className="bg-white absolute -top-3 left-4 px-2 text-sm font-bold">
                Commission (Cricket):
              </div>
              <CardContent className="flex pt-5">
                <div className="flex items-center space-x-1 w-full justify-center flex-wrap">
                  <span className="font-bold text-sm whitespace-nowrap">
                    Commission: M.O
                  </span>
                  <Input
                    type="text"
                    {...register("commission", {
                      required: "Commission is required",
                    })}
                    className="text-sm w-auto bg-white border border-gray-400 text-gray-900 rounded-md focus:outline-none"
                  />
                  <span className="font-bold text-sm whitespace-nowrap">
                    % (1%)
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="relative border border-black">
              <div className="bg-white absolute -top-3 left-4 px-2 text-sm font-bold">
                Sport & Casino Balance
              </div>
              <CardContent className="flex items-center gap-3 p-5">
                <div className="w-full">
                  <label className="text-black text-sm">
                    Credit Reference:
                  </label>
                  <Input
                    type="text"
                    {...register("creditReference", {
                      required: "Credit Reference is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                    placeholder="Credit Reference"
                  />
                  {errors.creditReference && (
                    <p className="text-red-500 text-xs">
                      {errors.creditReference.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label className="text-black text-sm">Add Deposit:</label>
                  <Input
                    type="number"
                    {...register("addDeposit", {
                      required: "Add Deposit is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                    placeholder="Amount"
                  />
                  {errors.addDeposit && (
                    <p className="text-red-500 text-xs">
                      {errors.addDeposit.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label className="text-black text-sm">Deposit Remark:</label>
                  <Input
                    type="text"
                    {...register("depositRemark", {
                      required: "Deposit Remark is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                    placeholder="Remark"
                  />
                  {errors.depositRemark && (
                    <p className="text-red-500 text-xs">
                      {errors.depositRemark.message}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card className="relative border border-black">
              <div className="bg-white absolute -top-3 left-4 px-2 text-sm font-bold">
                Sport & Casino Balance
              </div>
              <CardContent className="flex items-center gap-3 p-5">
                <div className="w-full">
                  <label className="text-black text-sm">
                    Credit Reference:
                  </label>
                  <Input
                    type="text"
                    {...register("creditReference", {
                      required: "Credit Reference is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                    placeholder="Credit Reference"
                  />
                  {errors.creditReference && (
                    <p className="text-red-500 text-xs">
                      {errors.creditReference.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label className="text-black text-sm">Add Deposit:</label>
                  <Input
                    type="number"
                    {...register("addDeposit", {
                      required: "Add Deposit is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                    placeholder="Amount"
                  />
                  {errors.addDeposit && (
                    <p className="text-red-500 text-xs">
                      {errors.addDeposit.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label className="text-black text-sm">Deposit Remark:</label>
                  <Input
                    type="text"
                    {...register("depositRemark", {
                      required: "Deposit Remark is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                    placeholder="Remark"
                  />
                  {errors.depositRemark && (
                    <p className="text-red-500 text-xs">
                      {errors.depositRemark.message}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Submit Button */}
          <div className="mt-4">
            <label className="text-black text-sm">Master Password:</label>
            <div className="flex items-center gap-2">
              <div>
                <Input
                  type="text"
                  {...register("masterPassword", {
                    required: "Master Password is required",
                  })}
                  className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                onClick={() => setPage("addClient")}
                className="w-auto text-nowrap rounded-sm text-sm font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#2E899C] to-[#159ab3] text-white shadow-md hover:from-[#159ab3] hover:to-[#03364c]"
              >
                Create Account
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
