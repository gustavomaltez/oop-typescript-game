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

  /**
   * Drawn a sprite on map coordinates (the coordinates represents blocks on map)
   *
   * e.g: drawnSpriteOnCoordinates(sprite,10,10);
   */
  drawnSpriteOnCoordinates: (
    sprite: ISpriteFramePosition,
    x: number,
    y: number,
  ) => void;

  /**
   * Drawn a sprite on map positions (specific x and y pixels)
   *
   * e.g: drawnSpriteOnCoordinates(sprite,243,198);
   */
  drawnSpriteOnMapPositions: (
    sprite: ISpriteFramePosition,
    x: number,
    y: number,
  ) => void;

  /**
   * Remove all drawn items on screen.
   */
  clear: () => void;

  /**
   * Drawn each map block (could be useful to drawn sprites on map coordinates)
   */
  drawnLayers: () => void;
}
