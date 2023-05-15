export interface Voucher {
    Id: number;

    VouType: 'sale' | 'carry';
    Name: string;
    Total: number;
    FullLucky: number;
    PartLucky: number;
    Balance: number;

    VouDetails: VouDetails[];
}

export interface VouDetails {
    BetNumber: string;
    BetAmount: number;
    BetTotal: number;
    FullLucky: number;
    PartLucky: number;
    Balance: number;
    Rate: number;
    Commission: number;
}

export const dummy_data: Voucher[] = [
  {
    Id: 1,
    VouType: 'sale',
    Name: 'voucher1',
    Total: 1000,
    FullLucky: 100,
    PartLucky: 50,
    Balance: 850,
    VouDetails: [
      {
        BetNumber: '1234',
        BetAmount: 100,
        BetTotal: 200,
        FullLucky: 50,
        PartLucky: 25,
        Balance: 125,
        Rate: 2,
        Commission: 10,
      },
      {
        BetNumber: '5678',
        BetAmount: 200,
        BetTotal: 400,
        FullLucky: 100,
        PartLucky: 50,
        Balance: 250,
        Rate: 2,
        Commission: 20,
      },
      {
        BetNumber: '9012',
        BetAmount: 300,
        BetTotal: 600,
        FullLucky: 150,
        PartLucky: 75,
        Balance: 375,
        Rate: 2,
        Commission: 30,
      },
    ],
  },
  {
    Id: 2,
    VouType: 'carry',
    Name: 'voucher2',
    Total: 2000,
    FullLucky: 200,
    PartLucky: 100,
    Balance: 1700,
    VouDetails: [
      {
        BetNumber: '3456',
        BetAmount: 400,
        BetTotal: 800,
        FullLucky: 200,
        PartLucky: 100,
        Balance: 500,
        Rate: 2,
        Commission: 40,
      },
      {
        BetNumber: '7890',
        BetAmount: 500,
        BetTotal: 1000,
        FullLucky: 250,
        PartLucky: 125,
        Balance: 625,
        Rate: 2,
        Commission: 50,
      },
      {
        BetNumber: '1234',
        BetAmount: 600,
        BetTotal: 1200,
        FullLucky: 300,
        PartLucky: 150,
        Balance: 750,
        Rate: 2,
        Commission: 60,
      },
    ],
  },
];

