import { IDrawnEngine } from '../types';

/**
 * Strategy to drawn things on screen using the default canvas API
 */
class Canvas implements IDrawnEngine {
  public load = (): Promise<void> => Promise.resolve();
}

export default Canvas;
