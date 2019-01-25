/**
 *
 *
 */

 //
 //
 //
 // C00204076
 // Brandon Seah-Dempsey
 // Started at 9:21 22 January 2019
 // Finished at
 // Time taken:
 // Known bugs:

 /*
  *
  */
 class EnemyBullet
 {
   /*
    *
    */
   constructor(canvas, context, texture, type)
   {
     //
     this.canvas = canvas;
     this.context = context;

     //
     this.x = 500;
     this.y = 500;
     //
     this.velX = 0;
     this.velY = 0;
     //
     this.speed = 0;
     this.angle = 0.0;
     this.gravity = 0.5;
     this.bounceFactor = 0.9;
     //
     this.texture = texture;
     //
     this.type = type;
     //
     this.applyVel = false;
     this.applyGrav = false;
     this.applyBoun = false;
     //
     this.active = true;
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
       this.applyVelocity(that, this.speed, this.angle, this.velX, this.velY, this.x, this.y, this.applyVel);
       this.applyGravity(that, this.velY, this.y, this.gravity, this.applyGrav);
       this.applyBounce(that, this.velX, this.velY, this.x, this.y, this.applyBoun, this.bounceFactor);
     }

     this.resetBullet();
   }

   /*
    *
    */
   draw()
   {
     if(this.active === true)
     {
       this.context.drawImage(this.texture, this.x, this.y, this.texture.width, this.texture.height);
     }
   }

   /*
    *
    */
   applyVelocity(that, speed, angle, velX, velY, x, y, applyVel)
   {
     if(that.applyVel === true)
     {
       that.speed = Math.sqrt((that.velX * that.velX) + (that.velY * that.velY));
       that.angle = Math.atan2(that.velY, that.velX);

       that.velX = Math.cos(that.angle) * that.speed;
       that.velY = Math.sin(that.angle) * that.speed;

       that.x += that.velX;
       that.y += that.velY;

       //console.log(that.x);
     }

   }

   /*
    *
    */
   applyGravity(that, velY, y, gravity, applyGrav)
   {
     if(that.applyGrav === true)
     {
       that.velY += that.gravity;
       that.y += that.velY;
     }
   }

   /*
    *
    */
   applyBounce(that, velX, velY, x, y, applyBoun, bounceFactor)
   {
     if(that.applyBoun === true)
     {
       if(that.y >= 630)
       {
         that.velY *= -that.bounceFactor;
       }
     }
   }

   /*
    *
    */
   setValues()
   {
     //
     if(this.type === 1)
     {
       //
       this.x = 1960;
       this.y = 575;
       //
       this.velX = -5;
       this.velY = 0;
       //
       this.applyVel = true;
       this.applyGrav = false;
       this.applyBoun = false;
     }
     //
     else if(this.type === 2)
     {
       //
       this.x = -60;
       this.y = 575;
       //
       this.velX = 5;
       this.velY = 0;
       //
       this.applyVel = true;
       this.applyGrav = false;
       this.applyBoun = false;
     }
     //
     else if (this.type === 3)
     {
       //
       this.x = 1980;
       this.y = 225;
       //
       this.velX = -8;
       this.velY = -9;
       //
       this.applyVel = true;
       this.applyGrav = true;
       this.applyBoun = true;
     }
     //
     else if (this.type === 4)
     {
       //
       this.x = 2000;
       this.y = 190;
       //
       this.velX = -8;
       this.velY = -9;
       //
       this.applyVel = true;
       this.applyGrav = true;
       this.applyBoun = true;
     }
   }

   resetBullet()
   {
     if((this.x <= -60 || this.x >= 2010)|| this.active === false)
     {
       this.setValues();
     }
   }

   /*
    *
    */
   respawnBullet(x, y, active, type)
   {
     this.x = x;
     this.y = y;
     this.active = active;
     this.type = type;

     this.setValues();
   }
 }
