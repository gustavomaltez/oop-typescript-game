import FourDimensionsSprite from '../FourDimensionsSprite/FourDimensionsSprite';
import { SpritePosition } from '../FourDimensionsSprite/types';

/**
 * Represents a sequence of keys to moves the character
 */
export type ICharacterTriggerKeys = {
  [key in SpritePosition]: string[];
};

/**
 * Represents the character sprites data.
 */
export interface ICharacterSprites {
  triggerKeys: ICharacterTriggerKeys;
  sprites: {
    walk: FourDimensionsSprite;
    idle: FourDimensionsSprite;
    [key: string]: FourDimensionsSprite;
  };
}
