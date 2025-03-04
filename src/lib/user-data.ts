export interface UserData {
  label: string;
  value: string | number;
  color?: string;
}

export interface SectionData {
  id: string;
  title: string;
  data: UserData[];
}

export interface DashboardData {
  userId: string;
  userType: string;
  sections: SectionData[];
}

export const dashboardData: DashboardData = {
  userId: "dmmo123",
  userType: "Admin",
  sections: [
    {
      id: "balance",
      title: "Balance Information",
      data: [
        { label: "Given Bal", value: 100.0, color: "#33F071" },
        { label: "Available", value: 50.0, color: "#33F071" },
      ],
    },
    {
      id: "lines",
      title: "Line Information",
      data: [
        { label: "Up Line", value: 0 },
        { label: "Down Line", value: 0 },
      ],
    },
    {
      id: "stats",
      title: "Statistics",
      data: [
        { label: "Current P&L", value: 0 },
        { label: "Exposure", value: 0 },
        { label: "My P&L", value: 0 },
      ],
    },
  ],
};
