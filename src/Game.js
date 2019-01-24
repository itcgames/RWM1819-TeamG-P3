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
     this.player = new Player();
     this.projectile = new EnemyBullet();
     this.obstacle = new Obstacle();
     //
     this.playerImg = new Image();
     this.playerImg.src = "resources/images/Player.png";
     //
     this.bulletImg = new Image();
     this.bulletImg.src = "resources/images/PBullet.png";
     //
     this.projectileImgOne = new Image();
     this.projectileImgOne.src = "resources/images/Bullet.png";
     //
     this.obstacleImgOne = new Image();
     this.obstacleImgOne.src = "resources/images/Cactus.png"
     //
     this.obstacleImgTwo = new Image();
     this.obstacleImgTwo.src = "resources/images/Chest.png"
     //
     this.gameEvent = 1;
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
     this.obstacle = new Obstacle(this.canvas, this.context, this.obstacleImgOne, 1);
     this.player = new Player(this.canvas, this.context, this.playerImg, this.bulletImg, this.projectile, this.obstacle);


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
     gameGlobal.game.projectile.update();
     gameGlobal.game.player.update();
     gameGlobal.game.obstacle.update();


     window.requestAnimationFrame(gameGlobal.game.update);
   }

   /*
    *
    */
   draw()
   {
     this.context.clearRect(0, 0, gameGlobal.game.canvas.width, gameGlobal.game.canvas.height);

     gameGlobal.game.player.draw();
     gameGlobal.game.projectile.draw();
     gameGlobal.game.obstacle.draw();
   }

 }
