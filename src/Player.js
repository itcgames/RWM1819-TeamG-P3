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
 class Player
 {
   /*
    *
    */
   constructor(canvas, context, texture, bulletTexture, projectile, obstacle)
   {
     //
     this.canvas = canvas;
     this.context = context;
     //
     this.x = 700;
     this.y = 600;
     //
     this.velY = 0;
     this.gravity = 0.5;
     //
     this.mainTexture;
     this.texture = texture;
     //
     this.bullet = new PlayerBullet(this.canvas, this.context, bulletTexture, 50, 250, 12);
     //
     this.active = true;
     //
     this.jumping = false;
     this.ducking = false;
     this.shooting = false;
     this.knockeddown = false;
     //
     this.hits = 4;
     this.score = 0;
     //
     this.projectile = projectile;
     this.obstacle = obstacle;
   }

   /*
    *
    */
   update(e)
   {
     var that = this;

     //
     if(this.active === true)
     {
       //
       document.addEventListener("keydown", this.controlInput.bind(this));
       //
       this.shoot(that);
       this.jump(that);
       this.duck(that);

       //
       if(this.bullet.active === true)
       {
         this.bullet.enemyBulletCollision(this.projectile);
       }
       //
       if(this.obstacle.active === true)
       {
         this.obstacleCollision(this.obstacle);
       }

       //
       if(this.hits <= 0)
       {
         this.active = false;
       }
     }
   }

   /*
    *
    */
   shoot(that)
   {
     if(that.shooting === true)
     {
       that.bullet.update();
     }
   }

   /*
    *
    */
   jump(that, y, velY, gravity)
   {

     //console.log(that.jumping);
     //
     if(that.jumping === true)
     {
       //
       that.velY += that.gravity;
       that.y += that.velY;
       //
       if(that.y > 600)
       {
         //
         that.y = 600;
         //
         that.jumping = false;
       }
     }

   }

   /*
    *
    */
   duck(that)
   {
     if(that.ducking === true)
     {

     }
   }

   controlInput(e)
   {
     // W key is pressed
     if(event.keyCode === 87 && this.jumping === false)
     {
       this.jumping = true;
       this.velY = -16;
       console.log("W");
     }

     // S key is pressed
     if(event.keyCode === 83 && this.ducking === false)
     {
       this.ducking = true;
       console.log("S");
     }
     else
     {
       this.ducking = false;
     }

     // Space key is pressed
     if(event.keyCode === 32 && this.bullet.active === false)
     {
       this.shooting = true;
       this.bullet.respawnBullet(this.x, this.y, true);
       console.log("Space")
     }
   }

   enemyBulletCollision(bullet)
   {
     if(this.active === true && bullet.active === true && this.knockeddown === false)
     {

       if(this.x < bullet.x + bullet.texture.width &&
          this.x + this.texture.width > bullet.x &&
          this.y < bullet.y + bullet.texture.height &&
          this.y + this.texture.height > bullet.y)
       {


         //this.hits -= 1;
         this.knockeddown = true;
         bullet.active = false;
       }// End if
     }// End if
   }

   /*
    *
    */
   obstacleCollision(obstacle)
   {
     if(this.active === true && obstacle.active === true && this.knockeddown === false)
     {

       if(this.x < obstacle.x + obstacle.texture.width &&
          this.x + this.texture.width > obstacle.x &&
          this.y < obstacle.y + obstacle.texture.height &&
          this.y + this.texture.height > obstacle.y)
       {
         //console.log("Collide")
         //this.hits -= 1;
         this.knockeddown = true;
         this.obstacle.collided = true;

       }// End if
     }// End if
   }

   /*
    *
    */
   draw()
   {
     if(this.active === true)
     {
       this.context.drawImage(this.texture, this.x, this.y, this.texture.width, this.texture.height);
       this.bullet.draw();
     }
   }

 }
