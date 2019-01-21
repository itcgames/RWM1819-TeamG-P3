/**
 * main is the entry point for Javascript programs.
 *
 */

 //
 //
 //
 // C00204076
 // Brandon Seah-Dempsey
 // Started at 15:55 21 January 2019
 // Finished at
 // Time taken:
 // Known bugs:

 var gameGlobal = {};

 /*
  *
  */
 function main()
 {
   var game = new Game();
	 gameGlobal.game = game;
   game.initWorld();
 }
