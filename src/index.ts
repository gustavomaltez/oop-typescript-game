import DrawnEngineManager from "./game/engines/DrawnEngine/DrawnEngine";
import { Strategy } from "./game/engines/DrawnEngine/types";
import GameEngine from "./game/engines/GameEngine";

/**
 * Code to be executed once the browser loads
 *
 * - Loads all needed engines, injects those engines on game engine and starts
 * loading the game engine itself.
 */
window.onload = async () => {
  const drawnEngineManager = new DrawnEngineManager(Strategy.CANVAS);
  const drawnEngine = await drawnEngineManager.loadEngine();

  const gameEngine = new GameEngine(drawnEngine);
}
