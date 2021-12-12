import { AssetsEngine, IDrawingEngine } from '@engines';
import { UnableToLoadGame } from '@errors';
import { Logger, Service } from '@logger';
import { IGameSettings } from './types';

/**
 * Represents a base game engine
 */
class GameEngine {
  private settings: IGameSettings;

  private isLoaded: boolean;

  private drawnEngine: IDrawingEngine;

  private assetsEngine: AssetsEngine;

  constructor(
    drawnEngine: IDrawingEngine,
    assetsEngine: AssetsEngine,
    settings: IGameSettings,
  ) {
    this.drawnEngine = drawnEngine;
    this.assetsEngine = assetsEngine;
    this.settings = settings;
    this.isLoaded = false;
  }

  /**
   * Loads all game dependencies.
   */
  public loadGame = async () => {
    if (this.isLoaded) {
      Logger.error(
        Service.GAME_ENGINE,
        `Unable to load game: The game is already loaded!`,
      );
      throw new UnableToLoadGame('The game is already loaded!');
    }

    Logger.info(
      Service.GAME_ENGINE,
      `Setting up all needed game dependencies...`,
    );

    await this.drawnEngine.setupEngine(this.settings);
    await this.assetsEngine.loadAllAssets();

    this.isLoaded = true;

    Logger.info(
      Service.GAME_ENGINE,
      `All dependencies have been loaded successfully! Ready to use it!`,
    );
  };
}

export default GameEngine;
