import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {PetSitter} from '../Shared/pet-sitter';
import {ActivatedRoute, Router} from '@angular/router';
import {SITTERS} from '../Shared/mock-data';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-modify-sitter-component',
  imports: [ReactiveFormsModule,
    NgIf,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatInput,
    MatCheckbox,
    MatButton,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  templateUrl: './modify-sitter-component.component.html',
  standalone: true,
  styleUrl: './modify-sitter-component.component.scss'
})
export class ModifySitterComponentComponent implements OnInit{
  sitterForm: FormGroup;
  sitter: PetSitter | undefined;
  isNewSitter: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {this.sitterForm = this.fb.group({
    name: ['', [Validators.required]],
    age: ['', [Validators.required, Validators.min(18)]],
    experience: ['', [Validators.required]],
    specialty: ['', [Validators.required]],
    rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
    available: [true],
    photo: ['']
  });
  }

  ngOnInit(): void {

    const sitterId = this.route.snapshot.paramMap.get('id');
    if (sitterId) {
      this.isNewSitter = false;
      this.sitter = SITTERS.find(s => s.id === +sitterId);
      if (this.sitter) {
        this.sitterForm.patchValue(this.sitter);
      }
    }
  }

  onSubmit(): void {
    if (this.sitterForm.valid) {
      if (this.isNewSitter) {
        // Adding new sitter logic
        const newSitter: PetSitter = {
          ...this.sitterForm.value, id: SITTERS.length + 1,
        };
        SITTERS.push(newSitter);
      } else {
        // Updating existing sitter logic
        if (this.sitter) {
          this.sitter = { ...this.sitterForm.value, id: this.sitter.id };
          //Type assertion, to work around my null error
          const index = SITTERS.findIndex(s => s.id === (this.sitter as PetSitter).id);
          if (index !== -1) {
            // Update the sitter in the array only if it's found + Type assertion
            SITTERS[index] = { ...this.sitterForm.value, id: (this.sitter as PetSitter).id };
          }
        }
      }

      this.router.navigate(['/sitters']);
    }
  }

}
