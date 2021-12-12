import { UnableToGetCanvasContext } from "@errors";
import { Logger, Service } from "@logger";

/**
 * Abstraction to load the canvas context
 */
abstract class CanvasContextLoader {

  /**
   * Gets the canvas context.
   *
   * @param  {HTMLCanvasElement} canvas The underlying canvas element.
   * @returns {CanvasRenderingContext2D} The underlying canvas context.
   */
  public static getContext =
    (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
      Logger.info(
        Service.CANVAS_CONTEXT_LOADER,
        `Tying to load the canvas context...`
      );

      const context = canvas.getContext('2d');

      if (!context) {
        Logger.error(Service.CANVAS_CONTEXT_LOADER, `No canvas context found!`);
        throw new UnableToGetCanvasContext(`No context found.`);
      }

      Logger.info(
        Service.CANVAS_CONTEXT_LOADER,
        `Canvas context loaded successfully! Ready to use it!`
      );

      return context;
    }
}

export default CanvasContextLoader;
