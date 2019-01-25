class Play
{
  constructor()
  {
    this.initialise();
  }

  initialise()
  {
    //
    this.player = new Player();
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

    this.bulletAttack = 1;
    this.eventTime = 210;

    //
    this.arrow = new EnemyBullet(this.projectileImgOne, 1);
    this.tomahawk = new EnemyBullet(this.projectileImgOne, 2);
    this.boulder = new EnemyBullet(this.projectileImgOne, 3);
    this.boulderTwo = new EnemyBullet(this.projectileImgOne, 4);
    //
    this.projectiles = [this.arrow, this.tomahawk, this.boulder, this.boulderTwo];
    //
    this.obstacle = new Obstacle(this.obstacleImgOne, 1);
    this.cactus = new Obstacle(this.obstacleImgOne, 1);
    this.chest = new Obstacle(this.obstacleImgTwo, 2);
    //
    this.obstacles = [this.cactus, this.chest];



    this.player = new Player(this.playerImg, this.bulletImg, this.projectiles[2], this.obstacle);
  }

  update()
  {

  this.player.update();
    //gameGlobal.game.obstacle.update();

    // One tomahawk Event
    if(this.bulletAttack === 1)
    {
      this.projectiles[0].update();
    }
    // One arrow Event
    if(this.bulletAttack === 2)
    {
      this.projectiles[1].update();
    }
    // One boulder Event
    if(this.bulletAttack === 3)
    {
      this.projectiles[2].update();
    }
    // One arrow and boulder Event
    if(this.bulletAttack === 4)
    {
      this.projectiles[0].update();
      this.projectiles[2].update();
    }
    // One cactus Event
    if(this.bulletAttack === 5)
    {
      this.obstacles[0].update();
    }
    // One chest Event
    if(this.bulletAttack === 6)
    {
      this.obstacles[1].update();
    }






    this.eventTime--;
    console.log(this.eventTime);

    //
    if(this.eventTime <= 0)
    {
      this.bulletAttack = Math.floor((Math.random() * 6) + 1);

      //
      for(var i = 0; i < 4; i++)
      {
        this.projectiles[i].setValues();
      }

      //
      for(var j = 0; j < 2; j++)
      {
        this.obstacles[j].setValues();
      }



      // One tomahawk Event
      if(this.bulletAttack === 1)
      {
        this.eventTime = 210;
      }
      // One arrow Event
      if(this.bulletAttack === 2)
      {
        this.eventTime = 210;
      }
      // One boulder Event
      if(this.bulletAttack === 3)
      {
        this.eventTime = 250;
      }
      // One arrow and boulder Event
      if(this.bulletAttack === 4)
      {
        this.eventTime = 210;
      }
      // One cactus Event
      if(this.bulletAttack === 5)
      {
        this.eventTime = 250;
      }
      // One chest Event
      if(this.bulletAttack === 6)
      {
        this.eventTime = 250;
      }
    }


    //
    for(var k = 0; k < 4; k++)
    {
      this.player.enemyBulletCollision(this.projectiles[k], this.eventTime);
      this.player.bullet.enemyBulletCollision(this.projectiles[k], this.eventTime);

      //
      if(this.player.bullet.enemyBulletCollision(this.projectiles[k], this.eventTime) === true)
      {
        this.player.addScore(100);
      }
    }
    //
    for(var l = 0; l < 2; l++)
    {
      this.player.obstacleCollision(this.obstacles[l], this.eventTime);
    }
  }

  render(ctx)
  {
    this.player.draw(ctx);

    //
    for(var i = 0; i < 4; i++)
    {
      this.projectiles[i].draw(ctx);
    }

    //
    for(var j = 0; j < 2; j++)
    {
      this.obstacles[j].draw(ctx);
    }
  }
}
