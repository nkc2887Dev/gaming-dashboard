// Sample data structure for the dashboard
export const dashboardData = {
  metrics: [
    { title: "P&L", value: 0 },
    { title: "COMMISSION", value: 0 },
    { title: "DEPOSIT", value: 0 },
    { title: "WITHDRAWAL", value: 0 },
    { title: "TOTAL BETS", value: 0 },
    { title: "SPORTSBOOK P&L", value: 0 },
  ],

  winningPlayers: [
    { player: "Player 1", amount: 1000 },
    { player: "Player 2", amount: 800 },
    { player: "Player 3", amount: 600 },
    { player: "Player 4", amount: 400 },
    { player: "Player 5", amount: 200 },
  ],

  losingPlayers: [
    { player: "Player 6", amount: -1000 },
    { player: "Player 7", amount: -800 },
    { player: "Player 8", amount: -600 },
    { player: "Player 9", amount: -400 },
    { player: "Player 10", amount: -200 },
  ],

  winningMarkets: [
    { sport: "Cricket", market: "Match Winner", amount: 5000 },
    { sport: "Football", market: "Over/Under", amount: 4000 },
    { sport: "Tennis", market: "Set Winner", amount: 3000 },
    { sport: "Basketball", market: "Point Spread", amount: 2000 },
    { sport: "Baseball", market: "Money Line", amount: 1000 },
  ],

  losingMarkets: [
    { sport: "Cricket", market: "Top Batsman", amount: -5000 },
    { sport: "Football", market: "First Goal", amount: -4000 },
    { sport: "Tennis", market: "Game Winner", amount: -3000 },
    { sport: "Basketball", market: "Total Points", amount: -2000 },
    { sport: "Baseball", market: "Run Line", amount: -1000 },
  ],

  userCount: [
    { role: "Admin", count: 5 },
    { role: "Super Master", count: 10 },
    { role: "Master", count: 50 },
    { role: "User", count: 1000 },
  ],

  sportsGameplay: {
    totalBets: 1500,
    totalBetAmount: 100000,
    totalPL: 25000,
  },

  othersGameplay: {
    totalBets: 500,
    totalBetAmount: 50000,
    totalPL: 12000,
  },

  // casinoDetails: [
  //   { name: "Indian Poker/ Live Casino P&L", value: 15000 },
  //   { name: "Indian Poker II P&L", value: 12000 },
  //   { name: "Evolution P&L", value: 8000 },
  //   { name: "Vivo P&L", value: 6000 },
  //   { name: "Betgames P&L", value: 4000 },
  //   { name: "Casino III P&L", value: 3000 },
  //   { name: "Spribe P&L", value: 2000 },
  //   { name: "Total P&L", value: 50000 },
  // ],
};
