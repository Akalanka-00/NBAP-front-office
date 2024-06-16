export interface UserSignUpModel {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

export interface UserSignInModel {
  email: string;
  password: string;
}

export interface UserModel {
  id: number;
  fname: string;
  lname: string;
  email: string;
  password: string;
  createdAt: Date;
  status: string;
  role: {
    role: string;
    name: string;
    authorities: string[];  
  };
  roleExpDate: Date;

  authStatus: string;
}