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
   * IMPORTANT: All sprites must be in a single row, due the architecture choices.
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
   * List of sprites assets.
   */
  sprites: ISpriteAssetEntry[];

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
