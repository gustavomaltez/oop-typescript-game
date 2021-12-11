import Canvas from './strategies/Canvas';
import { IDrawnEngine, Strategy, StrategyMap } from './types';

/**
 * Represents the drawn engine manager
 */
class DrawnEngineManager {
  private engine: IDrawnEngine;

  private isLoaded = false;

  constructor(strategy: Strategy) {
    this.engine = this.getEngine(strategy);
  }

  /**
   *
   * @param {Strategy} strategyId The strategy id to be loaded.
   * @returns {IDrawnEngine} A drawn engine.
   */
  private getEngine = (strategyId: Strategy): IDrawnEngine => {
    const strategiesMap: StrategyMap = {
      [Strategy.CANVAS]: new Canvas(),
    };

    const strategy = strategiesMap[strategyId];

    if (!strategy) throw new Error('Unable to load strategy');

    return strategy;
  };

  /**
   * Loads the current engine and returns the loaded engine
   */
  public loadEngine = async (): Promise<IDrawnEngine> => {
    if (!this.engine) throw new Error('Unable to load engine');

    if (this.isLoaded) throw new Error('Unable to load two engines at same time');

    await this.engine.load();

    this.isLoaded = true;

    return Promise.resolve(this.engine);
  };
}

export default DrawnEngineManager;
