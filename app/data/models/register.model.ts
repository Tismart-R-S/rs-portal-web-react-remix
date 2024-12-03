export interface RegisterRequestModel {
  names: string;
  lastNames: string;
  email: string;
  password: string;
}

export interface RegisterResponseModel {
  uid: string;
  email: string;
  names: string;
  lastNames: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
