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

     this.projectile;

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

     this.projectile = new EnemyBullet(this.canvas, this.context, this.projectileImgOne, 3);


     console.log("Initialising game world");
     this.update();
   }

   /*
    *
    */
   update()
   {
     gameGlobal.game.draw();

     gameGlobal.game.projectile.update();

     window.requestAnimationFrame(gameGlobal.game.update);
   }

   /*
    *
    */
   draw()
   {
     this.context.clearRect(0, 0, gameGlobal.game.canvas.width, gameGlobal.game.canvas.height);

     gameGlobal.game.projectile.draw();
   }

 }
