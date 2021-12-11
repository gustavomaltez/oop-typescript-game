import { UnableToLoadDrawingEngine, UnableToLoadStrategy } from "@errors";
import { Logger, Service } from "@logger";
import Canvas from "./strategies/Canvas/Canvas";
import { IDrawingEngine, Strategy, StrategyMap } from "./types";

/**
 * An abstraction to load the actual drawing engine instance.
 */
class DrawingEngineManager {
  private engine: IDrawingEngine;

  private isLoaded = false;

  constructor(strategyId: Strategy) {
    Logger.info(
      Service.DRAWN_ENGINE_MANAGER,
      `Setting up a canvas engine with strategy id: "${strategyId}"`,
    );
    this.engine = this.getEngine(strategyId);
  }

  /**
   * Searches on strategies map for an strategy and returns it.
   *
   * @param {Strategy} strategyId The strategy id to be loaded.
   * @returns {IDrawingEngine} A drawing engine.
   */
  private getEngine = (strategyId: Strategy): IDrawingEngine => {
    const strategiesMap: StrategyMap = {
      [Strategy.CANVAS]: new Canvas(),
    };

    const strategy = strategiesMap[strategyId];

    if (!strategy) {
      Logger.error(
        Service.DRAWN_ENGINE_MANAGER,
        `No strategy was found with the provided id: "${strategyId}"`,
      );
      throw new UnableToLoadStrategy(`
        The strategy with "${strategyId}" was not found on strategyMap. Please use a valid strategy id.
      `);
    }

    return strategy;
  };

  /**
   * Loads the current engine and returns the loaded engine
   */
  public loadEngine = async (): Promise<IDrawingEngine> => {
    Logger.info(
      Service.DRAWN_ENGINE_MANAGER,
      `Trying to load the current engine...`
    );

    if (!this.engine) {
      Logger.error(
        Service.DRAWN_ENGINE_MANAGER,
        `Unable to load the current engine!`
      );
      throw new UnableToLoadDrawingEngine('No engine was found');
    }

    if (this.isLoaded) {
      Logger.error(
        Service.DRAWN_ENGINE_MANAGER,
        `The current engine is already loaded!`
      );
      throw new UnableToLoadDrawingEngine('Unable to load two engines at same time');
    }

    await this.engine.load();

    this.isLoaded = true;

    Logger.info(
      Service.DRAWN_ENGINE_MANAGER,
      `Engine loaded successfully! Ready to use it!`
    );
    return Promise.resolve(this.engine);
  };
}

export default DrawingEngineManager;
