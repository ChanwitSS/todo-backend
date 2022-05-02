import { SHA256 } from 'crypto-js';
import { User } from 'main/entities';

const nonce = "NARAKA";
export const isPasswordMatched = (user: User, inputPassword: string) => {
  const password: string = user?.password;
  const hashedInputPassword: string = hashPassword(inputPassword);
  return user && password.toLocaleUpperCase() === hashedInputPassword.toLocaleUpperCase();
}

export const hashPassword = (password: string) => {
  return SHA256(nonce + password).toString();
}