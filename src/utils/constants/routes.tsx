export const NAVIGATION_PATHS = {
  DASHBOARD: "/dashboard",
  CLIENT: "/client",
  ADD_CLIENT: "/addclient",
  SPORT_ANALYSIS: "/sportanalysis",
  SETTLEMENT: "/settlement",
  USER_SETTLEMENT: "/settlement/user",
  MASTER_SETTLEMENT: "/settlement/master",
  REPORTS: "/report",
  USER_DETAIL_REPORTS: "/report/user-detail",
  ACCOUNT_STATEMENT_REPORTS: "/report/account-statement",
  SETTLEMENT_BALANCE_REPORTS: "/report/settlement-balance",
  TRANSACTION_REPORTS: "/report/transaction",
  CURRENT_BETS_REPORTS: "/report/current-bets",
  PROFIT_LOSS_REPORTS: "/report/profit-loss",
  EVENT_PROFIT_LOSS_REPORTS: "/report/event-profit-loss",
  BET_HISTORY_REPORTS: "/report/bet-history",
  LIVE_BETS_REPORTS: "/report/live-bets",
  SPORTS_REVENUE_REPORTS: "/report/sports-revenue",
  IP_LOOKUP_REPORTS: "/report/ip-lookup",
  CONTROL: "/control",
  GAME_CONTROL: "/control/game",
};

export const NAVBAR_MENU = [
  { name: "Dashboard", path: NAVIGATION_PATHS.DASHBOARD },
  { name: "Clients", path: NAVIGATION_PATHS.CLIENT },
  { name: "Settlement", path: NAVIGATION_PATHS.SETTLEMENT },
  { name: "Reports", path: NAVIGATION_PATHS.REPORTS },
  { name: "Control", path: NAVIGATION_PATHS.CONTROL },
  { name: "Sport Analysis", path: NAVIGATION_PATHS.SPORT_ANALYSIS },
];

export const DROPDOWN_MENUS = {
  settlement: [
    { name: "User", path: NAVIGATION_PATHS.USER_SETTLEMENT },
    { name: "Master", path: NAVIGATION_PATHS.MASTER_SETTLEMENT },
  ],
  reports: [
    { name: "User Detail", path: NAVIGATION_PATHS.USER_DETAIL_REPORTS },
    {
      name: "Account Statement",
      path: NAVIGATION_PATHS.ACCOUNT_STATEMENT_REPORTS,
    },
    {
      name: "Settlement/Balance Report",
      path: NAVIGATION_PATHS.SETTLEMENT_BALANCE_REPORTS,
    },
    { name: "Transaction Report", path: NAVIGATION_PATHS.TRANSACTION_REPORTS },
    { name: "Current Bets", path: NAVIGATION_PATHS.CURRENT_BETS_REPORTS },
    {
      name: "Profit & Loss Report",
      path: NAVIGATION_PATHS.PROFIT_LOSS_REPORTS,
    },
    {
      name: "Event Profit & Loss Report",
      path: NAVIGATION_PATHS.EVENT_PROFIT_LOSS_REPORTS,
    },
    { name: "Bet History", path: NAVIGATION_PATHS.BET_HISTORY_REPORTS },
    { name: "Live Bets", path: NAVIGATION_PATHS.LIVE_BETS_REPORTS },
    { name: "Sports Revenue", path: NAVIGATION_PATHS.SPORTS_REVENUE_REPORTS },
    { name: "IP Lookup", path: NAVIGATION_PATHS.IP_LOOKUP_REPORTS },
  ],
  control: [{ name: "Game", path: NAVIGATION_PATHS.GAME_CONTROL }],
};
