class MainMenu
{
  constructor()
  {
    this.play = new Image();
    this.howToPlay = new Image();
    this.tutorial = new Image();
    this.options = new Image();

    this.play.src = "resources/play_button.png";
    this.howToPlay.src = "resources/Help.png";
    this.tutorial.src = "resources/Tutorial.png";
    this.options.src = "resources/Options.png";

    this.clickDetection = new ClickDetection();
  }

  update()
  {
    if(this.clickDetection.isClicked())
    {
      if(this.checkCollisionBetween(this.clickDetection.getPosition(), 650, 250, 200,100))
      {
        gameGlobal.menuManager.setCurrentScene("Help");
      }
      if(this.checkCollisionBetween(this.clickDetection.getPosition(), 650, 400, 200,100))
      {
        gameGlobal.menuManager.setCurrentScene("Tutorial");
      }
      if(this.checkCollisionBetween(this.clickDetection.getPosition(), 650, 550, 200,100))
      {
        gameGlobal.menuManager.setCurrentScene("Options");
      }

      this.clickDetection.reset();
    }

  }

  render(ctx)
  {
    ctx.drawImage(this.play, 650, 200, 200, 100);
    ctx.drawImage(this.howToPlay, 650, 350, 200, 100);
    ctx.drawImage(this.tutorial, 650, 500, 200, 100);
    ctx.drawImage(this.options, 650, 650, 200, 100);
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
