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
   constructor(texture, duckingText, blankText, bulletTexture, projectile, obstacle)
   {
     this.x = 580;
     this.y = 600;
     //
     this.velY = 0;
     this.gravity = 0.5;
     //
     this.mainTexture = texture;
     this.duckingTexture = duckingText;
     this.blankTexture = blankText;
     this.texture = this.mainTexture;
     //
     this.bullet = new PlayerBullet(bulletTexture, 50, 250, 12);
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
     //
     this.iFrameTime = 0;
     //
     this.invincibilityTime =0;
     //
     this.imageType = 1;
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

       this.iFrames();

       //
       if(this.hits <= 0)
       {
         this.active = false;
       }

       this.score++;
     }
   }

   getHits()
   {
     return this.hits;
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
     if(this.jumping === true)
     {
       //
       this.velY += this.gravity;
       this.y += this.velY;
       //
       if(this.y > 600)
       {
         //
         this.y = 600;
         //
         this.jumping = false;
       }
     }

   }

   /*
    *
    */
   duck(that)
   {
     //
     if(that.ducking === true)
     {
       this.texture = this.duckingTexture;
     }
     //
     else
     {
       this.texture = this.mainTexture;
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
     if(event.keyCode === 83)
     {
       this.ducking = true;
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

   enemyBulletCollision(bullet, nextEvent)
   {
     if(this.active === true && bullet.active === true && this.knockeddown === false && this.ducking === false)
     {
       //
        if((this.x < bullet.x + (bullet.texture.width - 190) &&
            this.x + this.texture.width > bullet.x &&
            this.y < bullet.y + (bullet.texture.height - 190) &&
            this.y + this.texture.height > bullet.y) ||
           (this.x < bullet.x + bullet.texture.width &&
               this.x + this.texture.width > bullet.x &&
               this.y < bullet.y + bullet.texture.height &&
               this.y + this.texture.height > bullet.y))
            {
              console.log("Hit!");
              nextEvent = true;
              this.hits -= 1;
              this.knockeddown = true;
              bullet.active = false;
            }// End if
        }
    }

   /*
    *
    */
   obstacleCollision(obstacle, nextEvent)
   {
     if(this.active === true && obstacle.active === true && this.knockeddown === false)
     {
        //
        if((this.x < obstacle.x + (obstacle.texture.width - 180) &&
            this.x + this.texture.width > obstacle.x &&
            this.y < obstacle.y + (obstacle.texture.height - 150) &&
            this.y + this.texture.height > obstacle.y) ||
            (this.x < obstacle.x + (obstacle.texture.width - 180) &&
            this.x + this.texture.width > obstacle.x &&
            this.y < obstacle.y + (obstacle.texture.height -180) &&
            this.y + this.texture.height > obstacle.y))
         {
           console.log("Collide!")
           nextEvent = true;
           this.hits -= 1;
           this.knockeddown = true;
         }// End if
       }// End if
   }

   /*
    *
    */
   draw(ctx)
   {
     if(this.active === true)
     {

       ctx.drawImage(this.texture, this.x, this.y, this.texture.width, this.texture.height);
       this.bullet.draw(ctx);
     }

     ctx.fillStyle = "black";
     ctx.font = "30px Verdana";
     ctx.fillText("Score: " + this.score, 100, 780);
     ctx.fillText("Lives: " + this.hits, 1450, 780);
   }

   /*
    *
    */
   iFrames()
   {
     if(this.knockeddown === true)
     {
       //
       this.invincibilityTime++;
       //
       this.iFrameTime++;

       console.log("Invince Time: " + this.invincibilityTime);
       console.log("iFrame Time: " + this.iFrameTime);

       if(this.imageType === 1)
       {
         this.texture = this.mainTexture;
       }
       else if(this.imageType === -1)
       {
         this.texture = this.blankTexture;
       }

       //
       if(this.invincibilityTime >= 20)
       {
         this.imageType *= -1;
         this.invincibilityTime =0;
       }// End if

       //
       if(this.iFrameTime >= 125)
       {
         this.iFrameTime = 0;
         this.knockeddown = false;
       }// End if
     }// End if


     else if(this.knockeddown == false)
     {
       this.imageType = 1;
       this.invincibilityTime = 0;
       this.iFrameTime = 0;
     }
   }

   setLives(newLives)
   {
     this.hits = newLives;
   }

 }
