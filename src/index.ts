import {
  DrawingEngineManager,
  GameEngine,
  IGameSettings,
  Strategy,
} from '@engines';

/**
 * Code to be executed once the browser loads
 *
 * - Loads all needed engines, injects those engines on game engine and starts
 * loading the game engine itself.
 */
window.onload = async () => {
  const gameSettings: IGameSettings = {
    dimensions: {
      height: 640,
      width: 640,
    },
    spriteSize: 64,
  };

  const drawnEngineManager = new DrawingEngineManager(Strategy.CANVAS);
  const drawnEngine = drawnEngineManager.loadEngine();

  const gameEngine = new GameEngine(drawnEngine, gameSettings);
  gameEngine.loadGame();
};
