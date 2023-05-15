export interface Voucher {
    Id: number;

    VouType: string;
    Name: string;
    Total: number;
    FullLucky: number;
    PartLucky: number;
    Balance: number;

    // VouDetails: VouDetails[];
}

export interface VouDetails {
    BetNumber: string;
    BetAmount: number;
    BetTotal: number;
    FullLucky: number;
    PartLucky: number;
    Balance: number;
    Rate: number;
    Commisssion: number;
}