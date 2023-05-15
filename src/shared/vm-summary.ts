export interface Summary {
    Id: number;

    VouType: 'sale' | 'carry';
    Name: string;
    Sale: Sale[];
    FullLucky: number;
    PartLucky: number;
    Balance: number;
}

export interface Sale {
    Date: string;
    Total: number;
}


export const dummy_data: Summary[] = [
    {
        Id: 1,
        VouType: 'sale',
        Name: 'summary1',
        Sale: [
            { Date: 'May/01', Total: 100 },
            { Date: 'May/02', Total: 150 },
            { Date: 'May/03', Total: 200 },
        ],
        FullLucky: 0,
        PartLucky: 0,
        Balance: 50,
    },
    {
        Id: 2,
        VouType: 'carry',
        Name: 'summary2',
        Sale: [
            { Date: 'May/04', Total: 300 },
            { Date: 'May/05', Total: 250 },
            { Date: 'May/06', Total: 200 },
        ],
        FullLucky: 0,
        PartLucky: 0,
        Balance: 150,
    },
    {
        Id: 3,
        VouType: 'sale',
        Name: 'summary3',
        Sale: [
            { Date: 'May/07', Total: 400 },
            { Date: 'May/08', Total: 350 },
            { Date: 'May/09', Total: 300 },
        ],
        FullLucky: 0,
        PartLucky: 0,
        Balance: 200,
    },
];
