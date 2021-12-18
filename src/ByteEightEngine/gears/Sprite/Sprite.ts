import { ILoadedSpriteAssetEntry } from '@byte-eight-engine/engines';
import { ISpriteFramePosition } from './types';

/**
 * Represents a single sprite
 */
class Sprite {
  public data: ILoadedSpriteAssetEntry;

  private lastUpdate: number;

  private frames: ISpriteFramePosition[];

  private currentFrameIndex: number;

  private isFreezed: boolean;

  constructor(data: ILoadedSpriteAssetEntry) {
    this.data = data;
    this.lastUpdate = 0;
    this.currentFrameIndex = 0;
    this.isFreezed = true;
    this.frames = this.buildSpriteFramesList();
  }

  /**
   * Returns the current sprite position based on sprite count and animation time.
   *
   * @returns {ISpriteFramePosition} Current sprite position.
   */
  public getCurrentFramePosition = (): ISpriteFramePosition => {
    if (this.data.animationTime === 'FREEZED') return this.frames[0];

    if (this.isFreezed) return this.frames[this.currentFrameIndex];

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
   * Freezes the sprite at the current position.
   *
   * - Calling this method will make the animation stops at the current frame.
   */
  public freeze = () => {
    this.isFreezed = true;
  };

  /**
   * Unfreezes the sprite.
   *
   * - Calling this method will make the animation starts again.
   */
  public unfreeze = () => {
    this.isFreezed = false;
  };

  /**
   * Returns an array containing all frames positions for this sprite
   *
   * @returns {ISpriteFramePosition[]} List of frames positions for this sprite.
   */
  private buildSpriteFramesList = (): ISpriteFramePosition[] => {
    const { spriteCount, spriteDimensions } = this.data;
    const { height, width } = spriteDimensions;

    const frames: ISpriteFramePosition[] = [];

    const totalSprites = spriteCount === 'SINGLE_SPRITE' ? 1 : spriteCount;

    for (let i = 0; i < totalSprites; i += 1) {
      const currentFrame: ISpriteFramePosition = {
        height,
        width,
        sourceX: width * i,
        sourceY: 0,
      };

      frames.push(currentFrame);
    }

    return frames;
  };
}

export default Sprite;
