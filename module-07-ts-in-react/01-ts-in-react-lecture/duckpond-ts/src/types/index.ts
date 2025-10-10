import type { Dispatch, SetStateAction } from 'react';

export type DBEntry = {
  _id: string;
  createdAt: string;
  __v: number;
};

export type User = DBEntry & {
  firstName: string;
  lastName: string;
  email: string;
};

export type DuckInput = {
  name: string;
  imgUrl: string;
  quote: string;
};

export type Duck = DBEntry & DuckInput;

export type SignInInput = {
  email: string;
  password: string;
};

export type SignInRes = {
  token: string;
  user: {
    userId: string;
  };
};

export type AuthContextType = {
  signedIn: boolean;
  user: User | null;
  handleSignIn: (token: string) => void;
  handleSignOut: () => void;
};

export type DuckContextType = {
  ducks: Duck[];
  setDucks: Dispatch<SetStateAction<Duck[]>>;
  loading: boolean;
  error: string | null;
};
