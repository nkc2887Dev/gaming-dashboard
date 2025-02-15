import type { UserData } from "@/@types/userDetails"

export const mockData: UserData = {
  userDetails: {
    userName: "testsuperadmin123",
    role: "SuperMaster",
    clientName: "Testsuperadmin123",
    referenceName: "dmmo123",
    email: "",
    mobile: "",
    parents: "dmmo123",
  },
  accountDetails: {
    creditRef: "50",
    balance: "50",
    availableBalance: "50.00",
    pl: "",
    upLineBalance: "",
    downLineBalance: "",
    exposure: "",
    maxProfit: "",
    maxBet: "",
    betLock: "No",
    active: "Yes",
    createdOn: "25 Jan 2025",
  },
  gamePlays: [],
  minMaxData: {
    cricket: {
      maxBet: {
        odds: "1000",
        bookmaker: "500",
        fancy: "200",
        lottery: "100",
      },
      maxProfit: {
        odds: "10000",
        bookmaker: "5000",
        fancy: "2000",
        lottery: "1000",
      },
    },
    soccer: {
      maxBet: {
        odds: "800",
        bookmaker: "400",
        overUnder: "300",
        lottery: "100",
      },
      maxProfit: {
        odds: "8000",
        bookmaker: "4000",
        overUnder: "3000",
        lottery: "1000",
      },
    },
    tennis: {
      maxBet: {
        odds: "600",
        setWinner: "300",
        bookmaker: "400",
        lottery: "100",
      },
      maxProfit: {
        odds: "6000",
        setWinner: "3000",
        bookmaker: "4000",
        lottery: "1000",
      },
    },
    horse: {
      maxBet: { odds: "500" },
      maxProfit: { odds: "5000" },
    },
    greyHound: {
      maxBet: { odds: "400" },
      maxProfit: { odds: "4000" },
    },
    sportbook: {
      maxBet: "1000",
      maxProfit: "10000",
    },
    election: {
      maxBet: {
        fancy: "300",
        lottery: "100",
      },
      maxProfit: {
        fancy: "3000",
        lottery: "1000",
      },
    },
  }
}

