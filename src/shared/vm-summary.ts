export interface Summary {
    Id: number;

    VouType: string;
    Name: string;
    Sale: Sale[];
    FullLucky: number;
    PartLucky: number;
    Balance: number;
}

export interface Sale {
    Id: number;

    Date: string;
    Total: number;
}


export const data_summaries: Summary[] = [
    {
      Id: 1,
      VouType: 'type1',
      Name: 'summary1',
      Sale: [
        { Id: 1, Date: '2022-01-01', Total: 100 },
        { Id: 2, Date: '2022-01-02', Total: 150 },
        { Id: 3, Date: '2022-01-03', Total: 200 },
      ],
      FullLucky: 0,
      PartLucky: 0,
      Balance: 50,
    },
    {
      Id: 2,
      VouType: 'type2',
      Name: 'summary2',
      Sale: [
        { Id: 4, Date: '2022-01-04', Total: 300 },
        { Id: 5, Date: '2022-01-05', Total: 250 },
        { Id: 6, Date: '2022-01-06', Total: 200 },
      ],
      FullLucky: 0,
      PartLucky: 0,
      Balance: 150,
    },
    {
      Id: 3,
      VouType: 'type3',
      Name: 'summary3',
      Sale: [
        { Id: 7, Date: '2022-01-07', Total: 400 },
        { Id: 8, Date: '2022-01-08', Total: 350 },
        { Id: 9, Date: '2022-01-09', Total: 300 },
      ],
      FullLucky: 0,
      PartLucky: 0,
      Balance: 200,
    },
  ];