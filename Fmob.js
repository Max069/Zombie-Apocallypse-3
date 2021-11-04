class Fmob{
    constructor(x){
            this.body= createSprite(x,random(100,250),20,20)
            this.body.addImage(Fzombie)
            this.body.scale=(0.7)
            this.body.debug= true
            this.body.setCollider("rectangle",0,0,100,170)
            this.body.velocityX=-2
    }
}