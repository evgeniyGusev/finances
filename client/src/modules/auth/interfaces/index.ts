// signIn
export interface ISignInPayload {
  email: string;
  password: string;
}

export interface ISignInResponseSuccess {
  access: boolean;
  user: {
    _id: string;
    fullName: string;
    email: string;
    avatarUrl: string;
    budgets: [];
    createdAt: string;
    updatedAt: string;
    __v?: number;
  };
}

// signUp
export interface ISignUpPayload {
  fullName: string;
  email: string;
  password: string;
  avatarUrl: string;
}

export interface ISignUpResponseSuccess {
  success: boolean;
  user: {
    email: string;
  };
}
