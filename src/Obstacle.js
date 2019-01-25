/**
 *
 *
 */

 //
 //
 //
 // C00204076
 // Brandon Seah-Dempsey
 // Started at 14:18 23 January 2019
 // Finished at
 // Time taken:
 // Known bugs:

 /*
  *
  */
 class Obstacle
 {
   /*
    *
    */
   constructor(texture, type)
   {
     //
     this.x = 0;
     this.y = 0;
     //
     this.velX = 8;
     //
     this.texture = texture;
     //
     this.type = type;
     //
     this.active = true;
     this.collided = false;
     //
     this.setValues();
   }

   /*
    *
    */
   update(e)
   {
     var that = this;

     if(this.active === true)
     {
       this.move(that, this.x, this.velX, this.active);
       this.resetX();
     }
   }

   /*
    *
    */
   move(that, x, velX, active)
   {
     if(that.active === true)
     {
       that.x -= that.velX
     }
   }

   /*
    *
    */
   draw(ctx)
   {
     if(this.active === true)
     {
       //
       if(this.type === 1)
       {
         ctx.drawImage(this.texture, this.x, this.y, this.texture.width - 180, this.texture.height - 150);
       }
       //
       if(this.type === 2)
       {
        ctx.drawImage(this.texture, this.x, this.y, this.texture.width - 180, this.texture.height - 180);
       }

     }
   }

   /*
    *
    */
   setValues()
   {
     //Cactus Obstacle
     if(this.type === 1)
     {
       //
       this.x = 1950;
       this.y = 592;
     }
     //Chest Obstacle
     else if(this.type === 2)
     {
       //
       this.x = 1950;
       this.y = 605;
     }
     //
     this.active = true;
   }

   /*
    *
    */
   resetPosition(x, y, active)
   {
     //
     if(this.type === 1)
     {

     }
     //
     else if(this.type === 2)
     {

     }
     //
     else if (this.type === 3)
     {

     }

     this.active = active;
   }

   resetX()
   {
    if(this.x <= -125)
    {
      //
      if(this.type === 1)
      {
        this.x = 1950;
        this.y = 592;
      }
      //
      else if(this.type === 2)
      {
        //
        this.x = 1950;
        this.y = 605;
      }
    }
   }


 }
