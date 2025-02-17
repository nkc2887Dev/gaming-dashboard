export interface SettlementData {
  account: string;
  clientPL: string | number;
  shortBalance?: string | number;
  settleAmount: string | number;
  remarks: string;
}

export interface TableHeader {
  key: keyof SettlementData;
  label: string;
}

export interface SettlementTableProps {
  title: string;
  subTitle: string;
  headerColor: string;
  headers: TableHeader[];
  data: SettlementData[];
}
