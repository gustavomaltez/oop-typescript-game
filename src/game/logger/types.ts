/**
 * Represents all available services to log data into console.
 */
export enum Service {
  GAME_ENGINE = 'Game Engine',
  CANVAS_LOADER = 'Canvas Loader',
  CANVAS_STRATEGY = 'Canvas Strategy',
  DRAWN_ENGINE_MANAGER = 'Drawing Engine Manager',
  CANVAS_CONTEXT_LOADER = 'Canvas Context Loader',
}

export type ServiceLogColor = {
  [key in Service]: string;
};
