import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  Audio;
  constructor() { }

  async playAudio() {
    this.Audio = new Audio();
    this.Audio.src = "../../assets/sounds/sound.mp3";
    this.Audio.load();
    this.Audio.play();
  }

  async stopAduio(){
    this.Audio.pause()
  }
}
