class Platform{
    constructor(x){
        this.body=createSprite(x,height-50)
        this.body.addImage(Grass)
        this.body.scale=(0.7)
        this.body.debug= true
        this.body.setCollider("rectangle",0,45,600,50)
    }
}