import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { getPlayers } from '@angular/core/src/render3/players';
import { environment } from 'src/environments/environment';
import { SoundService } from '../services/sound.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @Input('ModalLabel') Modal:Boolean;

  //Declaração de Variaveis 
  Player;
  StartGame = false;
  PlayerScore = 0;
  ComScore = 0;
  Text: string;
  imagePlayer = null;
  imageCom = null;
  Round = null;
  arrayCom = ['pedra', 'papel', 'tesoura']
  getPlayers;

  constructor ( 
             public router: Router,
             public http: HttpClient,
             private sounservice: SoundService
             ) { }
// No OnInit do Componente Pega o usuario Salvo e seta o texto Inicial na tela
  ngOnInit() {
    this.Player = localStorage.getItem('player');
    this.Text = 'Escolha Sua Jogada...'
    this.sounservice.playAudio();
  }
//Função para maquina fazer sua jogada
//Possuo um array com 3 strings numeradas de 0 a 2
//o js randomiza um numero de 0 a 2 e faz um push no array;
  async  goComPlay() {
    let play;
    let number =
      await Math.floor(Math.random() * 3)
    play = this.arrayCom[number]
    return play;
  }
//função que verifica Quantidade de Rounds , e as Jogadas Feitas pelo Player e pela Maquina;
  async verify(playerPlay) {

    this.Round ++;
    if (this.Round != 10) {

      this.StartGame = true;
     
      let com =
        await this.goComPlay();

      if (playerPlay == com) {
        this.Text = 'Round Empatado'
        this.imagePlayer = playerPlay
        this.imageCom = com;
      } else if (playerPlay == 'papel' && com != 'tesoura') {
        this.Text = 'Você Venceu'
        this.imagePlayer = playerPlay
        this.imageCom = com;
        this.PlayerScore++;
      } else if (playerPlay == 'pedra' && com != 'papel') {
        this.Text = 'Você Venceu'
        this.imagePlayer = playerPlay
        this.imageCom = com;
        this.PlayerScore++;
      } else if (playerPlay == 'tesoura' && com != 'pedra') {
        this.Text = 'Você Venceu'
        this.imagePlayer = playerPlay
        this.imageCom = com;
        this.PlayerScore++;
      } else {
        this.imagePlayer = playerPlay
        this.imageCom = com;
        this.Text = 'Você Perdeu'
        this.ComScore++;
      }

    } else {
      
      if (this.PlayerScore > this.ComScore) {
      alert('Parabens Você Venceu ..')
      await this.NewPlayer(this.Player,this.PlayerScore,this.ComScore)
      await this.ListPlayer(this.Player)
      document.getElementById("btnmodal").click()
      
    } else {
      alert('Não foi dessa vez... Continue Tentando...')
     await this.NewPlayer(this.Player,this.PlayerScore,this.ComScore)
     await this.ListPlayer(this.Player)
      document.getElementById("btnmodal").click()
     
   
    }
  }
  
}

async NewGame() {
  this.sounservice.stopAduio();
  localStorage.clear();
  this.StartGame = false;
  this.router.navigate(['inicio']);
}

async ResumeGame() {
  this.StartGame = false;
  this.PlayerScore = 0;
  this.ComScore = 0;
  this.Round = null;
}

async NewPlayer(player,playerscore,comscore) {
   const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let request =
    await this.http.post(environment.ip+'/players/player=?player='+player+'&&playerscore='+playerscore+'&&comscore='+comscore, httpOptions).toPromise();

  }

  async ListPlayer(player) {
    console.log(player)
    const httpOptions = {
       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
     };
     let request =
     await this.http.get(environment.ip+'/players/list/player=?player='+player, httpOptions).toPromise();
    this.getPlayers = await request
    console.log(this.getPlayers)
    return this.getPlayers;
     
   }

}


