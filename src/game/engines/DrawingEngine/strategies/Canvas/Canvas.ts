import { UnableToGetCanvasContext, UnableToLoadCanvas } from '@errors';
import { Logger, Service } from '@logger';
import { IDrawingEngine } from '@engines';
import CanvasLoader from './CanvasLoader';
import CanvasContextLoader from './CanvasContextLoader';

/**
 * Strategy to drawn things on screen using the default canvas API
 */
class Canvas implements IDrawingEngine {

  private context: CanvasRenderingContext2D | null = null;

  /**
   * Loads the canvas engine using the default browser Canvas API.
   */
  public load = (): Promise<void> => {
    const canvas = CanvasLoader.getCanvas();
    const context = CanvasContextLoader.getContext(canvas);
    this.context = context;

    return Promise.resolve();
  };

  /**
   * Gets the canvas context.
   *
   * @returns {CanvasRenderingContext2D} The underlying canvas context.
   */
  private getContext = (): CanvasRenderingContext2D => {
    if (!this.context) {
      Logger.error(
        Service.CANVAS_STRATEGY,
        `No canvas context found!`
      );
      throw new UnableToGetCanvasContext(`
        Unable to get canvas context, please make sure to load the canvas first.
      `);
    }

    return this.context;
  }

}

export default Canvas;
