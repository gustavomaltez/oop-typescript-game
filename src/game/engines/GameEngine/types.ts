/**
 * Represents the drawable area dimensions.
 */
export interface IGameDimensions {
  width: number;
  height: number;
}

/**
 * Represents all games settings.
 */
export interface IGameSettings {
  /**
   * Represents the drawable area dimensions.
   */
  dimensions: IGameDimensions;

  /**
   * Represents the sprite size
   *
   * - NOTE: all sprite will use the same size for width and height, all the map
   * components will use the same size too.
   */
  spriteSize: number;
}
