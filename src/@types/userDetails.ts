import { BettingLimits } from "@/@types/betting";

export interface UserDetails {
  userName: string;
  role: string;
  clientName: string;
  referenceName: string;
  email: string;
  mobile: string;
  parents: string;
}

export interface AccountDetails {
  creditRef: string;
  balance: string;
  availableBalance: string;
  pl: string;
  upLineBalance: string;
  downLineBalance: string;
  exposure: string;
  maxProfit: string;
  maxBet: string;
  betLock: string;
  active: string;
  createdOn: string;
}

export interface GamePlay {
  sport: string;
  bet: string;
  betAmount: string;
  pl: string;
  casino: string;
  totalPL: string;
  market: string;
}

export interface UserData {
  userDetails: UserDetails;
  accountDetails: AccountDetails;
  gamePlays: GamePlay[];
  minMaxData: BettingLimits;
}

export interface AccountDetailsSectionProps {
  accountDetails: AccountDetails;
}

export interface GamePlaySectionProps {
  gamePlays: GamePlay[];
}

export interface MinMaxBetsTableProps {
  data?: BettingLimits;
  options?:
    | {
        title?: string;
        titleBg?: string;
        border?: string;
      }
    | undefined;
}

export interface UserDetailsSectionProps {
  userDetails: UserDetails;
}

export interface DetailGroupProps {
  details: { key: keyof UserDetails; label: string }[];
  userDetails: UserDetails;
}
