import { UnableToLoadAssets } from '@errors';
import { Logger, Service } from '@logger';
import {
  IAssetsData,
  IAssetsSettings,
  ILoadedSpriteAssetEntry,
  ISpriteAssetEntry,
} from './types';

/**
 * Abstraction to load assets and makes it usable
 */
class AssetsEngine {
  private settings: IAssetsSettings;

  private isLoaded: boolean;

  private assets: IAssetsData;

  constructor(settings: IAssetsSettings) {
    this.settings = settings;
    this.isLoaded = false;
    this.assets = {
      audios: [],
      sprites: [],
    };
  }

  public loadAllAssets = async () => {
    Logger.info(Service.ASSETS_ENGINE, `Loading all game assets...`);

    if (this.isLoaded) {
      Logger.error(
        Service.ASSETS_ENGINE,
        `Unable to load assets! All assets already are loaded.`,
      );
      throw new UnableToLoadAssets(`All assets already are loaded.`);
    }
    await this.loadAudioAssets();
    await this.loadSpritesAssets();

    this.isLoaded = true;
    Logger.info(
      Service.ASSETS_ENGINE,
      `All assets have been successfully loaded! Ready to use it!`,
    );
  };

  /**
   * Loads all audio assets.
   */
  private loadAudioAssets = async () => {
    Logger.info(Service.ASSETS_ENGINE, `Loading audio assets...`);
    // TODO: Implements logic to load audio assets and connects it into audio engine.
    Logger.info(Service.ASSETS_ENGINE, `Finished audio assets loading!`);
  };

  private loadAudio = () => {};

  /**
   * Loads all image assets.
   */
  private loadSpritesAssets = async () => {
    Logger.info(Service.ASSETS_ENGINE, `Loading sprites assets...`);

    const spritesToLoad = this.settings.sprites;
    const rounds = this.settings.loadingRounds;

    const loadedSprites: ILoadedSpriteAssetEntry[] = [];

    const loadingPromise = new Promise<void>(resolve => {
      spritesToLoad.forEach(async (sprite, index) => {
        let loadingAttempts = 1;
        const isLastSpriteToLoad = index + 1 === spritesToLoad.length;

        while (loadingAttempts <= rounds) {
          try {
            Logger.info(
              Service.ASSETS_ENGINE,
              `Trying to load sprite with id "${sprite.id}". Attempts: ${loadingAttempts}/${rounds}`,
            );

            const loadedSprite = await this.loadSprite(sprite);
            loadedSprites.push(loadedSprite);

            Logger.info(
              Service.ASSETS_ENGINE,
              `Sprite with id "${sprite.id}" loaded successfully. Attempts: ${loadingAttempts}/${rounds}`,
            );
            break;
          } catch {
            loadingAttempts += 1;
            Logger.error(
              Service.ASSETS_ENGINE,
              `Could not load sprite with id "${sprite.id}" located on "${sprite.path}".
                Attempts: ${loadingAttempts}/${rounds}`,
            );
          }
        }

        if (isLastSpriteToLoad) {
          this.assets = {
            ...this.assets,
            sprites: loadedSprites,
          };
          Logger.info(
            Service.ASSETS_ENGINE,
            `Finished sprites assets loading!`,
          );
          resolve();
        }
      });
    });

    return loadingPromise;
  };

  /**
   * Loads a sprite.
   *
   * @param {ISpriteAssetEntry} sprite The sprite data to load.
   * @returns {Promise<ILoadedSpriteAssetEntry>} The loading sprite promise.
   */
  private loadSprite = async (
    sprite: ISpriteAssetEntry,
  ): Promise<ILoadedSpriteAssetEntry> => {
    const promise = new Promise<ILoadedSpriteAssetEntry>((resolve, reject) => {
      const image = new Image();
      image.src = sprite.path;

      image.onload = () => {
        const loadedTexture: ILoadedSpriteAssetEntry = {
          ...sprite,
          data: image,
        };

        resolve(loadedTexture);
      };

      image.onerror = () => {
        reject();
      };
    });

    return promise;
  };
}

export default AssetsEngine;
