class ClickDetection
{
  constructor()
  {
    document.addEventListener("click", this.onClick.bind(this));

    this.posX;
    this.posY;
    this.clicked = false;
  }

  onClick(e)
  {
    this.posX = e.clientX;
    this.posY = e.clientY;

    this.clicked = true;
  }

  reset()
  {
    this.clicked = false;
    this.posX = undefined;
    this.posY = undefined;
  }

  getPosition()
  {
    return [this.posX, this.posY];
  }

  isClicked()
  {
    return this.clicked;
  }
}
