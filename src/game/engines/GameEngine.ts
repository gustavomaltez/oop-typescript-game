import { IDrawingEngine } from "@engines";

/**
 * Represents a base game engine
 */
class GameEngine {
  private drawnEngine: IDrawingEngine;

  constructor(drawnEngine: IDrawingEngine) {
    this.drawnEngine = drawnEngine;
  }
}

export default GameEngine;
