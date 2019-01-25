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
     gameGlobal.menuManager = new MenuManager();

    gameGlobal.menuManager.addScene("Licence", new Licence());
    gameGlobal.menuManager.addScene("Main Menu", new MainMenu());
    gameGlobal.menuManager.addScene("Help", new Help());
    gameGlobal.menuManager.addScene("Tutorial", new Tutorial());
    gameGlobal.menuManager.addScene("Options", new Options());
    gameGlobal.menuManager.addScene("Play", new Play());

    gameGlobal.menuManager.setCurrentScene("Main Menu");

    gameGlobal.tutorial;

   }

   /*
    *
    */
   initWorld()
   {
     var that = this;

     this.canvas = document.getElementById("canvas");
     this.context = this.canvas.getContext("2d");

     console.log("Initialising game world");
     this.update();
   }

   /*
    *
    */
   update()
   {
     var that = this;

     gameGlobal.menuManager.update();

     gameGlobal.game.draw();

     window.requestAnimationFrame(gameGlobal.game.update);
   }

   /*
    *
    */
   draw()
   {
     gameGlobal.menuManager.draw(gameGlobal.game.context);
     //this.context.clearRect(0, 0, gameGlobal.game.canvas.width, gameGlobal.game.canvas.height);
   }

 }
