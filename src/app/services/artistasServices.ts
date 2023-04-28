import { Injectable } from "@angular/core";
import { of, Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators';

@Injectable()
export class artistasServices {

  constructor(private http: HttpClient) { }

  artistas: Artistas[] = [];

  public signArtists(idArtista: number, nombreArtista: string, fechaDeRegistro: string, estiloMusical: string, correo: string, telefono: number, numeroOyentes: number, nombreAKA: string, mensaje: string, aceptarTerminos: boolean): Observable<Artistas[]> {
    if (nombreArtista != "") {
      this.artistas.push({ idArtista: idArtista, nombreArtista: nombreArtista, fechaDeRegistro: fechaDeRegistro, estiloMusical: estiloMusical, correo: correo, telefono: telefono, numeroOyentes: numeroOyentes, nombreAKA: nombreAKA, mensaje: mensaje, aceptarTerminos: aceptarTerminos });
    } return of(this.artistas);
  }

  private url = 'http://localhost:3306/m6artistas';


  // CREATE
  agregarArtista(artista: any): Observable<any> {
    return this.http.post<any>(this.url, artista).pipe(
      catchError(this.handleError)
    );
  }

  // READ
  obtenerArtistas(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      catchError(this.handleError)
    );
  }

  // UPDATE
  actualizarArtista(id: number, artista: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put<any>(url, artista).pipe(
      catchError(this.handleError)
    );
  }

  // DELETE
  eliminarArtista(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      console.error('Error:', error.error.message);
    } else {
      console.error(`Error ${error.status}: ${error.error}`);
    }
    return throwError('Algo salió mal; por favor, intenta de nuevo más tarde.');
  }
}

export interface Artistas { idArtista: number, nombreArtista: string, fechaDeRegistro: string, estiloMusical: string, correo: string, telefono: number, numeroOyentes: number, nombreAKA: string, mensaje: string, aceptarTerminos: boolean }
