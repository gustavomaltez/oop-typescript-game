import { IDrawingEngine } from '@engines';
import CanvasLoader from './CanvasLoader';
import CanvasContextLoader from './CanvasContextLoader';

/**
 * Strategy to drawn things on screen using the default canvas API
 */
class Canvas implements IDrawingEngine {
  public context: CanvasRenderingContext2D;

  constructor() {
    const canvas = CanvasLoader.getCanvas();
    const context = CanvasContextLoader.getContext(canvas);
    this.context = context;
  }
}

export default Canvas;
