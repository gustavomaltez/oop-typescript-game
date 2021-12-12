import {
  AssetsEngine,
  DrawingEngineManager,
  GameEngine,
  Strategy,
} from '@engines';
import { assetsSettings, gameSettings } from '@settings';

/**
 * Code to be executed once the browser loads
 *
 * - Loads all needed engines, injects those engines on game engine and starts
 * loading the game engine itself.
 */
window.onload = async () => {
  const drawingEngineManager = new DrawingEngineManager(Strategy.CANVAS);
  const drawnEngine = drawingEngineManager.loadEngine();

  const assetsEngine = new AssetsEngine(assetsSettings);

  const gameEngine = new GameEngine(drawnEngine, assetsEngine, gameSettings);
  gameEngine.loadGame();
};
