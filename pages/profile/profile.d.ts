//Avatar Interface
interface Iavatar {
  _id: string;
  url: string;
  secure_url: string;
  width: number;
  height: number;
}

// Profile Interface
interface Iprofile {
  authId: string;
  firstname: string;
  lastname: string;
  avatar: Iavatar;
  bio: string;
  gender: string;
  dob: string;
  address: string;
  contact: string;
  hidenumber: string;
}
