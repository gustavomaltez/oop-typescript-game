/**
 * Represents a base asset entry.
 */
interface IBaseAssetEntry {
  /**
   * Asset id (it will be used to get this asset later)
   */
  readonly id: string;

  /**
   * Asset path. It should be the asset path inside assets folder.
   *
   * e.g: './assets/textures/my_texture.png'
   */
  readonly path: string;
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
  readonly data: HTMLAudioElement;
}

/**
 * Represent a 2d sprite dimensions.
 */
export interface ISpriteDimensions {
  /**
   * The width of each image in a sprite file.
   */
  readonly width: number;

  /**
   * The height of each image in a sprite file.
   */
  readonly height: number;
}

/**
 * Represents a sprite asset entry.
 */
export interface ISpriteAssetEntry extends IBaseAssetEntry {
  /**
   * The sprite dimensions
   *
   * IMPORTANT: All sprites must be in a single row, due the architecture choices.
   */
  readonly spriteDimensions: ISpriteDimensions;

  /**
   * How many sprites are contained in this asset.
   *
   * NOTE: If it's a single sprite use: "SINGLE_SPRITE"
   */
  readonly spriteCount: number | 'SINGLE_SPRITE';

  /**
   * Animation time in milliseconds.
   *
   * NOTE: If you don't want to use animations use "FREEZED" it will keep the
   * sprite freezed on the first sprite image
   */
  readonly animationTime: number | 'FREEZED';
}

/**
 * Represents a LOADED sprite asset entry.
 */
export interface ILoadedSpriteAssetEntry extends ISpriteAssetEntry {
  /**
   * The sprite data loaded into an HTML Image Element.
   */
  readonly data: HTMLImageElement;
}

/**
 * Represents the assets configuration object
 */
export interface IAssetsSettings {
  /**
   * List of audio assets.
   */
  readonly audios: IAudioAssetEntry[];

  /**
   * List of sprites assets.
   */
  readonly sprites: ISpriteAssetEntry[];

  /**
   * The number of times to try to load some asset.
   *
   * It's recommended use values lesser than 5, to do not take so much time to
   * load all assets.
   */
  readonly loadingRounds: number;
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
