import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  private backendUrl = 'https://smartypal-backend.vercel.app//api/openai'; // Backend URL

  constructor(private http: HttpClient) {
  }

  sendMessage(messages: { role: string; content: string }[]): Observable<any> {
    const body = {
      model: 'gpt-4',
      messages: messages,
    };

    return this.http.post(this.backendUrl, body);
  }
}
