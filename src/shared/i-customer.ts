 export interface Customer {
  Id: number;
  Name: string;
  Phone: string; 
  // optiize here cuz only 1 to 1 fixed type and rate
  Rate2D: number;
  Commission2D: number;
  Rate3D: number;
  Commission3D: number;
}

// dummy_data
export const dummy_data: Customer[] = [
  {
    Id: 123,
    Name: "John Doe",
    Phone: "+95987654321",
    Rate2D: 0.8,
    Commission2D: 0.1,
    Rate3D: 0.9,
    Commission3D: 0.15
  },
  {
    Id: 456,
    Name: "Jane Smith",
    Phone: "+95912345678",
    Rate2D: 0.75,
    Commission2D: 0.12,
    Rate3D: 0.85,
    Commission3D: 0.18
  },
  {
    Id: 789,
    Name: "Bob Lee",
    Phone: "+95998765432",
    Rate2D: 0.8,
    Commission2D: 0.1,
    Rate3D: 0.9,
    Commission3D: 0.15
  },
  {
    Id: 1011,
    Name: "Alice Wong",
    Phone: "+95912365478",
    Rate2D: 0.7,
    Commission2D: 0.15,
    Rate3D: 0.8,
    Commission3D: 0.2
  },
  {
    Id: 1213,
    Name: "Tom Chen",
    Phone: "+95987612345",
    Rate2D: 0.8,
    Commission2D: 0.1,
    Rate3D: 0.9,
    Commission3D: 0.15
  }
];
