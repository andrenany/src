import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private user = { username: '', password: '' };

  login(username: string, password: string): boolean {
    if (username === 'testuser' && password === 'password') {
      this.loggedIn = true;
      this.user = { username, password };
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUser(): { username: string, password: string } {
    return this.user;
  }

  logout(): void {
    this.loggedIn = false;
    this.user = { username: '', password: '' };
  }
}
