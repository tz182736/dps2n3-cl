// Here is a possible code for the interface:

export interface BetNumber {
  Date: string;
  Period: string;
  Id?: number;
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

  DatabaseID: number; // allow same id in different server. user responsible for duplicate data entry error.
  MasterID: number;
  AgentID: number;  // Carry ? Client as client outside system scope ?

  SyncMode: number; // 1:added, 2:update, 3:delete,
  SyncSeq: number; // continues number till reset on new date
  SyncFlag: number; // status beacon for system heart beat. offline sync. etc.. 
}


// just view model
export interface BetTypeConfig {
  CurrentBetType: '2D' | '3D';
  Rate2D: number;
  Commission2D: number;
  Rate3D: number;
  Commission3D: number;
}

export interface BetSetting{
  CurrentBetType: string;
  RateCommission: BetRateCommission;
}

export interface BetRateCommission {
  BetType: string;
  Rate: number;
  Commission: number;
}