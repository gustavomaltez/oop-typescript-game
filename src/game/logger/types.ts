/**
 * Represents all available services to log data into console.
 */
export enum Service {
  GAME_ENGINE = 'gameEngine',
  CANVAS_LOADER = 'canvasLoader',
  CANVAS_STRATEGY = 'canvasStrategy',
  DRAWN_ENGINE_MANAGER = 'drawningEngineManager',
  CANVAS_CONTEXT_LOADER = 'canvasContextLoader',
}

export type ServiceLogColor = {
  [key in Service]: string;
};
