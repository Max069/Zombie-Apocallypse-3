  var gameState= "Start"
  var newX= 50

function preload() {
   Human=loadImage("Bobs.png")
   Grass=loadImage("Grass.png")
   Zombie=loadImage("Zombie.png")
   Fzombie=loadImage("Fzombiee.png")
   Bullets=loadImage("Bullet.png")
}

function setup() {
  createCanvas(1200,400);
  player= new Player()
  start= new Start()

  platformGroup= new Group()
  bulletGroup= new Group()
  zombiesGroup= new Group()
  for(var i=0; i<25; i++){
    platform= new Platform(newX)
    platformGroup.add(platform.body)
    newX+=400
    if(i%2===0){
    zombie= new Mob(newX)
    zombiesGroup.add(zombie.body)
    }

    if(i%3===0){
      fzombie= new Fmob(newX+200)
      zombiesGroup.add(fzombie.body)
    }
  }

  start.display()
}

function draw() {
  background("black");
  console.log(player.body.y)
  camera.position.x=player.body.x+300
  if(gameState==="Play1"){
    start.button.hide()
    start.title.hide()
    start.display1()
  }
  if(gameState==="Play"){
    background(255)
    player.body.velocityY+=2
    start.button.hide()
    start.title.hide()
    player.body.collide(platformGroup)
    if(keyDown("W") && player.body.velocityY==0){
      player.body.velocityY=-25
    }
    if(keyDown("D")){
      player.body.x+=5
    }
    if(keyDown("A")){
      player.body.x-=5
    }
    drawSprites();
  }
}

  function keyPressed(){
    if(keyCode===32){
      bullet= new Bullet(player.body.x,player.body.y)
      bulletGroup.add(bullet.body)
    }
  }