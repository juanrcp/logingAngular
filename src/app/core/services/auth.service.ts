import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { LoginData } from '../../interfaces/loginData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  //Creamos el login
  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  //Metodo para registrar un nuevo usuario
  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  //Metodo para salir 
  logout() {
    return signOut(this.auth);
  }

  //Metodo para usar la autentificacion mediante Google 
  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}
