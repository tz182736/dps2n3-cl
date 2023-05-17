
export interface Server {
  serverUrl: string;
  databaseId: number;
  name: string;
  status: string;
  // "online" | "offline" | "maintenance";

  // 2nd check point ?
  // AdminId: number;
  // AssignUserId: number[];
}