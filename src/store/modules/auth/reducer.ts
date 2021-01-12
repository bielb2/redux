import { AuthAction, AuthState } from "./types";

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
}

// state = estado atual da aplicação
// action = é o objeto que recebemos dentro da actions: payload etc...
// tudo que você retornar de um reducer, ele fica salvo na store
export default function auth
(
  state = initialState, 
  action: AuthAction
  ): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      }
    default:
      return state;
  }
}