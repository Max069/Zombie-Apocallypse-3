class Player{
    constructor(){
        this.body= createSprite(50,200,20,20)
        this.body.addImage(Human)
        this.body.scale=(0.25)
        this.body.debug= true
       // this.body.setCollider("rectangle",0,0,100,170)
    }
}