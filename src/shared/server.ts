
export interface Server {
  serverUrl: string;
  databaseId: number;
  name: string;
  status: "online" | "offline" | "maintenance";
  // users: User[];
}