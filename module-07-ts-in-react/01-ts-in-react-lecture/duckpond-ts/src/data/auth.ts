import type { SignInInput, SignInRes, User } from '../types';

const API_URL = 'https://duckpond-89zn.onrender.com/auth';

const signIn = async (formData: SignInInput): Promise<SignInRes> => {
  const res = await fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error('Something went wrong!');

  const data = (await res.json()) as SignInRes;

  return data;
};

const me = async () => {
  const token = localStorage.getItem('token');

  const res = await fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error('Something went wrong!');

  const data = (await res.json()) as User;

  return data;
};

export { signIn, me };
