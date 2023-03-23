export interface IUser {
  id: number;
  email: string;
  password: string;
  files: File[];
  diskSpace: bigint;
  usedSpace: bigint;
  createdAt: string;
  updatedAt: string;
}
