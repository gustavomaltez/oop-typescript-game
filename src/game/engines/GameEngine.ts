import { IDrawnEngine } from "@engines";

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
