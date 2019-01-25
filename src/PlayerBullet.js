/**
 *
 *
 */

 //
 //
 //
 // C00204076
 // Brandon Seah-Dempsey
 // Started at 13:13 22 January 2019
 // Finished at
 // Time taken:
 // Known bugs:

 /*
  *
  */
 class PlayerBullet
 {
   /*
    *
    */
   constructor(texture, x, y, velX)
   {
     //
     this.x = x;
     this.y = y;
     //
     this.velX = velX;
     this.velY = 0;
     //
     this.speed = 0;
     this.angle = 0.0;
     //
     this.texture = texture;
     //
     this.active = false;
   }

   /*
    *
    */
   update(e)
   {
     var that = this;

     this.applyVelocity(that, this.speed, this.angle, this.velX, this.velY, this.x, this.y);
   }

   /*
    *
    */
   draw(ctx)
   {
     if(this.active === true)
     {
       ctx.drawImage(this.texture, this.x, this.y, this.texture.width, this.texture.height);
     }
   }

   /*
    *
    */
   applyVelocity(that, speed, angle, velX, velY, x, y, active)
   {
     if(that.active === true)
     {
       that.speed = Math.sqrt((that.velX * that.velX) + (that.velY * that.velY));
       that.angle = Math.atan2(that.velY, that.velX);

       that.velX = Math.cos(that.angle) * that.speed;
       that.velY = Math.sin(that.angle) * that.speed;

       that.x += that.velX;
       that.y += that.velY;

       if(that.x >= 1950)
       {
         that.active = false;
       }
     }
   }

   /*
    *
    */
   enemyBulletCollision(bullet)
   {
     if(this.active === true && bullet.active === true)
     {

       if(this.x < bullet.x + bullet.texture.width &&
         this.x + this.texture.width > bullet.x &&
         this.y < bullet.y + bullet.texture.height &&
         this.y + this.texture.height > bullet.y)
       {
         this.active = false;
         bullet.active = false;
       }// End if
     }// End if
   }

   /*
    *
    */
   respawnBullet(x, y, active)
   {
     this.x = x;
     this.y = y;
     this.active = active;
   }


 }
