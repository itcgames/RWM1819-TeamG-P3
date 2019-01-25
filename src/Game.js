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
     //
     this.arrow = new EnemyBullet();
     this.tomahawk = new EnemyBullet();
     this.boulder = new EnemyBullet();
     this.boulderTwo = new EnemyBullet();
     this.projectiles = [4];
     //
     this.obstacle = new Obstacle();
     this.cactus = new Obstacle();
     this.chest = new Obstacle();
     this.obstacles= [2];
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
     this.obstacleImgOne.src = "resources/images/Cactus.png";
     //
     this.obstacleImgTwo = new Image();
     this.obstacleImgTwo.src = "resources/images/Chest.png";
     //
     this.bulletAttack = null;
     this.eventTime = null;
   }

   /*
    *
    */
   initWorld()
   {
     var that = this;

     this.canvas = document.getElementById("canvas");
     this.context = this.canvas.getContext("2d");

     this.bulletAttack = 1;
     this.eventTime = 0;


     this.projectile = new EnemyBullet(this.canvas, this.context, this.projectileImgOne, 3);
     //
     this.arrow = new EnemyBullet(this.canvas, this.context, this.projectileImgOne, 1);
     this.tomahawk = new EnemyBullet(this.canvas, this.context, this.projectileImgOne, 2);
     this.boulder = new EnemyBullet(this.canvas, this.context, this.projectileImgOne, 3);
     this.boulderTwo = new EnemyBullet(this.canvas, this.context, this.projectileImgOne, 4);
     //
     this.projectiles = [this.arrow, this.tomahawk, this.boulder, this.boulderTwo];
     //
     this.obstacle = new Obstacle(this.canvas, this.context, this.obstacleImgOne, 1);
     this.cactus = new Obstacle(this.canvas, this.context, this.obstacleImgOne, 1);
     this.chest = new Obstacle(this.canvas, this.context, this.obstacleImgTwo, 2);
     //
     this.obstacles = [this.cactus, this.chest];



     this.player = new Player(this.canvas, this.context, this.playerImg, this.bulletImg, this.projectiles[2], this.obstacle);


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
     //gameGlobal.game.projectiles[2].update();
     gameGlobal.game.player.update();
     gameGlobal.game.obstacle.update();

     // One arrow Event
     if(gameGlobal.game.bulletAttack === 1)
     {
       gameGlobal.game.projectiles[0].update();
     }
     // One tomahawk Event
     if(gameGlobal.game.bulletAttack === 2)
     {
       gameGlobal.game.projectiles[1].update();
     }
     // One boulder Event
     if(gameGlobal.game.bulletAttack === 3)
     {
       gameGlobal.game.projectiles[2].update();
     }
     // One arrow and boulder Event
     if(gameGlobal.game.bulletAttack === 4)
     {
       gameGlobal.game.projectiles[0].update();
       gameGlobal.game.projectiles[2].update();
     }

     gameGlobal.game.eventTime++;
     console.log(gameGlobal.game.eventTime);

     if(gameGlobal.game.eventTime >= 490)
     {
       gameGlobal.game.gameEvent = Math.floor((Math.random() * 4) + 1);
       gameGlobal.game.eventTime = 0;
     }

     window.requestAnimationFrame(gameGlobal.game.update);
   }

   /*
    *
    */
   draw()
   {
     this.context.clearRect(0, 0, gameGlobal.game.canvas.width, gameGlobal.game.canvas.height);

     gameGlobal.game.player.draw();
     //gameGlobal.game.projectiles[2].draw();

     //
     for(var i = 0; i < 4; i++)
     {
       gameGlobal.game.projectiles[i].draw();
     }

     gameGlobal.game.obstacle.draw();
   }

 }
