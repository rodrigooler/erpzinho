import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  #http = inject(HttpClient);

  #url = 'http://localhost:3000';
  #endpoint = '/auths';

  login({ email, password }: { email: string; password: string }) {
    return this.#http.post(`${this.#url}${this.#endpoint}/login`, {
      email,
      password,
    });
  }
}
