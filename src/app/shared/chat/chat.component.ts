import {Component, ElementRef, ViewChild} from '@angular/core';
import {OpenAiService} from '../open-ai.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {timestamp} from 'rxjs';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-chat', standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent], providers: [OpenAiService],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  messages: { role: string; content: string, isSent: boolean, time: string }[] = [
    {role: 'system', content: 'Chat with AI assistant.', isSent: false, time: this.timestamp},
  ];
  userMessage: string = '';
  isLoading: boolean = false;

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  @ViewChild('messageInput') private messageInput!: ElementRef;

  constructor(private openAiService: OpenAiService) {
  }

  sendMessage() {
    if (!this.userMessage.trim()) return;

    // Add the user's message to the conversation
    this.timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    this.messages.push({role: 'user', content: this.userMessage, isSent: true, time: this.timestamp});
    const userInput = this.userMessage; // Save the user input
    this.userMessage = ''; // Clear the input field
    this.isLoading = true;

    this.openAiService.sendMessage(userInput.trim()).subscribe(
      (response) => {
        // Extract the assistant's response
        const aiResponse = response.data;
        this.timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        this.messages.push({role: 'assistant', content: aiResponse, isSent: false, time: this.timestamp});
        this.isLoading = false;
        this.focusInput();
      },
      (error) => {
        console.error('Error:', error);
        this.timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        this.messages.push({
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again later.', isSent: false, time: this.timestamp
        });
        this.isLoading = false;
        this.focusInput();
      }
    );
  }


  private focusInput() {
    if (this.messageInput) {
      setTimeout(() => {
        this.messageInput.nativeElement.focus();
      });
    }
  }
}
