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
   * Represents the sprite size
   *
   * - NOTE: all sprite will use the same size for width and height, all the map
   * components will use the same size too.
   * - IMPORTANT: Make sure to use all textures with the same sprite size
   */
  spriteSize: number;

  /**
   * The scale value to apply to all game sprites.
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
