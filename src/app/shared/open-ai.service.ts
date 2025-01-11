import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  private backendUrl = 'https://smartypal-backend.vercel.app/generate-content'; // Backend URL

  constructor(private http: HttpClient) {
  }

  sendMessage(message: string): Observable<any> {
    const body = {
      prompt: message,
    };

    return this.http.post(this.backendUrl, body);
  }
}
