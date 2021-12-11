import { IDrawnEngine } from "./DrawnEngine/types";

/**
 * Represents a base game engine
 */
class GameEngine {
  private drawnEngine: IDrawnEngine;

  constructor(drawnEngine: IDrawnEngine) {
    this.drawnEngine = drawnEngine;
  }
}

export default GameEngine;
