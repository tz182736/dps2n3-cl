export interface Client {
    Id: number;
  
    LoginName: string;
    Password: string;
    Notes: string;
  
    ServerUrl: string;
    DatabaseId: string;
    Role: string; // master, agent
  }