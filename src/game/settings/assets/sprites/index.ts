import { ISpriteAssetEntry } from '@byte-eight-engine/engines';
import miscSprites from './misc';
import playerSprites from './player';
import skeletonSprites from './skeleton';

/**
 * Represents all sprites that will be available during the game.
 */
const spritesSettings: ISpriteAssetEntry[] = [
  ...miscSprites,
  ...playerSprites.attack,
  ...playerSprites.walk,
  ...playerSprites.idle,
  ...skeletonSprites.walk,
  ...skeletonSprites.idle,
];

export default spritesSettings;
