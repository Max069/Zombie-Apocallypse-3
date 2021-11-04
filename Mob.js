class Mob{
    constructor(x){
            this.body= createSprite(x,300,20,20)
            this.body.addImage(Zombie)
            this.body.scale=(0.7)
            this.body.debug= true
            this.body.setCollider("rectangle",0,0,100,170)
            this.body.velocityX=-2
    }
}