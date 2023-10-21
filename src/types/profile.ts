export type Profile = {
  id: string;
  name: string;
  email: string;
  signUpDate: Date;
};

export interface IUpdateProfileRequest {
  name: string;
}
