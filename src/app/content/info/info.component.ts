import { Component } from '@angular/core';
import { artistasServices } from 'src/app/services/artistasServices';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  artistas: Artistas[] = [];
  idArtista: any = "";
  nombreArtista: any = "";
  fechaDeRegistro: any = "";
  estiloMusical: any = "";
  correo: any = "";
  telefono: any = "";
  numeroOyentes: any="";
  nombreAKA: any = "";
  mensaje: any = "";
  aceptarTerminos: any = "";

  constructor(private artistasService: artistasServices) { }
  ngOnInit(): void {
    this.artistasService.signArtists(this.idArtista, this.nombreArtista, this.fechaDeRegistro, this.estiloMusical, this.correo, this.telefono, this.numeroOyentes,this.nombreAKA, this.mensaje, this.aceptarTerminos).subscribe((artistas: Artistas[]) => {
      this.artistas = artistas;
    });
    this.filtrarPorIdArtista();
  }

  filtrarPorIdArtista() {
    this.artistasService.signArtists(this.idArtista, this.nombreArtista, this.fechaDeRegistro, this.estiloMusical, this.correo, this.telefono, this.numeroOyentes,this.nombreAKA, this.mensaje, this.aceptarTerminos).subscribe((artistas: Artistas[]) => {
      this.artistas = artistas.filter(a => a.idArtista.toString().includes(this.idArtista));
    });
  }
}

export interface Artistas { idArtista: number, nombreArtista: string, fechaDeRegistro: string, estiloMusical: string, correo: string, telefono: number, numeroOyentes:number ,nombreAKA: string, mensaje: string, aceptarTerminos: boolean }