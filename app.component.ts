import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './helpers/must-match.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
  submitted = false;
//   titles = ['Mr', 'Mrs', 'Miss', 'Ms'];
titles = ['alen', 'shikha', 'shilpa', 'dsfds'];
  list = [
    {name:'alen',
      role:'safdsf'
  },
  {name:'shikha',
      role:'safdsf'
  },
  {name:'shilpa',
      role:'safdsf'
  },
  {name:'hhjhj',
      role:'safdsf'
  }
  ]
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
  onClick(){
    // this.titles.sort((n1, n2) => {
    //   return (n1.name, n2.name);
    //   )}
    const formValue = this.registerForm.value;
    console.log(this.list);
    this.list.filter(
      (element,index) => {
        return element.name == formValue.title;
      }
    )
    console.log(this.list);
    console.log(this.list);
  }
}
