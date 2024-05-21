import {Component} from '@angular/core';
import {JsonPipe, CommonModule} from "@angular/common";
import {NgIf, NgForOf} from "@angular/common";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
  FormArray,
  NgForm,
  FormsModule
} from "@angular/forms";

@Component({
  selector: 'app-authrization',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './authrization.component.html',
  styleUrl: './authrization.component.css'
})
export class AuthrizationComponent {
  // ClassWork
  // name: string = "";
  // password: string = "";
  //
  // inf: string = "";
  //
  // onSubmit(form: NgForm){
  //   console.log(form);
  //   this.inf=form.value;
  // }

  //HomeWork

  AuthorizeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.AuthorizeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      checkbox: [false],
      hobbies: this.formBuilder.array([])
    });
  }

  createHobbyControl(): FormControl {
    return this.formBuilder.control('', Validators.required);
  }

  onSubmit() {
    const checkboxControl = this.AuthorizeForm.get('checkbox');
    if (checkboxControl && checkboxControl.value) {
      if (this.AuthorizeForm.valid) {
        // Оставляем только первый элемент в массиве hobbies
        const hobbies = this.AuthorizeForm.get('hobbies') as FormArray;
        while (hobbies.length > 1) {
          hobbies.removeAt(1);
        }

        console.log('Форма отправлена:', this.AuthorizeForm.value);

        this.AuthorizeForm.reset({
          email: '',
          password: '',
          checkbox: false,
          hobbies: ['']
        });
      } else {
        console.error('Форма невалидна');
      }
    } else {
      console.error('Чекбокс не отмечен');
    }
  }

  getFormsControls(): FormArray {
    return this.AuthorizeForm.controls['hobbies'] as FormArray;
  }

  addHobby() {
    (<FormArray>this.AuthorizeForm.controls['hobbies']).push(this.createHobbyControl());
  }

  removeHobby(index: number) {
    (<FormArray>this.AuthorizeForm.controls['hobbies']).removeAt(index);
  }

}
