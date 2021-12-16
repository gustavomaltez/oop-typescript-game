import { Logger, Service } from '@byte-eight-engine/logger';
import { ILoadedAudioAssetEntry, IAudioAssetEntry } from './types';

/**
 * Represents an abstraction to load audios.
 */
class AudioLoader {
  private audiosToLoad: IAudioAssetEntry[];

  private loadingRounds: number;

  constructor(sprites: IAudioAssetEntry[], loadingRounds: number) {
    this.audiosToLoad = sprites;
    this.loadingRounds = loadingRounds;
  }

  /**
   * Loads all provided audios.
   *
   * @returns {ILoadedAudioAssetEntry[]} A list with all loaded audios.
   */
  public loadAll = async (): Promise<ILoadedAudioAssetEntry[]> => {
    Logger.info(Service.ASSETS_ENGINE, `Loading sprites assets...`);

    if (this.audiosToLoad.length === 0) return Promise.resolve([]);

    const loadingPromise = new Promise<ILoadedAudioAssetEntry[]>(resolve => {
      const loadedAudios: ILoadedAudioAssetEntry[] = [];

      this.audiosToLoad.forEach(async (audio, index) => {
        let loadingAttempts = 1;
        const isLastAudioToLoad = index + 1 === this.audiosToLoad.length;

        while (loadingAttempts <= this.loadingRounds) {
          try {
            Logger.info(
              Service.ASSETS_ENGINE,
              `Trying to load audio with id "${audio.id}".
              Attempts: ${loadingAttempts}/${this.loadingRounds}`,
            );
            const loadedAudio = await this.loadOne(audio);
            loadedAudios.push(loadedAudio);

            Logger.info(
              Service.ASSETS_ENGINE,
              `Audio with id "${audio.id}" loaded successfully.
              Attempts: ${loadingAttempts}/${this.loadingRounds}`,
            );
            // If the audio is already successfully loaded, then breaks the
            // while loop to load the next audio.
            break;
          } catch {
            loadingAttempts += 1;
            Logger.error(
              Service.ASSETS_ENGINE,
              `Could not load audio with id "${audio.id}" located on "${audio.path}".
                Attempts: ${loadingAttempts}/${this.loadingRounds}`,
            );
          }
        }
        if (isLastAudioToLoad) {
          Logger.info(
            Service.ASSETS_ENGINE,
            `Finished sprites assets loading!`,
          );
          resolve(loadedAudios);
        }
      });
    });

    return loadingPromise;
  };

  /**
   * Loads a unique audio.
   *
   * @param {IAudioAssetEntry} audioData The audio data to load.
   * @returns {Promise<ILoadedAudioAssetEntry>} The loading audio promise.
   */
  private loadOne = async (
    audioData: IAudioAssetEntry,
  ): Promise<ILoadedAudioAssetEntry> => {
    const promise = new Promise<ILoadedAudioAssetEntry>((resolve, reject) => {
      const audio = new Audio();
      audio.src = audioData.path;

      audio.oncanplaythrough = () => {
        const loadedAudio: ILoadedAudioAssetEntry = {
          ...audioData,
          data: audio,
        };

        resolve(loadedAudio);
      };

      audio.onerror = () => {
        reject();
      };
    });

    return promise;
  };
}

export default AudioLoader;
