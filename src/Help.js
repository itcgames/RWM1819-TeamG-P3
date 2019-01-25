class Help
{
  constructor()
  {
    this.mainMenu = new Image();
    this.left = new Image;
    this.right = new Image;
    this.jump = new Image;
    this.duck = new Image;
    this.shoot = new Image;

    this.mainMenu.src = "resources/main_menu.png";
    this.left.src = "resources/pointleft.png";
    this.right.src = "resources/pointright.png";
    this.jump.src = "resources/jumpImg.png";
    this.duck.src = "resources/duckImg.png";
    this.shoot.src = "resources/shootImg.png";

    this.images = [];

    this.images.push(this.jump);
    this.images.push(this.duck);
    this.images.push(this.shoot);

    this.i = 0;

    this.clickDetection = new ClickDetection();
  }

  update()
  {
    if(this.clickDetection.isClicked())
    {
      if(this.checkCollisionBetween(this.clickDetection.getPosition(), 1620,700,200,200))
      {
        this.clickDetection.reset();
        gameGlobal.menuManager.setCurrentScene("Main Menu");
      }

      if(this.checkCollisionBetween(this.clickDetection.getPosition(), 300, 500, 200,200))
      {
        if(this.i === 0)
        {
          this.i = 2;
        }
        else
        {
          this.i--;
        }
        this.clickDetection.reset();
      }

      if(this.checkCollisionBetween(this.clickDetection.getPosition(), 1420, 500, 200,200))
      {
        if(this.i === 2)
        {
          this.i = 0;
        }
        else
        {
          this.i++;
        }
        this.clickDetection.reset();
      }
    }
  }

  render(ctx)
  {
    ctx.drawImage(this.mainMenu, 1620,700, 200,200);
    ctx.drawImage(this.left, 300,500,200,200);
    ctx.drawImage(this.right, 1420,500,200,200);
    ctx.drawImage(this.images[this.i], 600, 100, 600, 600);
  }

  checkCollisionBetween(clickPos, x,y,width,height)
  {
    var collides = false;
    if ((clickPos[0] < x + width) &&
     (clickPos[0] > x) &&
     (clickPos[1] < y + height) &&
     (clickPos[1] > y))
     {
       collides = true;
     }

     return collides;
  }
}
