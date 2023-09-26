class Passaro extends BaseClass {
  constructor(x, y){
    super(x, y, 50,50)
    this.image = loadImage("sprites/bird.png");
    this.fumacaImg = loadImage ("sprites/smoke.png");
    this.trajetoria = []
  }
  display(){
    if(this.body.velocity.x > 10 && this.body.velocity.x > 200 && estado === "lançado"){
        var position = [this.body.position.x, this.body.position.y];
        this.trajetoria.push(position);
    }
    for(var i = 0; i <this.trajetoria.length; i++){
        this.image(this.fumacaImg, this.trajetoria[i][0],this.trajetoria[i][1] )
    }
    super.display();
  }
}
