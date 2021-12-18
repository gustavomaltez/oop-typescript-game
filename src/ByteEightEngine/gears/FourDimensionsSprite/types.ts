import { Sprite } from '..';

export enum SpritePosition {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}

export type IFourDimensionsSprites = {
  [key in SpritePosition]: Sprite;
};
