/* eslint-disable prettier/prettier */
import { IDrawingEngine, IGameSettings } from '@byte-eight-engine/engines';
import { Logger, Service } from '@byte-eight-engine/logger';
import { ISpriteFramePosition } from 'src/ByteEightEngine/gears/Sprite/types';
import CanvasLoader from './CanvasLoader';
import CanvasContextLoader from './CanvasContextLoader';

/**
 * Strategy to drawn things on screen using the default canvas API
 */
class Canvas implements IDrawingEngine {
  private canvas: HTMLCanvasElement;

  private context: CanvasRenderingContext2D;

  private gameSettings: IGameSettings;

  constructor(gameSettings: IGameSettings) {
    const canvas = CanvasLoader.getCanvas();
    this.gameSettings = gameSettings;
    this.canvas = canvas;
    const context = CanvasContextLoader.getContext(canvas);
    this.context = context;
  }

  /**
   * Method to setup the drawing engine.
   */
  public setupEngine = () => {
    Logger.info(
      Service.CANVAS_STRATEGY,
      `Setting up canvas drawing engine strategy...`,
    );

    const { columns, rows } = this.gameSettings.canvasSize;
    const { scale, blockSize } = this.gameSettings;

    const scaledBlockSize = blockSize * scale;

    this.canvas.width = columns * scaledBlockSize;
    this.canvas.height = rows * scaledBlockSize;
    this.context.imageSmoothingEnabled = false;

    this.canvas.style.outline = '1px solid red';

    Logger.info(
      Service.CANVAS_STRATEGY,
      `Canvas engine has been successfully set up! Ready to use it!`,
    );
    return Promise.resolve();
  };

  /**
   * Clears all rendered components on screen.
   */
  public clear = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  public drawnLayers = () => {
    const { canvasSize, blockSize, scale } = this.gameSettings;
    const { columns, rows } = canvasSize;
    const scaledBlockSize = blockSize * scale;

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        this.context.strokeStyle = 'red';
        this.context.lineWidth = 2;
        this.context.strokeRect(
          column * scaledBlockSize,
          row * scaledBlockSize,
          scaledBlockSize,
          scaledBlockSize,
        );
      }
    }
  };

  public drawnSpriteOnCoordinates = (
    sprite: ISpriteFramePosition,
    x: number,
    y: number,
  ) => {
    const { blockSize, scale } = this.gameSettings;
    const scaledBlockSize = blockSize * scale;

    const { image, width, height, sourceX, sourceY } = sprite;

    const dx = (x * scaledBlockSize) - ((width * scale) / 2) + scaledBlockSize / 2;
    const dyBig = (y * scaledBlockSize ) - (height * scale) + scaledBlockSize;
    const dySmall = (y * scaledBlockSize ) - ((height * scale) / 2) + scaledBlockSize / 2;

    this.context.drawImage(
      image,
      sourceX,
      sourceY,
      width,
      height,
      dx,
      height > blockSize ? dyBig : dySmall,
      width * scale,
      height * scale,
    );
  };

  public drawnSpriteOnMapPositions = (
    sprite: ISpriteFramePosition,
    x: number,
    y: number,
  ) => {
    const { blockSize, scale } = this.gameSettings;
    const scaledBlockSize = blockSize * scale;

    const { image, width, height, sourceX, sourceY } = sprite;

    const dx = x - ((width * scale) / 2) + scaledBlockSize / 2;
    const dyBig = y - (height * scale) + scaledBlockSize;
    const dySmall = y - ((height * scale) / 2) + scaledBlockSize / 2;

    this.context.drawImage(
      image,
      sourceX,
      sourceY,
      width,
      height,
      dx,
      height > blockSize ? dyBig : dySmall,
      width * scale,
      height * scale,
    );
  };
}

export default Canvas;
