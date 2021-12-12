import {
  AssetsEngine,
  DrawingEngineManager,
  GameEngine,
  IAssetsSettings,
  IGameSettings,
  Strategy,
} from '@engines';

/**
 * Code to be executed once the browser loads
 *
 * - Loads all needed engines, injects those engines on game engine and starts
 * loading the game engine itself.
 */
window.onload = async () => {
  const drawingEngineManager = new DrawingEngineManager(Strategy.CANVAS);
  const drawnEngine = drawingEngineManager.loadEngine();

  const assetsSettings: IAssetsSettings = {
    audios: [],
    sprites: [
      {
        id: 'playerIdleLeft',
        spriteSize: 16,
        path: './assets/textures/player/idle/left.png',
        spriteCount: 6,
      },
      {
        id: 'playerIdleRight',
        spriteSize: 16,
        path: './assets/textures/player/idle/right.png',
        spriteCount: 6,
      },
      {
        id: 'playerIdleTop',
        spriteSize: 16,
        path: './assets/textures/player/idle/up.png',
        spriteCount: 6,
      },
      {
        id: 'playerIdleDown',
        spriteSize: 16,
        path: './assets/textures/player/idle/down.png',
        spriteCount: 6,
      },
    ],
    loadingRounds: 3,
  };

  const assetsEngine = new AssetsEngine(assetsSettings);
  const gameSettings: IGameSettings = {
    canvasSize: {
      columns: 20,
      rows: 20,
    },
    scale: 2,
    spriteSize: 16,
  };

  const gameEngine = new GameEngine(drawnEngine, assetsEngine, gameSettings);
  gameEngine.loadGame();
};
