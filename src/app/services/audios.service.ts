import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Audio } from '../models/audio.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AudiosService {

  constructor(private httpClient: HttpClient) { }

  apiBaseUrl: string = environment.apiBaseUrl;

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
    return this.httpClient.post<Audio>(`${this.apiBaseUrl}/api/audios`, formData);
  }
}
