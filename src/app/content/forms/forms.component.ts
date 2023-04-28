import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { artistasServices } from 'src/app/services/artistasServices';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent {

  mayorDeEdad(aceptarTerminos: FormControl) {
    if (aceptarTerminos.value == false) {
      return { aceptarTerminos };
    } else {
      return null;
    }
  }

  artistas: Artistas[] = [];
 
  idArtista: FormControl = new FormControl('', [Validators.required, Validators.min(1), Validators.pattern(/^([0-9])*$/)]);
  nombreArtista: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]);
  nombreAKA: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]);
  estiloMusical: FormControl = new FormControl('', Validators.required);
  correo: FormControl = new FormControl('', [Validators.email, Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]);
  telefono: FormControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  numeroOyentes: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^([0-9])*$/)]);
  fechaDeRegistro: FormControl = new FormControl('', Validators.required);
  mensaje: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]);
  aceptarTerminos: FormControl = new FormControl('', [Validators.required, this.mayorDeEdad]);

  Form: FormGroup = new FormGroup({
    idArtista: this.idArtista,
    nombreArtista: this.nombreArtista,
    nombreAKA: this.nombreAKA,
    estiloMusical: this.estiloMusical,
    correo: this.correo,
    telefono: this.telefono,
    numeroOyentes: this.numeroOyentes,
    fechaDeRegistro: this.fechaDeRegistro,
    mensaje: this.mensaje,
    aceptarTerminos: this.aceptarTerminos
  });

  constructor(private artistasService: artistasServices) { }
  ngOnInit() { }
  Clic(datos: FormGroup) {
    this.artistasService.signArtists(this.idArtista.value, this.nombreArtista.value, this.fechaDeRegistro.value, this.estiloMusical.value, this.correo.value, this.telefono.value, this.numeroOyentes.value, this.nombreAKA.value, this.mensaje.value, this.aceptarTerminos.value);
  }

}

export interface Artistas { idArtista: number, nombreArtista: string, fechaDeRegistro: string, estiloMusical: string, correo: string, telefono: number, numeroOyentes: number, nombreAKA: string, mensaje: string, aceptarTerminos: boolean }
