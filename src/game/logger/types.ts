/**
 * Represents all available services to log data into console.
 */
export enum Service {
  GAME_ENGINE = "gameEngine",
  DRAWN_ENGINE_MANAGER = "drawnEngineManager",
  CANVAS_LOADER = "canvasLoader",
  CANVAS_CONTEXT_LOADER = "canvasContextLoader",
  CANVAS_STRATEGY = "canvasStrategy",
}

export type ServiceLogColor = {
  [key in Service]: string;
}

