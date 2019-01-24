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
  }

  update()
  {
    if(gameGlobal.clickDetection.isClicked())
    {
      if(this.checkCollisionBetween(gameGlobal.clickDetection.getPosition(), 300, 250, 200, 100));
      {
        gameGlobal.clickDetection.reset();
        gameGlobal.menuManager.setCurrentScene("Help");
      }
    }
  }

  render(ctx)
  {
    ctx.drawImage(this.play, 300, 100, 200, 100);
    ctx.drawImage(this.howToPlay, 300, 250, 200, 100);
    ctx.drawImage(this.tutorial, 300, 400, 200, 100);
    ctx.drawImage(this.options, 300, 550, 200, 100);
    ctx.drawImage(this.exit, 300, 700, 200, 100);
  }

  checkCollisionBetween(clickPos, x,y,width,height)
  {
    var collides = false;
    if ((clickPos[0] < x + width) &&
     (clickPos[0] > x) &&
     (clickPos[1] < y + height) &&
     (clickPos[1] > y)){
       collides = true;
     }

     return collides;
  }
}
