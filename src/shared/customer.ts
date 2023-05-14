// should have seperate link tbl.

export interface Customer {
  Id: number;
  Name: string;
  Phone: string;
  BetTotal: number;
  WinTotal: number;
  Balance: number;

  // optiize here cuz only 1 to 1 fixed type and rate
  Rate2D: number;
  Commission2D: number;
  Rate3D: number;
  Commission3D: number;
}


export interface CustomerProps {
  customer: Customer;
  onUpdate: (customer: Customer) => void;
  onDelete: (id: number) => void;
}

export interface CustomerListProps {
  customers: Customer[];
  onUpdate: (customer: Customer) => void;
  onDelete: (id: number) => void;
}