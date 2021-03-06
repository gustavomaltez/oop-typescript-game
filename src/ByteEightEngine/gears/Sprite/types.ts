export interface ISpriteFramePosition {
  /**
   * Current frame X position on sprite.
   */
  sourceX: number;

  /**
   * Current frame Y position on sprite.
   */
  sourceY: number;

  /**
   * Sprite height
   */
  height: number;

  /**
   * Sprite width
   */
  width: number;

  /**
   * The HTML image elements that contains the loaded sprite.
   */
  image: HTMLImageElement;
}
