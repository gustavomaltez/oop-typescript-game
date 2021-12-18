import { IFourDimensionsSprites, SpritePosition } from './types';

class FourDimensionsSprite {
  private sprites: IFourDimensionsSprites;

  constructor(sprites: IFourDimensionsSprites) {
    this.sprites = sprites;
  }

  public getSprite = (position: SpritePosition) => {
    return this.sprites[position];
  };
}

export default FourDimensionsSprite;
