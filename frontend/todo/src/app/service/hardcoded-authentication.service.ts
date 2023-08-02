import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === "stef" && password === "abc") {
      sessionStorage.setItem("authenticatedUser", username);
      return true;
    }
    else {
      return false;
    }
  }

  isLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null);
  }
}
