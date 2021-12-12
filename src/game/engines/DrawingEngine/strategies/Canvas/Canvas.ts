import { IDrawingEngine, IGameSettings } from '@engines';
import { Logger, Service } from '@logger';
import CanvasLoader from './CanvasLoader';
import CanvasContextLoader from './CanvasContextLoader';

/**
 * Strategy to drawn things on screen using the default canvas API
 */
class Canvas implements IDrawingEngine {
  private canvas: HTMLCanvasElement;

  private context: CanvasRenderingContext2D;

  constructor() {
    const canvas = CanvasLoader.getCanvas();
    this.canvas = canvas;
    const context = CanvasContextLoader.getContext(canvas);
    this.context = context;
  }

  /**
   * Method to setup the drawing engine.
   *
   * @param {IGameSettings} gameSettings Current running game settings.
   */
  public setupEngine = (gameSettings: IGameSettings) => {
    Logger.info(
      Service.CANVAS_STRATEGY,
      `Setting up canvas drawing engine strategy...`,
    );

    const { width, height } = gameSettings.dimensions;
    this.canvas.width = width;
    this.canvas.height = height;

    // TODO: Make it configurable
    this.canvas.style.backgroundColor = '#000';

    Logger.info(
      Service.CANVAS_STRATEGY,
      `Canvas engine has been successfully set up! Ready to use it!`,
    );
    return Promise.resolve();
  };
}

export default Canvas;
