import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaWhatsAppService {
  private mediaRecorder!: MediaRecorder;
  private audioChunks: Blob[] = [];
  constructor() { }

  startRecording() {
    const stream = navigator.mediaDevices.getUserMedia({ audio: true });
    stream.then((audioStream) => {
      this.mediaRecorder = new MediaRecorder(audioStream);
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };
      this.mediaRecorder.start();
    });
  }

  stopRecording(): Blob {
    this.mediaRecorder.stop();
    return new Blob(this.audioChunks, { type: 'audio/wav' });
  }
}
