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

    this.play.src = "resources/play_placeholder.png";
    this.howToPlay.src = "resources/help_placeholder.png";
    this.tutorial.src = "resources/Tutorial_placeholder.png";
    this.options.src = "resources/settings_placeholder.png";
    this.exit.src = "resources/quit_placeholder.png";
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

    console.log("rendering main menu");

  }
}
