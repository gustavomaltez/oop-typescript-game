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
    canvasSize: {
      columns: 20,
      rows: 20,
    },
    scale: 2,
    spriteSize: 16,
  };

  const drawingEngineManager = new DrawingEngineManager(Strategy.CANVAS);
  const drawnEngine = drawingEngineManager.loadEngine();

  const gameEngine = new GameEngine(drawnEngine, gameSettings);
  gameEngine.loadGame();
};
