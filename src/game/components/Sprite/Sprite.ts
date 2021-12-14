import { ILoadedSpriteAssetEntry } from '@engines';
import { ISpriteFramePosition } from './types';

/**
 * Represents a single sprite
 */
class Sprite {
  private data: ILoadedSpriteAssetEntry;

  private lastUpdate: number;

  private frames: ISpriteFramePosition[];

  private currentFrameIndex: number;

  constructor(data: ILoadedSpriteAssetEntry) {
    this.data = data;
    this.lastUpdate = 0;
    this.currentFrameIndex = 0;
    this.frames = this.buildSpriteFramesList();
  }

  /**
   * Returns the current sprite position based on sprite count and animation time.
   *
   * @returns {ISpriteFramePosition} Current sprite position.
   */
  public getCurrentFramePosition = (): ISpriteFramePosition => {
    if (this.data.animationTime === 'FREEZED') return this.frames[0];

    if (Date.now() - this.lastUpdate >= this.data.animationTime) {
      this.currentFrameIndex += 1;

      if (this.currentFrameIndex >= this.data.spriteCount) {
        this.currentFrameIndex = 0;
      }
      this.lastUpdate = Date.now();
    }

    return this.frames[this.currentFrameIndex];
  };

  /**
   * Returns an array containing all frames positions for this sprite
   *
   * @returns {ISpriteFramePosition[]} List of frames positions for this sprite.
   */
  private buildSpriteFramesList = (): ISpriteFramePosition[] => {
    const { spriteCount, spriteSize } = this.data;

    const frames: ISpriteFramePosition[] = [];

    for (let i = 0; i < spriteCount; i += 1) {
      const currentFrame: ISpriteFramePosition = {
        height: spriteSize,
        width: spriteSize,
        sourceX: spriteSize * i,
        sourceY: 0,
      };

      frames.push(currentFrame);
    }

    return frames;
  };
}

export default Sprite;