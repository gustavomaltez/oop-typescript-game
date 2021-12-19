import { UnableToLoadAssets } from '@byte-eight-engine/errors';
import { Logger, Service } from '@byte-eight-engine/logger';
import AudioLoader from './AudioLoader';
import SpriteLoader from './SpriteLoader';
import { IAssetsData, IAssetsSettings, ILoadedSpriteAssetEntry } from './types';

/**
 * Abstraction to load assets and lets it available during the game
 */
class AssetsEngine {
  private spriteLoader: SpriteLoader;

  private audioLoader: AudioLoader;

  private isLoaded: boolean;

  public assets: IAssetsData;

  constructor(settings: IAssetsSettings) {
    this.isLoaded = false;

    this.spriteLoader = new SpriteLoader(
      settings.sprites,
      settings.loadingRounds,
    );

    this.audioLoader = new AudioLoader(settings.audios, settings.loadingRounds);

    this.assets = {
      audios: [],
      sprites: [],
    };
  }

  /**
   * Loads the sprites and audios.
   */
  public loadAllAssets = async () => {
    Logger.info(Service.ASSETS_ENGINE, `Loading all game assets...`);

    if (this.isLoaded) {
      Logger.error(
        Service.ASSETS_ENGINE,
        `Unable to load assets! All assets already are loaded.`,
      );
      throw new UnableToLoadAssets(`All assets already are loaded.`);
    }

    const loadedAudios = await this.audioLoader.loadAll();
    const loadedSprites = await this.spriteLoader.loadAll();

    this.assets = {
      audios: loadedAudios,
      sprites: loadedSprites,
    };

    this.isLoaded = true;
    Logger.info(
      Service.ASSETS_ENGINE,
      `All assets have been successfully loaded! Ready to use it!`,
    );
  };

  /**
   * Returns a specific loaded sprite by id.
   *
   * @param {string} id The sprite's id to retrieve.
   * @returns {ILoadedSpriteAssetEntry} The loaded sprite
   */
  public getSpriteById = (id: string): ILoadedSpriteAssetEntry => {
    if (!this.isLoaded)
      throw new Error("assets isn't loaded yet, please load it");

    const sprite = this.assets.sprites.find(item => item.id === id);

    if (!sprite) throw new Error(`Unable to find sprite with id ${id}`);

    return sprite;
  };
}

export default AssetsEngine;
