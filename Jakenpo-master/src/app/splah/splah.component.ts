import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { SoundService } from '../services/sound.service';

@Component({
  selector: 'app-splah',
  templateUrl: './splah.component.html',
  styleUrls: ['./splah.component.css']
})
export class SplahComponent implements OnInit {
PlayerName;
  constructor(
            private router:Router,
            private soundservice: SoundService
            ) { }

  

  ngOnInit() {
    this.soundservice.playAudio()
  }



  //Metodo que Verifica se foi preenchido o input 
  verify(){
  
    if (this.PlayerName == null || this.PlayerName == undefined || this.PlayerName == '')
     return alert('Insira Um Nome para Inicaro o jogo');
      else
     return this.goHome();
  }

  //Metodo que Grava o nome do usuario e Redireciona para o componente principal
  goHome(){
  localStorage.setItem('player',this.PlayerName);
   this.router.navigate(['/home']);
  }
}
