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
    return this.httpClient.post<Audio>('http://localhost:8080/api/audios', audio);
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.httpClient.post<any>('http://localhost:8080/api/audios/uploadAudio', formData);
  }
}
