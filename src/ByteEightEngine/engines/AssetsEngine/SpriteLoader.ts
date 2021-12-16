import { Logger, Service } from '@byte-eight-engine/logger';
import { ILoadedSpriteAssetEntry, ISpriteAssetEntry } from './types';

/**
 * Represents an abstraction to load sprites.
 */
class SpriteLoader {
  private spritesToLoad: ISpriteAssetEntry[];

  private loadingRounds: number;

  constructor(sprites: ISpriteAssetEntry[], loadingRounds: number) {
    this.spritesToLoad = sprites;
    this.loadingRounds = loadingRounds;
  }

  /**
   * Loads all provided sprites.
   *
   * @returns {ILoadedSpriteAssetEntry[]} A list with all loaded sprites.
   */
  public loadAll = async (): Promise<ILoadedSpriteAssetEntry[]> => {
    Logger.info(Service.ASSETS_ENGINE, `Loading sprites assets...`);

    if (this.spritesToLoad.length === 0) return Promise.resolve([]);

    const loadingPromise = new Promise<ILoadedSpriteAssetEntry[]>(resolve => {
      const loadedSprites: ILoadedSpriteAssetEntry[] = [];

      this.spritesToLoad.forEach(async (sprite, index) => {
        let loadingAttempts = 1;
        const isLastSpriteToLoad = index + 1 === this.spritesToLoad.length;

        while (loadingAttempts <= this.loadingRounds) {
          try {
            Logger.info(
              Service.ASSETS_ENGINE,
              `Trying to load sprite with id "${sprite.id}".
              Attempts: ${loadingAttempts}/${this.loadingRounds}`,
            );

            const loadedSprite = await this.loadOne(sprite);
            loadedSprites.push(loadedSprite);

            Logger.info(
              Service.ASSETS_ENGINE,
              `Sprite with id "${sprite.id}" loaded successfully.
              Attempts: ${loadingAttempts}/${this.loadingRounds}`,
            );

            // If the sprite is already successfully loaded, then breaks the
            // while loop to load the next sprite.
            break;
          } catch {
            loadingAttempts += 1;
            Logger.error(
              Service.ASSETS_ENGINE,
              `Could not load sprite with id "${sprite.id}" located on "${sprite.path}".
                Attempts: ${loadingAttempts}/${this.loadingRounds}`,
            );
          }
        }

        if (isLastSpriteToLoad) {
          Logger.info(
            Service.ASSETS_ENGINE,
            `Finished sprites assets loading!`,
          );
          resolve(loadedSprites);
        }
      });
    });

    return loadingPromise;
  };

  /**
   * Loads a unique sprite.
   *
   * @param {ISpriteAssetEntry} sprite The sprite data to load.
   * @returns {Promise<ILoadedSpriteAssetEntry>} The loading sprite promise.
   */
  private loadOne = async (
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

export default SpriteLoader;
