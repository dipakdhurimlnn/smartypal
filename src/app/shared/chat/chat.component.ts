import {Component} from '@angular/core';
import {OpenAiService} from '../open-ai.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-chat', standalone: true,
  imports: [FormsModule, CommonModule], providers: [OpenAiService],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  messages: { role: string; content: string }[] = [
    {role: 'system', content: 'You are a helpful assistant.'},
  ];
  userMessage: string = '';
  isLoading: boolean = false;

  constructor(private openAiService: OpenAiService) {
  }

  sendMessage() {
    if (!this.userMessage.trim()) return;

    // Add the user's message to the conversation
    this.messages.push({role: 'user', content: this.userMessage});
    const userInput = this.userMessage; // Save the user input
    this.userMessage = ''; // Clear the input field
    this.isLoading = true;

    this.openAiService.sendMessage(this.messages).subscribe(
      (response) => {
        // Extract the assistant's response
        const aiResponse = response.choices[0].message.content;
        this.messages.push({role: 'assistant', content: aiResponse});
        this.isLoading = false;
      },
      (error) => {
        console.error('Error:', error);
        this.messages.push({
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again later.',
        });
        this.isLoading = false;
      }
    );
  }
}
