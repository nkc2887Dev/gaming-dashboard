export interface BettingLimit {
  odds?: string;
  bookmaker?: string;
  fancy?: string;
  lottery?: string;
  overUnder?: string;
  setWinner?: string;
}

export interface SportLimits {
  maxBet: BettingLimit;
  maxProfit: BettingLimit;
}

export interface BettingLimits {
  cricket: SportLimits;
  soccer: SportLimits;
  tennis: SportLimits;
  horse: {
    maxBet: { odds: string };
    maxProfit: { odds: string };
  };
  greyHound: {
    maxBet: { odds: string };
    maxProfit: { odds: string };
  };
  sportbook: {
    maxBet: string;
    maxProfit: string;
  };
  election: {
    maxBet: {
      fancy: string;
      lottery: string;
    };
    maxProfit: {
      fancy: string;
      lottery: string;
    };
  };
}
