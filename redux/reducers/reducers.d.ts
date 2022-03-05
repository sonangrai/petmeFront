//user Interface
interface Iuser {
  _id: string;
  email: string;
  username: string;
  status: string;
}

//Auth initialstate interface
interface Iauth {
  isAuthenticated: boolean;
  token: any;
  authenticating: boolean;
  authenticationError: object;
  user: Iuser;
  profile: Iprofile;
  gettingProfile: boolean;
  gettingProfileSuccess: boolean;
  gettingProfileError: object;
}
