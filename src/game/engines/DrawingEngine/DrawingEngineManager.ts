import { UnableToLoadDrawingEngine, UnableToLoadStrategy } from '@errors';
import { Logger, Service } from '@logger';
import Canvas from './strategies/Canvas/Canvas';

import { IDrawingEngine, Strategy } from './types';

/**
 * An abstraction to load the actual drawing engine instance.
 */
class DrawingEngineManager {
  private strategyId: Strategy;

  private isEngineLoaded: boolean;

  constructor(strategyId: Strategy) {
    this.strategyId = strategyId;
    this.isEngineLoaded = false;
  }

  /**
   * Loads the provided strategy provided on current class constructor.
   *
   * @returns {IDrawingEngine} A drawn engine.
   */
  public loadEngine = (): IDrawingEngine => {
    if (this.isEngineLoaded) {
      Logger.error(
        Service.DRAWN_ENGINE_MANAGER,
        `Unable to load the current engine!`,
      );
      throw new UnableToLoadDrawingEngine('No engine was found');
    }

    Logger.info(
      Service.DRAWN_ENGINE_MANAGER,
      `Setting up a canvas engine with strategy id: "${this.strategyId}"`,
    );

    const isValid = this.validateStrategy(this.strategyId);

    if (isValid) this.isEngineLoaded = true;

    if (this.strategyId === Strategy.CANVAS) return new Canvas();

    if (this.strategyId !== Strategy.CANVAS) {
      return new Canvas();
    }
    throw new UnableToLoadStrategy(`
      The strategy with "${
        this.strategyId
      }" is not valid. Please use a valid strategy id.
      Valid strategy ids: ${Object.keys(Strategy).join(', ')}.
    `);
  };

  /**
   * Validates if the strategy is valid.
   *
   * @param {Strategy} strategyId The strategy id to be validated.
   * @returns {boolean} Whether is a valid strategy.
   */
  private validateStrategy = (strategyId: Strategy): boolean => {
    const validStrategies = Object.values(Strategy);
    const isValid = validStrategies.includes(strategyId);

    return isValid;
  };
}

export default DrawingEngineManager;
