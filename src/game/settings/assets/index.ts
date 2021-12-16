import { IAssetsSettings } from '@byte-eight-engine/engines';
import audiosSettings from './audios';
import spritesSettings from './sprites';

/**
 * Represents all information about audios and sprites to load.
 */
const assetsSettings: IAssetsSettings = {
  audios: audiosSettings,
  sprites: spritesSettings,
  loadingRounds: 3,
};

export { assetsSettings };
