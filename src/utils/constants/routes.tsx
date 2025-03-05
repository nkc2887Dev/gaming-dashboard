export const NAVIGATION_PATHS = {
  BASE: "/",
  DASHBOARD: "/dashboard",
  CLIENT: "/client",
  ADD_CLIENT: "/addclient",
  SPORT_ANALYSIS: "/sport-analysis",
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
  CHANGE_PASSWORD: "/profile/change-password",
  LOGOUT: "/profile/logout",
};

export const NAVBAR_DROPDOWN = {
  SETTLEMENT: "settlement",
  REPORT: "report",
  CONTROL: "control",
  PROFILE: "profile",
};

export const NAVBAR_MENU = [
  { name: "Dashboard", symbol: "🏠", path: NAVIGATION_PATHS.DASHBOARD },
  { name: "Clients", symbol: "👥", path: NAVIGATION_PATHS.CLIENT },
  // { name: "Settlement", symbol: "💰", path: NAVIGATION_PATHS.SETTLEMENT },
  // { name: "Reports", symbol: "📋", path: NAVIGATION_PATHS.REPORTS },
  // { name: "Control", symbol: "🎮", path: NAVIGATION_PATHS.CONTROL },
  {
    name: "Sport Analysis",
    symbol: "📊",
    path: NAVIGATION_PATHS.SPORT_ANALYSIS,
  },
];

export const DROPDOWN_MENUS = {
  settlement: [
    { name: "User", symbol: "👤", path: NAVIGATION_PATHS.USER_SETTLEMENT },
    { name: "Master", symbol: "👑", path: NAVIGATION_PATHS.MASTER_SETTLEMENT },
  ],
  reports: [
    {
      name: "User Detail",
      symbol: "📋",
      path: NAVIGATION_PATHS.USER_DETAIL_REPORTS,
    },
    {
      name: "Account Statement",
      symbol: "💰",
      path: NAVIGATION_PATHS.ACCOUNT_STATEMENT_REPORTS,
    },
    {
      name: "Settlement/Balance Report",
      symbol: "📜",
      path: NAVIGATION_PATHS.SETTLEMENT_BALANCE_REPORTS,
    },
    {
      name: "Transaction Report",
      symbol: "🔄",
      path: NAVIGATION_PATHS.TRANSACTION_REPORTS,
    },
    {
      name: "Current Bets",
      symbol: "🎯",
      path: NAVIGATION_PATHS.CURRENT_BETS_REPORTS,
    },
    {
      name: "Profit & Loss Report",
      symbol: "📉",
      path: NAVIGATION_PATHS.PROFIT_LOSS_REPORTS,
    },
    {
      name: "Event Profit & Loss",
      symbol: "📊",
      path: NAVIGATION_PATHS.EVENT_PROFIT_LOSS_REPORTS,
    },
    {
      name: "Bet History",
      symbol: "📖",
      path: NAVIGATION_PATHS.BET_HISTORY_REPORTS,
    },
    {
      name: "Live Bets",
      symbol: "🔥",
      path: NAVIGATION_PATHS.LIVE_BETS_REPORTS,
    },
    {
      name: "Sports Revenue",
      symbol: "💵",
      path: NAVIGATION_PATHS.SPORTS_REVENUE_REPORTS,
    },
    {
      name: "IP Lookup",
      symbol: "🌍",
      path: NAVIGATION_PATHS.IP_LOOKUP_REPORTS,
    },
  ],
  control: [
    { name: "Game", symbol: "🎮", path: NAVIGATION_PATHS.GAME_CONTROL },
  ],
};
