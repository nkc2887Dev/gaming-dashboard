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
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MinMaxBetsTable } from "@/components/report/userDetails/min-max-bets";
import { mockData } from "@/lib/user-details";
import { CasinoMaxBetsTable } from "./casinoMaxBets";
import Loader from "../common/loader/loader";
import { ROLES } from "@/utils/constants/common";

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

const AddClient = () => {
  const [selectedUserType, setSelectedUserType] = useState(
    ROLES.SELECT_USER_TYPE,
  );
  const [isUserChecked, setIsUserChecked] = useState(false);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormData>({
    defaultValues: ClientFormDefaultData,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const handleUserCheckedChange = (checked: boolean) => {
    setIsUserChecked(checked);
  };

  const onSubmit: SubmitHandler<ClientFormData> = (data) => {
    console.log("Form Data:", data);
    // Handle form submission (e.g., API call)
  };

  return (
    <div className="p-4">
      <div className="p-4 sm:p-6 border rounded bg-white shadow-md">
        <h2 className="text-lg font-semibold pb-5">Add/Edit Client Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols lg:grid-cols-2 gap-5">
            <div className="py-3 grid sm:grid-cols-1 gap-5">
              <Card className="relative border border-black">
                <div className="bg-white absolute -top-3 left-4 px-2 text-sm font-bold">
                  Account Details:
                </div>
                <CardContent className="flex flex-wrap sm:flex-nowrap items-center gap-5 p-5">
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
                        {Object.values(ROLES).map((role) => (
                          <SelectItem
                            key={role}
                            value={role}
                            className="rounded-md text-sm hover:bg-[#3F83F8] py-1 hover:text-white"
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
                      className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md  focus:outline-none"
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
                  Commission (Cricket):
                </div>
                <CardContent className="flex pt-5">
                  <div className="flex items-center space-x-1 w-full flex-wrap">
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
                      <span className="text-gray">%</span> <span>({1}%)</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
              {![ROLES.SELECT_USER_TYPE, ROLES.USER].includes(
                selectedUserType,
              ) && (
                <Card className="relative border border-black">
                  <div className="bg-white absolute -top-3 left-4 px-2 text-sm font-bold">
                    Partnership Sharing:
                  </div>
                  <CardContent className="flex pt-5">
                    <div className="flex items-center space-x-1 w-full flex-wrap">
                      <span className="font-semibold text-sm whitespace-nowrap">
                        Downline Sharing:
                      </span>
                      <Input
                        type="text"
                        {...register("downlineSharing", {
                          required: "Downline Sharing is required",
                        })}
                        className="text-sm w-auto bg-white border border-gray-400 text-gray-900 rounded-md focus:outline-none"
                      />
                      <span className="font-bold text-sm whitespace-nowrap">
                        <span className="text-gray">%</span>{" "}
                        <span>(My Sharing {90}%)</span>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )}
              {[ROLES.USER].includes(selectedUserType) && (
                <>
                  <Card className="relative border border-black">
                    <div className="bg-white absolute -top-3 left-4 px-2 text-sm font-bold">
                      User Settings:
                    </div>
                    <CardContent className="flex items-center gap-5 p-5">
                      <div className="w-full">
                        <label className="text-black text-sm">Max Bet:</label>
                        <Input
                          type="text"
                          {...register("maxBet", {
                            required: "Max Bet is required",
                          })}
                          className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md  focus:outline-none"
                        />
                        {errors.maxBet && (
                          <p className="text-red-500 text-xs">
                            {errors.maxBet.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full">
                        <label className="text-black text-sm">
                          Max Profit:
                        </label>
                        <Input
                          type="text"
                          {...register("maxProfit", {
                            required: "Max Profit is required",
                          })}
                          className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md  focus:outline-none"
                        />
                        {errors.maxProfit && (
                          <p className="text-red-500 text-xs">
                            {errors.maxProfit.message}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="userLock" className="text-sm">
                      Check Limits
                    </Label>
                    <Checkbox
                      id="userLock"
                      onCheckedChange={handleUserCheckedChange}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="py-3 grid sm:grid-cols-1 gap-5">
              <Card
                className={`relative border border-black ${selectedUserType !== ROLES.SELECT_USER_TYPE ? "h-2/3" : "h-full"}`}
              >
                <div className="bg-white absolute -top-3 left-4 px-2 text-sm font-bold">
                  Personal Details:
                </div>
                <CardContent className="grid grid-cols-2 gap-5 p-5 h-full">
                  <div className="w-full">
                    <label className="text-black text-sm">User Name:</label>
                    <Input
                      type="text"
                      {...register("userName", {
                        required: "User Name is required",
                      })}
                      className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md focus:outline-none"
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
                      className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md  focus:outline-none"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="text-black text-sm">
                      Retype Password:
                    </label>
                    <Input
                      type="text"
                      {...register("reTypePassword", {
                        required: "ReType Password is required",
                      })}
                      className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md  focus:outline-none"
                    />
                    {errors.reTypePassword && (
                      <p className="text-red-500 text-xs">
                        {errors.reTypePassword.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="text-black text-sm">
                      Reference Name:
                    </label>
                    <Input
                      type="text"
                      {...register("refName", {
                        required: "Reference Name is required",
                      })}
                      placeholder="Reference Name"
                      className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md  focus:outline-none"
                    />
                    {errors.refName && (
                      <p className="text-red-500 text-xs">
                        {errors.refName.message}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {isUserChecked && (
            <div className="cc">
              <MinMaxBetsTable
                data={mockData.minMaxData}
                options={{
                  title: "text-sm",
                  titleBg: "bg-white",
                  border: "border-black",
                }}
              />
              <CasinoMaxBetsTable
                options={{
                  title: "text-sm",
                  titleBg: "bg-white",
                  border: "border-black",
                }}
              />
            </div>
          )}
          <div className="grid grid-cols lg:grid-cols-2 gap-5">
            <div className="py-3 grid sm:grid-cols-1 gap-5">
              <Card className="relative border border-black">
                <div className="bg-white absolute -top-3 left-4 px-2 text-sm font-bold">
                  Sport & Casino Balance
                </div>
                <CardContent className="flex flex-wrap sm:flex-nowrap items-center gap-5 p-5">
                  <div className="w-full">
                    <label className="text-black text-sm text-nowrap">
                      Credit Reference:
                    </label>
                    <Input
                      type="text"
                      {...register("creditReference", {
                        required: "Credit Reference is required",
                      })}
                      className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md  focus:outline-none"
                      placeholder="Credit Reference"
                    />
                    {errors.creditReference && (
                      <p className="text-red-500 text-xs">
                        {errors.creditReference.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="text-black text-sm text-nowrap">
                      Add Deposit:
                    </label>
                    <Input
                      type="number"
                      {...register("addDeposit", {
                        required: "Add Deposit is required",
                      })}
                      className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md  focus:outline-none"
                      placeholder="Amount"
                    />
                    {errors.addDeposit && (
                      <p className="text-red-500 text-xs">
                        {errors.addDeposit.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="text-black text-sm text-nowrap">
                      Deposit Remark:
                    </label>
                    <Input
                      type="text"
                      {...register("depositRemark", {
                        required: "Deposit Remark is required",
                      })}
                      className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md  focus:outline-none"
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
            <div>
              <label className="text-black text-sm">Master Password:</label>
              <div className="flex items-center gap-2">
                <div>
                  <Input
                    type="text"
                    {...register("masterPassword", {
                      required: "Master Password is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md  focus:outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  // onClick={() => setPage("addClient")}
                  className="w-auto text-nowrap rounded-sm text-sm font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#2E899C] to-[#159ab3] text-white shadow-md hover:from-[#159ab3] hover:to-[#03364c]"
                >
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
