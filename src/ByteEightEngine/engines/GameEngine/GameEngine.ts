/* eslint-disable @typescript-eslint/no-empty-function */
import {
  AssetsEngine,
  DrawingEngineManager,
  IDrawingEngine,
} from '@byte-eight-engine/engines';
import { UnableToLoadGame } from '@byte-eight-engine/errors';
import { Logger, Service } from '@byte-eight-engine/logger';

import { Strategy } from '../DrawingEngine/types';
import { IGameSettings } from './types';

/**
 * Represents a base game engine
 */
class GameEngine {
  private settings: IGameSettings;

  private isLoaded: boolean;

  public drawnEngine: IDrawingEngine;

  public assetsEngine: AssetsEngine;

  public gameLoop: () => void;

  public gameUpdate: () => void;

  constructor(
    drawnEngineId: Strategy,
    assetsEngine: AssetsEngine,
    settings: IGameSettings,
  ) {
    this.assetsEngine = assetsEngine;
    this.settings = settings;
    this.isLoaded = false;

    const drawingEngineManager = new DrawingEngineManager(drawnEngineId);

    this.drawnEngine = drawingEngineManager.loadEngine(this.settings);

    this.gameLoop = () => {};
    this.gameUpdate = () => {};
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

    await this.drawnEngine.setupEngine();
    await this.assetsEngine.loadAllAssets();

    this.isLoaded = true;

    Logger.info(
      Service.GAME_ENGINE,
      `All dependencies have been loaded successfully! Ready to use it!`,
    );
  };

  /**
   * A method tho be executed in loop once the game is started.
   */
  private internalGameLoop = () => {
    this.drawnEngine.clear();
    this.gameUpdate();
    this.gameLoop();
    window.requestAnimationFrame(this.internalGameLoop);
  };

  /**
   * A method to start the game loop
   */
  public startGame = () => {
    this.internalGameLoop();
  };
}

export default GameEngine;
