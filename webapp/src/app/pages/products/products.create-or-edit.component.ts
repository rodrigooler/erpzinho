import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-products-create-or-edit',
  template: `
    @if(id) {
    <div>Edit Product {{ id }}</div>
    } @else {
    <div>Create new produto</div>
    }
  `,
})
export class ProductsCreateOrEditComponent {
  #routes = inject(ActivatedRoute);

  id = this.#routes.snapshot.paramMap.get('id');
}
