class Options
{
  constructor()
  {
    this.mainMenu = new Image();

    this.mainMenu.src = "resources/main_menu.png";
    this.clickDetection = new ClickDetection();

    gameGlobal.tutorial = false;

    this.green = "#00ff00";
    this.black = "#000000";

  }

  update()
  {
    if(this.clickDetection.isClicked())
    {
      if(this.checkCollisionBetween(this.clickDetection.getPosition(), 1620,700, 200,200))
      {
        this.clickDetection.reset();
        gameGlobal.menuManager.setCurrentScene("Main Menu");
      }

      if(this.checkCollisionBetween(this.clickDetection.getPosition(), 1200, 400, 200, 200))
      {
        console.log("change");
        this.toggleActive();
      }
    }
  }

  render(ctx)
  {
    ctx.drawImage(this.mainMenu, 1620,700, 200,200);

    if(gameGlobal.tutorial === true)
    {
      ctx.fillStyle = this.green;
    }

    else
    {
      ctx.fillStyle = this.black;
    }

    ctx.fillRect(1200, 400, 200, 200);

    ctx.font = "30px Arial";
    ctx.fillStyle = this.black;
    ctx.fillText("Toggle Tips", 1000, 500);
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

  toggleActive()
  {
    if(gameGlobal.tutorial === true)
    {
      gameGlobal.tutorial = false;
    }
    else
    {
      gameGlobal.tutorial = true;
    }

    this.clickDetection.reset();
  }
}
