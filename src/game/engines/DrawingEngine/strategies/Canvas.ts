import { UnableToLoadCanvas } from '@errors';
import { Logger, Service } from '@logger';
import { IDrawingEngine } from '@engines';

/**
 * Strategy to drawn things on screen using the default canvas API
 */
class Canvas implements IDrawingEngine {

  /**
   * Loads the canvas engine using the default browser Canvas API.
   */
  public load = (): Promise<void> => Promise.resolve();

  /**
   * Searches on DOM for a canvas element, if none was found, creates a new on
   * and inserts it into DOM.
   *
   * @returns {HTMLCanvasElement} The canvas element.
   */
  private getCanvas = (): HTMLCanvasElement => {
    Logger.info(
      Service.CANVAS_STRATEGY,
      `Searching on DOM for a existing Canvas...`
    );

    const canvasElement = document.querySelector('canvas');

    if (canvasElement) return canvasElement;

    Logger.info(
      Service.CANVAS_STRATEGY,
      `No canvas was found, attempting to create a new one...`
    );

    const newCanvasElement = document.createElement('canvas');

    return newCanvasElement;
  }

  /**
   *
   * @param {HTMLCanvasElement} canvas Custom canvas to be inserted into body.
   */
  private attachCustomCanvasOnBody = (canvas: HTMLCanvasElement) => {
    Logger.info(
      Service.CANVAS_STRATEGY,
      `Searching for document body...`
    );
    const body = document.querySelector('body');

    if (!body) {
      Logger.error(
        Service.CANVAS_STRATEGY,
        `No document body were found!`
      );
      throw new UnableToLoadCanvas("Document body wasn't found");
    }

    Logger.error(
      Service.CANVAS_STRATEGY,
      `Document body was found, appending the canvas into it.`
    );
    body.appendChild(canvas);
  }
}

export default Canvas;
