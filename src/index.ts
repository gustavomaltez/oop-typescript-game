import { DrawingEngineManager, GameEngine, Strategy } from '@engines'
import { Logger, Service } from '@logger';

/**
 * Code to be executed once the browser loads
 *
 * - Loads all needed engines, injects those engines on game engine and starts
 * loading the game engine itself.
 */
window.onload = async () => {
  const drawnEngineManager = new DrawingEngineManager(Strategy.CANVAS);
  const drawnEngine = await drawnEngineManager.loadEngine();

  const gameEngine = new GameEngine(drawnEngine);
}
