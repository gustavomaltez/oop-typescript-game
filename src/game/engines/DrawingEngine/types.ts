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
   * Loads the current engine
   */
  load: () => Promise<void>;
}

/**
 * Represents the strategy map used to load some drawing engine.
 */
export type StrategyMap = {
  [key in Strategy]: IDrawingEngine;
}