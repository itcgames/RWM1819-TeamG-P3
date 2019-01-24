class Help
{
  constructor()
  {
    this.mainMenu = new Image();

    this.mainMenu.src = "resources/play_button.png";
  }

  update()
  {
    if(gameGlobal.clickDetection.isClicked())
    {
      if(this.checkCollisionBetween(gameGlobal.clickDetection.getPosition(), 300, 250, 200, 100));
      {
        gameGlobal.clickDetection.reset();
        gameGlobal.menuManager.setCurrentScene("Main Menu");
      }
    }
  }

  render(ctx)
  {
    ctx.drawImage(this.mainMenu, 500,800, 200,100);
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
