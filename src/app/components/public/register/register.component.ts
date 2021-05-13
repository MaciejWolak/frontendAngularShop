import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../../../services/register.service';
import {Router} from '@angular/router';

// tslint:disable-next-line:typedef
function passwordMatchValidator(form) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');
  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({passwordMatch: true});
  } else {
    confirmPassword.setErrors(null);
  }
  return null;
}

// tslint:disable-next-line:typedef
function symbolValidator(control) {
  if (control.hasError('required')) { return null; }
  if (control.hasError('minlength')) { return null; }

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder: FormBuilder,
              private registerService: RegisterService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  // tslint:disable-next-line:typedef
  buildForm() {
    this.registerForm = this.builder.group({
      // email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(8)]],
      confirmPassword: ''
    }, {
      validators: passwordMatchValidator
    });
  }




  // tslint:disable-next-line:typedef
  register() {
    this.registerService.register(this.registerForm.value).subscribe(() => console.log('Done'),
      console.error);
    window.alert('Done');
    this.registerForm.reset();
    this.router.navigate(['/login']);
  }

}
