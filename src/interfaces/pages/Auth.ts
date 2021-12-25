export interface IUserRegister {
  name: string;
  email: string;
  password?: string;
  phone?: string;
  city?: string;
  state?: string;
  country?: string;
  image?: string;
  address?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IProfile extends IUserRegister {
  height: number;
  weight: number;
}
