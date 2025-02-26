import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

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
};

const AddClient = ({
  setPage,
}: {
  setPage: (page: "clientList" | "addClient") => void;
}) => {
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
                  <Input
                    type="text"
                    {...register("userType", {
                      required: "Account Type is required",
                    })}
                    className="text-sm h-9 px-4 py-2 w-full bg-white border border-gray-400 text-gray rounded-md pr-10 focus:outline-none"
                    placeholder="Select user type"
                  />
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
              <CardContent className="flex p-5">
                <div className="flex items-center gap-2 w-full justify-center flex-wrap">
                  <span className="font-bold text-sm whitespace-nowrap">
                    Commission: M.O
                  </span>
                  <Input
                    type="text"
                    {...register("commission", {
                      required: "Commission is required",
                    })}
                    className="text-sm h-9 w-2/3 bg-white border border-gray-400 text-gray-900 rounded-md focus:outline-none"
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
          </div>
          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
