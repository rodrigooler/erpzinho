import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, JsonPipe],
  template: `
    <div
      class="flex p-4 bg-purple-800 justify-center items-center h-screen flex-col gap-4"
    >
      <h1 class="text-3xl text-white">ERPZinho Webapp</h1>

      <form class="flex flex-col gap-4" [formGroup]="form">
        <input
          placeholder="E-mail"
          formControlName="email"
          class="p-4 w-60 rounded-md"
        />

        <input
          placeholder="Password"
          type="password"
          autocomplete="current-password"
          formControlName="password"
          class="p-4 w-60 rounded-md"
        />

        <button
          (click)="submit()"
          class="p-4 bg-purple-600 text-white rounded-md"
        >
          Login
        </button>

        @if(!form.valid && form.touched) {
        {{ form.errors![0] }}
        } @if(messageError) {
        <p class="text-red-500">{{ messageError }}</p>
        } @else {
        <p class="text-green-500 w-40 truncate">{{ messageSuccess }}</p>
        }
      </form>
    </div>
  `,
})
export class AppComponent {
  #authService = inject(AuthService);

  messageError = '';
  messageSuccess = '';

  form = new FormGroup({
    email: new FormControl('alice@erp.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('password1', [Validators.required]),
  });

  submit() {
    this.#authService.login(this.form.value as any).subscribe({
      next: ({ accessToken }: any) => {
        this.messageSuccess = `Logged in with token: ${accessToken}`;
        this.messageError = '';
      },
      error: (error) => {
        this.messageError = error.error.message;
      },
    });
  }
}
