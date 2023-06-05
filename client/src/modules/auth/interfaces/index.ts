// signIn
export interface ISignInPayload {
  email: string;
  password: string;
}

export interface ISignInResponseSuccess {
  access: boolean;
  token: string;
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
