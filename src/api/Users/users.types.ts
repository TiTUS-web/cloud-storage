export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  files: File[];
  diskSpace: bigint;
  usedSpace: bigint;
  createdAt: string;
  updatedAt: string;
}
