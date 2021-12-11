import { UnableToLoadCanvas } from '@errors';
import { Logger, Service } from '@logger';
import { IDrawingEngine } from '@engines';
import CanvasLoader from './CanvasLoader';

/**
 * Strategy to drawn things on screen using the default canvas API
 */
class Canvas implements IDrawingEngine {

  /**
   * Loads the canvas engine using the default browser Canvas API.
   */
  public load = (): Promise<void> => {
    const canvas = CanvasLoader.getCanvas();

    return Promise.resolve();
  };

}

export default Canvas;
