import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import {
  COLOR_GRID_ITEMS,
  ColorGridSelectComponent,
} from '@brew/ng/ui/components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppService } from './app.service';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,

    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,

    ColorGridSelectComponent,
  ],
  selector: 'brew-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[AppService]
})
export class AppComponent {
  private readonly _fb = inject(FormBuilder);
 constructor(private appService: AppService){}
  public readonly form = this._fb.group({
    search: this._fb.control(''),
    color: this._fb.control(COLOR_GRID_ITEMS[2], {
      validators: [Validators.required],
    }),
  });

  submit(): void {
    const selectedColor = this.form.value.color;
    console.log(selectedColor); // Check if the selected color is logged correctly
    // Pass the selectedColor value to the ColorGridSelectComponent
    // For example:
    this.appService.raiseDataEmitterEvent(this.form.value.search)
    // this.colorGridSelectComponent.selectedColor = selectedColor;
  }

}
