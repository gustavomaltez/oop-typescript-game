import { IDrawingEngine } from 'src/ByteEightEngine/engines/DrawingEngine/types';
import FourDimensionsSprite from '../FourDimensionsSprite/FourDimensionsSprite';
import { SpritePosition } from '../FourDimensionsSprite/types';
import { ICharacterSprites } from './types';

/**
 * A character abstraction, allows moves and animates a character.
 */
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

  /**
   *  Retrieve the actual character position on map.
   *
   * @returns {{ x: number, y: number }} The current character position on map
   */
  public getCurrentPosition = (): { x: number; y: number } => {
    return { x: this.xPosition, y: this.yPosition };
  };

  /**
   * Drawn the character on screen.
   *
   * @param {IDrawingEngine} drawnEngine The engine to drawn the character on screen
   */
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

  /**
   *  Changes the current character sprite animation.
   *
   * @param {keyof ICharacterSprites['sprites']} currentSprite Current sprite name
   */
  public setCurrentSprite = (
    currentSprite: keyof ICharacterSprites['sprites'],
  ) => {
    this.currentSprite = currentSprite;
  };

  /**
   * Moves the character down.
   */
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

  /**
   * Moves the character left.
   */
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

  /**
   * Moves the character up.
   */
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

  /**
   * Moves the character right.
   */
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
