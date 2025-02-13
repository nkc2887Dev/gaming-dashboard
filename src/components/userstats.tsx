import React from "react";

interface UserData {
  id: string;
  type: string;
  givenBalance: number;
  availableBalance: number;
  upLine: number;
  downLine: number;
  currentPL: number;
  myPL: number;
  exposure: number;
}

const userData: UserData = {
  id: "dmmo123",
  type: "Admin",
  givenBalance: 100.0,
  availableBalance: 50.0,
  upLine: 0,
  downLine: 0,
  currentPL: 0,
  myPL: 0,
  exposure: 0,
};

const tooltips = {
  id: "user name.",
  type: "user role.",
  givenBalance: "Aapko upar se diya gaya balance.",
  availableBalance: "Aapka upyog ke liye uplabdh balance.",
  upLine: "Aapke upline ka count.",
  downLine: "Aapke downline ka count.",
  currentPL: "Aapka vartaman labh ya haani.",
  exposure: "Aapka kul risk exposure.",
  myPL: "Aapka vyaktigat labh ya haani.",
};

const UserStats: React.FC = () => {
  return (
    <div className="text-white p-4 flex justify-between items-center rounded-lg shadow-md">
      <div className="flex flex-col">
      <p className="relative group">
      User ID: 
          <span className="cursor-pointer"> {userData.id}</span>
          <span className="absolute left-0 mt-1 hidden group-hover:block bg-black text-white text-xs p-2 rounded-md z-50">
            {tooltips.id}
          </span>
        </p>
      <p className="relative group">
      User Type: 
          <span className="cursor-pointer"> {userData.type}</span>
          <span className="absolute left-0 mt-1 hidden group-hover:block bg-black text-white text-xs p-2 rounded-md z-50">
            {tooltips.type}
          </span>
        </p>
        {/* <p>User ID: <span className="font-semibold">{userData.id}</span></p> */}
        {/* <p>User Type: <span className="font-semibold">{userData.type}</span></p> */}
      </div>
      <div className="flex flex-col">
        <p className="relative group">
          Given Bal: 
          <span className="text-green-400 cursor-pointer"> {userData.givenBalance.toFixed(2)}</span>
          <span className="absolute left-0 mt-1 hidden group-hover:block bg-black text-white text-xs p-2 rounded-md z-50">
            {tooltips.givenBalance}
          </span>
        </p>
        <p className="relative group">
          Available: 
          <span className="text-green-400 cursor-pointer"> {userData.availableBalance.toFixed(2)}</span>
          <span className="absolute left-0 mt-1 hidden group-hover:block bg-black text-white text-xs p-2 rounded-md z-50">
            {tooltips.availableBalance}
          </span>
        </p>
      </div>
      <div className="flex flex-col">
        <p className="relative group">
          Up Line: 
          <span className="cursor-pointer"> {userData.upLine}</span>
          <span className="absolute left-0 mt-1 hidden group-hover:block bg-black text-white text-xs p-2 rounded-md z-50">
            {tooltips.upLine}
          </span>
        </p>
        <p className="relative group">
          Down Line: 
          <span className="cursor-pointer"> {userData.downLine}</span>
          <span className="absolute left-0 mt-1 hidden group-hover:block bg-black text-white text-xs p-2 rounded-md z-50">
            {tooltips.downLine}
          </span>
        </p>
      </div>
      <div className="flex flex-col">
        <p className="relative group">
          Current P&L: 
          <span className="cursor-pointer"> {userData.currentPL}</span>
          <span className="absolute left-0 mt-1 hidden group-hover:block bg-black text-white text-xs p-2 rounded-md z-50">
            {tooltips.currentPL}
          </span>
        </p>
        <p className="relative group">
          Exposure: 
          <span className="cursor-pointer"> {userData.exposure}</span>
          <span className="absolute left-0 mt-1 hidden group-hover:block bg-black text-white text-xs p-2 rounded-md z-50">
            {tooltips.exposure}
          </span>
        </p>
      </div>
      <div className="flex flex-col">
        <p className="relative group">
          My P&L: 
          <span className="cursor-pointer"> {userData.myPL}</span>
          <span className="absolute left-0 mt-1 hidden group-hover:block bg-black text-white text-xs p-2 rounded-md z-50">
            {tooltips.myPL}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserStats;
