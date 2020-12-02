import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cars } from '../model/Cars';

@Injectable({
  providedIn: 'root'
})
export class PstService {
  httpOptions={
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  urlCars : string="http://localhost:3000/cars"

  constructor(private http : HttpClient) { }
  getCarsJson():Observable<cars[]>{
    
  return this.http.get<cars[]>(this.urlCars);
      }

      addCar(Car : cars):Observable<cars>{
        return this.http.post<cars>(this.urlCars,Car);
      }
      deleteCar(c : cars | number):Observable<cars> {
        const id=typeof c ==='number' ? c : c.id;
        const url=this.urlCars+'/'+id;
        return this.http.delete<cars>(url);
        }

        getCarByIdJson(id: number): Observable<cars>
        {
          return this.http.get<cars>(this.urlCars +'/'+ id);
        }
          
          updateCar(id:number,car:cars){
            return this.http.put<cars>(this.urlCars+'/'+id,car,this.httpOptions);
          }
}
