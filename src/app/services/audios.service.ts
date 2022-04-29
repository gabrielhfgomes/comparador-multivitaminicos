import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Audio } from '../models/audio.model';

@Injectable({
  providedIn: 'root'
})
export class AudiosService {

  constructor(private httpClient: HttpClient) {}

  createAudio(audio: Audio): Observable<Audio> {

    const formData = new FormData();
    formData.append("file", audio.file, audio.file.name);
    formData.append('audio', new Blob([JSON.stringify({
      "name": audio.name,
      "description": audio.description, 
      "category": { 
        "id": audio.category.id
      }
    })], {
      type: "application/json"
    }));
    return this.httpClient.post<Audio>('http://localhost:8080/api/audios', formData);
  }

//   uploadFile(file: File): Observable<any> {
//     const formData = new FormData();
//     formData.append("file", file, file.name);
//     return this.httpClient.post<Audio>('http://localhost:8080/api/audios/uploadAudio', formData);
//   }
}
