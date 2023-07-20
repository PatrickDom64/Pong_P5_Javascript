//Variaveis dos raquete
let xRetangulo = 10;
let yRetangulo = 10;
let lRetangulo = 10;
let hRetangulo = 50;

//Variaveis dos raquete Oponente
let xRetanguloOponente = 570;
let yRetanguloOponente = 10;
let lRetanguloOponente = 10;
let hRetanguloOponente = 50;

//Variaveis da bolinha
let xBolinha = 350;
let yBolinha = 200;
let dBolinha = 15;
let rBolinha = dBolinha/2

let colisao = false;

//Variaveis da velocidade da bolinha
let VelocidadeXBolinha = 4;
let VelocidadeYBolinha = 4;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Variaveis da velocidade do retangulo
let VelocidadeRetangulo = 6;
let velocidadeYOponente = 10;

//sons
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
function draw() {
  background(2);
  
  incluiPlacar();
  movimentoRetangulo();
  
  mostroRetangulo(xRetangulo,yRetangulo);
mostroRetanguloOponente(xRetanguloOponente,yRetanguloOponente);
  
  mostroBolinha();
  movimentoBolinha();
  verificaBolinha();
  
  colisaoRaqueteBiblioteca(xRetangulo,yRetangulo);
  colisaoRaqueteBibliotecaRival(xRetanguloOponente,yRetanguloOponente);
  //velocidadeOponente()
  movimentoRetanguloOponente();
  
  marcaPonto()
  
  
}
function incluiPlacar() {
    stroke(255);  
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0 ));
    rect(150,10,40,20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0 ));
    rect(450,10,40,20);  
    fill(255);
    text(pontosDoOponente, 470, 26);
    
}


function mostroBolinha(){
  circle (xBolinha, yBolinha, dBolinha);
}
function movimentoBolinha(){
  xBolinha += VelocidadeXBolinha;
  yBolinha += VelocidadeYBolinha;
}

function verificaBolinha(){
   if(xBolinha +rBolinha > width || xBolinha - rBolinha < 0){
    VelocidadeXBolinha *= -1;
  }
  if(yBolinha + rBolinha > height || yBolinha - rBolinha < 0){
    VelocidadeYBolinha *= -1;
  }
}
function mostroRetangulo(x,y){
  rect(x, y, lRetangulo, hRetangulo);
}

function mostroRetanguloOponente(x,y){
  rect(x, y, lRetanguloOponente, hRetanguloOponente);
}


function movimentoRetangulo(){
  if (keyIsDown(87)){
    yRetanguloOponente -= 10;
  }
  if (keyIsDown(83)){
    yRetanguloOponente += 10;
  }
}


function movimentoRetanguloOponente(){
  if (keyIsDown(UP_ARROW)){
    yRetangulo -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRetangulo += 10;
  }
}

function colisaoRaqueteBiblioteca(x,y){
  colidiu = 
  collideRectCircle(xRetangulo, yRetangulo, lRetangulo, hRetangulo,       xBolinha, yBolinha, rBolinha);  

  if(colidiu){
    VelocidadeXBolinha *= -1;
    //movimentoBolinha.play();
  }
}

function colisaoRaqueteBibliotecaRival(x,y){
  colidiu = 
  collideRectCircle(xRetanguloOponente, yRetanguloOponente, lRetanguloOponente, hRetanguloOponente,       xBolinha, yBolinha, rBolinha);  

  if(colidiu){
    VelocidadeXBolinha *= -1;
    //movimentoBolinha.play();
  }
}
function velocidadeOponente(){
  velocidadeYOponente = yBolinha - yRetanguloOponente - lRetanguloOponente / 2 - 30;
  yRetanguloOponente += velocidadeYOponente;
}
function marcaPonto(){
  if(xBolinha > 590){
    meusPontos ++;
  }
  if(xBolinha < 10){
    pontosDoOponente ++;
  }
}
