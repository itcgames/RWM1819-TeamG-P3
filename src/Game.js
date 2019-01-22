/**
 *
 *
 */

 //
 //
 //
 // C00204076
 // Brandon Seah-Dempsey
 // Started at 15:56 21 January 2019
 // Finished at
 // Time taken:
 // Known bugs:

 /*
  *
  */
 class Game
 {
   /*
    *
    */
   constructor()
   {
     this.canvas = null;
     this.context = null;

     //
     this.bullet = new PlayerBullet();
     this.projectile = new EnemyBullet();
     //
     this.bulletImg = new Image();
     this.bulletImg.src = "resources/images/PBullet.png"
     //
     this.projectileImgOne = new Image();
     this.projectileImgOne.src = "resources/images/Bullet.png"
   }

   /*
    *
    */
   initWorld()
   {
     var that = this;

     this.canvas = document.getElementById("canvas");
     this.context = this.canvas.getContext("2d");

     this.bullet = new PlayerBullet(this.canvas, this.context, this.bulletImg, 50, 250, 12);
     this.projectile = new EnemyBullet(this.canvas, this.context, this.projectileImgOne, 3);


     console.log("Initialising game world");
     this.update();
   }

   /*
    *
    */
   update()
   {
     var that = this;

     gameGlobal.game.draw();

     gameGlobal.game.bullet.update();
     gameGlobal.game.projectile.update();
     gameGlobal.game.bullet.enemyBulletCollision(gameGlobal.game.projectile);

     window.requestAnimationFrame(gameGlobal.game.update);
   }

   /*
    *
    */
   draw()
   {
     this.context.clearRect(0, 0, gameGlobal.game.canvas.width, gameGlobal.game.canvas.height);

     gameGlobal.game.bullet.draw();
     gameGlobal.game.projectile.draw();
   }

 }
