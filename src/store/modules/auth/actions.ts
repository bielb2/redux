import { action } from "typesafe-actions";

export function signInRequest({
  email, password
}:
  {
    email: string;
    password: string;
  }) {
  return action('@auth/SIGN_IN_REQUEST', {
    email,
    password
  });
}

// {
//   type: '@auth/SIGN_IN_REQUEST',
//   payload: {
//     email,
//     password
//   }
// }