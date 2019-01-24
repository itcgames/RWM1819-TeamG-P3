class ClickDetection
{
  constructor()
  {
    document.addEventListener("click", this.click.bind(this));

    this.x;
    this.y;
    this.clicked = false;
  }

  click(e)
  {
    this.x = e.clientX;
    this.y = e.clientY;

    this.clicked = true;
  }

  reset()
  {
    this.clicked = false;
    this.x = undefined;
    this.y = undefined;
  }

  getPosition()
  {
    return [this.x, this.y];
  }

  isClicked()
  {
    return this.clicked;
  }
}
