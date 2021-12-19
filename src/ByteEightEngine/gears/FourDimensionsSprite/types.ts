import { Sprite } from '..';

/**
 * Represents all available sprites positions.
 */
export enum SpritePosition {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}

/**
 * Represents the data to build a four dimensions sprite.
 */
export type IFourDimensionsSprites = {
  [key in SpritePosition]: Sprite;
};
