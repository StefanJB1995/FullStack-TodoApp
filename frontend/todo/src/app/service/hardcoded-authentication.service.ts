import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === "stef" && password === "abc") {
      return true;
    }
    else {
      return false;
    }
  }
}
