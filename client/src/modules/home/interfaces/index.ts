export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  budgets: [];
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface IUserResponse {
  access: boolean;
  user?: IUser;
}
