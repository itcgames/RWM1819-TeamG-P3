class Help
{
  constructor()
  {
    this.mainMenu = new Image();

    this.mainMenu.src = "resources/play_button.png";
    this.clickDetection = new ClickDetection();
  }

  update()
  {
    if(this.clickDetection.isClicked())
    {
      if(this.checkCollisionBetween(this.clickDetection.getPosition(), 1000,800,200,100))
      {
        this.clickDetection.reset();
        gameGlobal.menuManager.setCurrentScene("Main Menu");
      }
    }
  }

  render(ctx)
  {
    ctx.drawImage(this.mainMenu, 1000,800, 200,100);
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
