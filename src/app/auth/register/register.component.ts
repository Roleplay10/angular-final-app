import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm : FormGroup;
  showError! : boolean;
  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.loginForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(private formBuilder : FormBuilder,
              private authService : AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(7)]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      tel: [null, [Validators.required]]
    });
  }

  get email(): FormControl{
    return this.loginForm.get("email") as FormControl;
  }
  get password(): FormControl{
    return this.loginForm.get("password") as FormControl;
  }
  get name(): FormControl{
    return this.loginForm.get("name") as FormControl;
  }
  get tel(): FormControl{
    return this.loginForm.get("tel") as FormControl;
  }
  register(): void
  {
    if(this.loginForm.invalid) return;
    const payLoad = {
          email: this.email.value,
          password: this.password.value,
          name: this.name.value,
          tel: this.tel.value
        };

    this.authService.register(payLoad).subscribe({       //  eve.holt@reqres.in
      next: (response) => {
        window.localStorage["token"]=response.token;
        this.router.navigate(["/dashboard"]);
      },
      error: () => {
        this.showError=true;
      },
    });
  }
}
