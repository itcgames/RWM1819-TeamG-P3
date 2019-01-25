class Licence
{
  constructor()
  {
    this.count = 0;
    this.image = new Image();

    this.image.src = "resources/splash_screen.png";
  }

  update()
  {
    this.count++;
    if(this.count > 300)
    {
       gameGlobal.menuManager.setCurrentScene("Main Menu");
    }
  }

  render(ctx)
  {
    ctx.drawImage(this.image, 0,0,ctx.canvas.width,ctx.canvas.height);
  }
}
