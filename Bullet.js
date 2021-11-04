class Bullet{
    constructor(x,y){
        this.body=createSprite(x+60,y-15,20,20)
        this.body.velocityX=20
        this.body.addImage(Bullets)
        this.body.scale=0.1
    }
}