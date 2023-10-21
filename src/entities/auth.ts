export interface IRegistrationRequest {
  email: string;
  password: string;
  commandId: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
}
