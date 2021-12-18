import { ISpriteFramePosition } from 'src/ByteEightEngine/gears/Sprite/types';

/**
 * Represents all available drawing engines
 */
export enum Strategy {
  /**
   * Uses the default canvas engine to drawn thing on screen.
   */
  CANVAS = 'canvas',
}

/**
 * Represents a basic drawing engine, all strategies should follow this interface.
 */
export interface IDrawingEngine {
  /**
   * Method to setup the drawing engine.
   */
  setupEngine: () => Promise<void>;

  drawnSpriteOnCoordinates: (
    sprite: ISpriteFramePosition,
    x: number,
    y: number,
  ) => void;

  drawnSpriteOnMapPositions: (
    sprite: ISpriteFramePosition,
    x: number,
    y: number,
  ) => void;

  clear: () => void;

  drawnLayers: () => void;
}
