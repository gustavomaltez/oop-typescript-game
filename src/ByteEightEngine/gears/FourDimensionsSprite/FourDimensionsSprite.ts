import { IFourDimensionsSprites, SpritePosition } from './types';

/**
 * An abstraction to create a sprite with four animations.
 */
class FourDimensionsSprite {
  private sprites: IFourDimensionsSprites;

  constructor(sprites: IFourDimensionsSprites) {
    this.sprites = sprites;
  }

  /**
   * Retrieves a sprite related to provided position.
   *
   * @param {SpritePosition} position The character position to get.
   * @returns {Sprite} The provided position sprite.
   */
  public getSprite = (position: SpritePosition) => {
    return this.sprites[position];
  };
}

export default FourDimensionsSprite;
