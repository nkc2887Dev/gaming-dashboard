export type ClientFormData = {
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

export interface CasinoMaxBetsTableProps {
  options?:
    | {
        title?: string;
        titleBg?: string;
        border?: string;
      }
    | undefined;
}
