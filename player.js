class Player {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.Player_image=loadImage("./assets/player.png")
      this.PlayerBase_image=loadImage("./assets/PlayerBase.png")
    }
   
    display() {
     push()
   imageMode(CENTER);
     image(this.Player_image,this.x,this.y,this.width,this.height);
   pop()
    
   noFill()
    }
  }