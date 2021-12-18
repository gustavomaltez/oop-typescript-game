import FourDimensionsSprite from '../FourDimensionsSprite/FourDimensionsSprite';
import { SpritePosition } from '../FourDimensionsSprite/types';

export type ICharacterTriggerKeys = {
  [key in SpritePosition]: string[];
};

export interface ICharacterSprites {
  triggerKeys: ICharacterTriggerKeys;
  sprites: {
    walk: FourDimensionsSprite;
    idle: FourDimensionsSprite;
    [key: string]: FourDimensionsSprite;
  };
}
