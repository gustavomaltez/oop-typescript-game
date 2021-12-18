import { IDrawingEngine } from 'src/ByteEightEngine/engines/DrawingEngine/types';
import FourDimensionsSprite from '../FourDimensionsSprite/FourDimensionsSprite';
import { SpritePosition } from '../FourDimensionsSprite/types';
import { ICharacterSprites } from './types';

class Character {
  private walkingSpeed: number;

  private lookingAtPosition: SpritePosition;

  private spritesSettings: ICharacterSprites;

  private currentSprite: keyof ICharacterSprites['sprites'];

  public xPosition: number;

  public yPosition: number;

  constructor(
    spritesSettings: ICharacterSprites,
    walkingSpeed: number,
    startingPosition: { x: number; y: number },
    currentSprite: keyof ICharacterSprites['sprites'],
  ) {
    this.lookingAtPosition = SpritePosition.UP;
    this.spritesSettings = spritesSettings;
    this.walkingSpeed = walkingSpeed;
    this.xPosition = startingPosition.x;
    this.yPosition = startingPosition.y;
    this.currentSprite = currentSprite;
  }

  public getCurrentPosition = () => {
    return { x: this.xPosition, y: this.yPosition };
  };

  public drawn = (drawnEngine: IDrawingEngine) => {
    const spriteType: FourDimensionsSprite =
      this.spritesSettings.sprites[this.currentSprite];

    const spriteAtPosition = spriteType.getSprite(this.lookingAtPosition);

    const currentSpriteFrame = spriteAtPosition.getCurrentFrame();

    drawnEngine.drawnSpriteOnMapPositions(
      currentSpriteFrame,
      this.xPosition,
      this.yPosition,
    );
  };

  public setCurrentSprite = (
    currentSprite: keyof ICharacterSprites['sprites'],
  ) => {
    this.currentSprite = currentSprite;
  };

  public moveDown = () => {
    const nextPosition = {
      x: this.xPosition,
      y: this.yPosition + this.walkingSpeed,
    };

    return {
      nextPosition,
      move: () => {
        this.lookingAtPosition = SpritePosition.DOWN;
        this.yPosition = nextPosition.y;
      },
    };
  };

  public moveLeft = () => {
    const nextPosition = {
      x: this.xPosition - this.walkingSpeed,
      y: this.yPosition,
    };

    return {
      nextPosition,
      move: () => {
        this.lookingAtPosition = SpritePosition.LEFT;
        this.xPosition = nextPosition.x;
      },
    };
  };

  public moveUp = () => {
    const nextPosition = {
      x: this.xPosition,
      y: this.yPosition - this.walkingSpeed,
    };

    return {
      nextPosition,
      move: () => {
        this.lookingAtPosition = SpritePosition.UP;
        this.yPosition = nextPosition.y;
      },
    };
  };

  public moveRight = () => {
    const nextPosition = {
      x: this.xPosition + this.walkingSpeed,
      y: this.yPosition,
    };

    return {
      nextPosition,
      move: () => {
        this.lookingAtPosition = SpritePosition.RIGHT;
        this.xPosition = nextPosition.x;
      },
    };
  };
}

export default Character;
