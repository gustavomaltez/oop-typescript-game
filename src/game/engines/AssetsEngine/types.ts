/**
 * Represents a base asset entry.
 */
interface IBaseAssetEntry {
  /**
   * Asset id (it will be used to get this asset later)
   */
  id: string;

  /**
   * Asset path. It should be the asset path inside assets folder.
   *
   * e.g: './assets/textures/my_texture.png'
   */
  path: string;
}

/**
 * Represents an audio asset entry.
 */
export type IAudioAssetEntry = IBaseAssetEntry;

/**
 * Represents a LOADED audio asset entry.
 */
export interface ILoadedAudioAssetEntry extends IAudioAssetEntry {
  /**
   * The audio data loaded into an HTML Audio Element.
   */
  data: HTMLAudioElement;
}

/**
 * Represents a sprite asset entry.
 */
export interface ISpriteAssetEntry extends IBaseAssetEntry {
  /**
   * The sprite dimensions
   *
   * NOTE: All sprites are squared (it means w = spriteSize and h = spriteSize).
   * IMPORTANT: All sprites should be in a single row, due the architecture choices.
   */
  spriteSize: number;

  /**
   * How many sprites are contained in this asset.
   */
  spriteCount: number;
}

/**
 * Represents a LOADED sprite asset entry.
 */
export interface ILoadedSpriteAssetEntry extends ISpriteAssetEntry {
  /**
   * The sprite data loaded into an HTML Image Element.
   */
  data: HTMLImageElement;
}

/**
 * Represents the assets configuration object
 */
export interface IAssetsSettings {
  /**
   * List of audio assets.
   */
  audios: IAudioAssetEntry[];

  /**
   * List of image assets.
   */
  sprites: ISpriteAssetEntry[];

  /**
   * Sometimes some assets could not be loaded correctly, this value indicates the
   * percentage of assets loaded should be safe to start the game.
   *
   * e.g: 0.8: If more than 20% of all assets could not be loaded will throw an
   * error.
   *
   * It's recommended always use values greater than 0.9 to always make sure to
   * load all assets.
   *
   * MUST BE A NUMBER BETWEEN 0 and 1.
   */
  acceptableLoadPercentage: number;

  /**
   * The number of times to try to load some asset.
   *
   * It's recommended use values lesser than 5, to do not take so much time to
   * load all assets.
   */
  loadingRounds: number;
}

/**
 * Represents the underlying loaded assets data
 */
export interface IAssetsData {
  /**
   * List of loaded audio assets.
   */
  readonly audios: ILoadedAudioAssetEntry[];

  /**
   * List of loaded image assets.
   */
  readonly sprites: ILoadedSpriteAssetEntry[];
}
