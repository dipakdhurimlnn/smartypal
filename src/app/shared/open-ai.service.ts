import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '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'; // Replace with your OpenAI API key

  constructor(private http: HttpClient) {
  }

  sendMessage(messages: { role: string; content: string }[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'gpt-4', // Use 'gpt-3.5-turbo' if required
      messages: messages,
    };

    return this.http.post(this.apiUrl, body, {headers});
  }
}
