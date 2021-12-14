/**
 * Represents the drawable area dimensions.
 */
export interface ICanvasSize {
  /**
   * How many rows will be displayed in canvas.
   */
  rows: number;

  /**
   * How many rows will be displayed in canvas.
   */
  columns: number;
}

/**
 * Represents all games settings.
 */
export interface IGameSettings {
  /**
   * Represents the drawable area dimensions.
   *
   * - Canvas width will be equals to spriteSize * scale * canvasSize.rows
   * - Canvas height will be equals to spriteSize * scale * canvasSize.columns
   */
  canvasSize: ICanvasSize;

  /**
   * The size of each block of
   */
  blockSize: number;

  /**
   * The value to scale all visual components (images, blocks, etc).
   *
   * @example
   * // Scale = 1
   * // Sprite size = 16
   * // Rendered sprite size = 16
   *
   * // Scale = 2
   * // Sprite size = 16
   * // Rendered sprite size = 32
   */
  scale: number;
}
