class MainMenu extends Scene
{
  constructor()
  {
    super();
    this.play = new Image();
    this.howToPlay = new Image();
    this.tutorial = new Image();
    this.options = new Image();
    this.exit = new Image();

    this.play.src = "resources/play_button.png";
    this.howToPlay.src = "resources/Help.png";
    this.tutorial.src = "resources/Tutorial.png";
    this.options.src = "resources/Options.png";
    this.exit.src = "resources/Exit.png";
    document.addEventListener("click", this.onClick.bind(this));
  }

  update()
  {

  }

  render(ctx)
  {
    ctx.drawImage(this.play, 300, 100, 200, 100);
    ctx.drawImage(this.howToPlay, 300, 250, 200, 100);
    ctx.drawImage(this.tutorial, 300, 400, 200, 100);
    ctx.drawImage(this.options, 300, 550, 200, 100);
    ctx.drawImage(this.exit, 300, 700, 200, 100);
  }

  onClick(e)
  {
    console.log(e.clientX + ", " + e.clientY);
    //this.checkCollisionBetween(300, 50, 300, 100)
  }


  checkCollisionBetween(x,y,width,height)
    {
     var collides = false;
     if ((this.startingPosition[0] < x + width) &&
       (this.startingPosition[0] > x) &&
       (this.startingPosition[1] < y + height) &&
       (this.startingPosition[1] > y)){
         collides = true;
       }
     return collides;
  }
}
