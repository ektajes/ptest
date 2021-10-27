import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }
  Url = "http://localhost:3000/posts";
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.Url);
  }

  getwithId(id:number):Observable<Photo>{
return this.http.get<Photo>(this.Url+"/"+id);
  }
  
}
