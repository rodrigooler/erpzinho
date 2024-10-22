import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  #http = inject(HttpClient);

  #url = 'http://localhost:3000';
  #endpoint = '/products';

  search(args: { id?: string; name?: string }) {
    return this.#http.get(`${this.#url}${this.#endpoint}/search`, {
      params: { ...args },
    });
  }

  findById(id: string) {
    return this.#http.get(`${this.#url}${this.#endpoint}/${id}`);
  }

  create(product: { name: string; description: string; price: number }) {
    return this.#http.post(`${this.#url}${this.#endpoint}`, product);
  }

  update({
    id,
    ...args
  }: {
    id: number;
    name: string;
    description: string;
    price: number;
  }) {
    return this.#http.put(`${this.#url}${this.#endpoint}/${id}`, args);
  }
}
