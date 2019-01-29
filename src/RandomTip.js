class RandomTip
{
  /**
   * randomtip constructor.
   * Declares the tips location.
   */
  constructor(x,y)
  {
  	  this.x = x;
      this.y = y;
      this.count = 0;
      this.tip = this.randomTips();
  }

   /**
    * Function that updates the count and changes the tip string every 200 ticks *
    * */
   update()
   {
       this.count += 1;

       if (this.count >= 300) {
           this.tip = this.randomTips();
           this.count = 0;
       }
   }

   /**
    * Function that draws the tip's text.
    */
  draw(ctx)
  {
  	ctx.font = "30px Comic Sans MS";
  	ctx.fillStyle = "black";
  	ctx.textAlign = "center";
      ctx.fillText(this.tip, this.x, this.y);
  }

  generateRandomTip() {
      this.tip = this.randomTips();
  }

  /**
   * Function that randomly selects and returns tip from an array of tips.
   */
  randomTips()
  {
  	var tips = [
  		"TIP: press W to jump.",
  		"TIP: press S to duck.",
  		"TIP: press space to shoot.",
  		"TIP: jump over the cacti and chest",
  		"TIP: shoot or duck to avoid or destroy the projectiles.",
  		"TIP: run for as long as to can for a higher score.",
  		"TIP: if you're having trouble with the controls see the help screen.",
  		"TIP: you cant die in the tutorial. use it to get a feel of the game."
  	];

  	var tip = Math.floor(Math.random()*tips.length);

  	return tips[tip];
  }
}
