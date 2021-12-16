import { IAudioAssetEntry } from '@byte-eight-engine/engines';
import gameSongs from './songs';
import gameSoundEffects from './sounds';

/**
 * Represents all audios that will be available during the game.
 */
const audiosSettings: IAudioAssetEntry[] = [...gameSongs, ...gameSoundEffects];

export default audiosSettings;
