// Here is a possible code for the interface:

export interface BetNumber {
  Date: string;
  Period: string;
  Id: number;
  CustomerId: number;
  VoucherId: number;
  Number: string;
  Amount: number;
  Total: number;
  VoucherTtl: number;
  WinTotal: number;
  WinPartial: number;
  Rate: number;
  Commission: number;

  ServerID: string;
  DealerID: string;
  ClientID: string;

  SyncMode: number;
  SYncSeq: number;
  SYncFlag: number;
}