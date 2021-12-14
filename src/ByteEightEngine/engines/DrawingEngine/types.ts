import { IGameSettings } from '../GameEngine/types';

/**
 * Represents all available drawing engines
 */
export enum Strategy {
  /**
   * Uses the default canvas engine to drawn thing on screen.
   */
  CANVAS = 'canvas',
}

/**
 * Represents a basic drawing engine, all strategies should follow this interface.
 */
export interface IDrawingEngine {
  /**
   * Method to setup the drawing engine.
   *
   * @param {IGameSettings} gameSettings Current running game settings.
   */
  setupEngine: (gameSettings: IGameSettings) => Promise<void>;
}
