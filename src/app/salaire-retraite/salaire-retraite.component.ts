import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaireRetraiteService } from '../salaire-retraite.service';
import { SalaireRetraite } from '../salaire-retraite';


@Component({
  selector: 'app-salaire-retraite',
  standalone: true,
  imports: [],
  templateUrl: './salaire-retraite.component.html',
  styleUrl: './salaire-retraite.component.css'
})
export class SalaireRetraiteComponent implements OnInit {
  salaires: SalaireRetraite[] = [];
  salaireRetraite: SalaireRetraite = {
    id: 0,
    numEmp: '',
    numAssSoc: '',
    salaireDeclare: '',
    salairePlafonne: '',
    salaireDifferentiel: ''
  }
  salaireRetraiteForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private salaireRetraiteService: SalaireRetraiteService) {
    this.salaireRetraiteForm = this.fb.group({
      numEmp: ['', Validators.maxLength(10)],
      numAssSoc: ['', Validators.maxLength(10)],
      salaireDeclare: ['', Validators.maxLength(13)],
      salairePlafonne: ['', Validators.maxLength(13)],
      salaireDifferentiel: ['', Validators.maxLength(13)]
    });
  }

  ngOnInit(): void {
    this.salaireRetraiteService.getAllSalaires().subscribe((salaires) => {
      this.salaires = salaires;
    });
  }


  // Adding missing left zeros for inputs to make them appropriate to what we need in the database
  private addZeros(val: string, length: number): string {
    if (val.length < length) {
      const n1 = length - val.length;
      let i1 = 0;
      while (i1 < n1) {
        val = '0' + val;
        i1++;
      }
    }
    return val;
  }

  Num(val: string): string {
    const newVal = this.addZeros(val, 10);
    return newVal;
  }
  
  Num2(val: string): string {
    const newVal = this.addZeros(val, 13);
    return newVal;
  }

  createSalaire() {
    if (this.salaireRetraiteForm.valid) {
      const { numEmp, numAssSoc, salaireDeclare, salairePlafonne, salaireDifferentiel } = this.salaireRetraiteForm.value;
      const salaire: SalaireRetraite = {
        id: this.salaireRetraite.id,
        numEmp: this.Num(numEmp),
        numAssSoc: this.Num(numAssSoc),
        salaireDeclare: this.Num2(salaireDeclare),
        salairePlafonne: this.Num2(salairePlafonne),
        salaireDifferentiel: this.Num2(salaireDifferentiel)
      };
  
      this.salaireRetraiteService.createSalaire(salaire).subscribe(
        (response) => {
          console.log('Salaire crée avec succes', response);
          this.salaireRetraiteForm.reset();
          this.salaireRetraite = {
            id: 0,
            numEmp: '',
            numAssSoc: '',
            salaireDeclare: '',
            salairePlafonne: '',
            salaireDifferentiel: ''
          };
        },
        (error) => {
          console.error('Erreur lors du création du salaire', error);
        });
    } else {
      console.log('entrée non valide');
    }
  }
  

  /*isInputValid(): boolean {
    const { numEmp, numAssSoc, salaireDeclare, salairePlafonne, salaireDifferentiel } = this.salaireRetraite;
    return (
      numEmp.length <= 10 &&
      numAssSoc.length <= 10 &&
      salaireDeclare.length <= 13 &&
      salairePlafonne.length <= 13 &&
      salaireDifferentiel.length <= 13
    );
  }*/


  download() {
    this.salaireRetraiteService.getSalaireFile().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.txt';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
  }
}
