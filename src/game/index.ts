import {
  AssetsEngine,
  GameEngine,
  InputEngine,
  Strategy,
} from '@byte-eight-engine/engines';
import {
  Character,
  FourDimensionsSprite,
  Sprite,
} from '@byte-eight-engine/gears';
import {
  assetsSettings,
  DefaultPlayerPosition,
  gameSettings,
  Misc,
  SkeletonEnemyPositions,
} from '@game/settings';

/**
 * Code to be executed once the browser loads
 *
 * - Loads all needed engines, injects those engines on game engine and starts
 * loading the game engine itself.
 */
window.onload = async () => {
  const assetsEngine = new AssetsEngine(assetsSettings);

  const gameEngine = new GameEngine(
    Strategy.CANVAS,
    assetsEngine,
    gameSettings,
  );

  InputEngine.initialize();

  await gameEngine.loadGame();

  const player = new Character(
    {
      sprites: {
        attack: new FourDimensionsSprite({
          down: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.ATTACK_DOWN,
            ),
          ),
          up: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.ATTACK_UP,
            ),
          ),
          right: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.ATTACK_RIGHT,
            ),
          ),
          left: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.ATTACK_LEFT,
            ),
          ),
        }),
        idle: new FourDimensionsSprite({
          down: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.IDLE_DOWN,
            ),
          ),
          up: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.IDLE_UP,
            ),
          ),
          right: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.IDLE_RIGHT,
            ),
          ),
          left: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.IDLE_LEFT,
            ),
          ),
        }),
        walk: new FourDimensionsSprite({
          down: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.WALK_DOWN,
            ),
          ),
          up: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.WALK_UP,
            ),
          ),
          right: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.WALK_RIGHT,
            ),
          ),
          left: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              DefaultPlayerPosition.WALK_LEFT,
            ),
          ),
        }),
      },
      triggerKeys: {
        down: ['s'],
        up: ['w'],
        left: ['a'],
        right: ['d'],
      },
    },
    5,
    { x: 600, y: 500 },
    'idle',
  );

  const enemy = new Character(
    {
      sprites: {
        idle: new FourDimensionsSprite({
          down: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              SkeletonEnemyPositions.IDLE_DOWN,
            ),
          ),
          up: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              SkeletonEnemyPositions.IDLE_UP,
            ),
          ),
          right: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              SkeletonEnemyPositions.IDLE_RIGHT,
            ),
          ),
          left: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              SkeletonEnemyPositions.IDLE_LEFT,
            ),
          ),
        }),
        walk: new FourDimensionsSprite({
          down: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              SkeletonEnemyPositions.WALK_DOWN,
            ),
          ),
          up: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              SkeletonEnemyPositions.WALK_UP,
            ),
          ),
          right: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              SkeletonEnemyPositions.WALK_RIGHT,
            ),
          ),
          left: new Sprite(
            gameEngine.assetsEngine.getSpriteById(
              SkeletonEnemyPositions.WALK_LEFT,
            ),
          ),
        }),
      },
      triggerKeys: {
        down: ['s'],
        up: ['w'],
        left: ['a'],
        right: ['d'],
      },
    },
    1,
    { x: 70, y: 70 },
    'walk',
  );

  const stone = new Sprite(gameEngine.assetsEngine.getSpriteById(Misc.ROCK));
  const chest = new Sprite(gameEngine.assetsEngine.getSpriteById(Misc.CHEST));
  const trunk = new Sprite(
    gameEngine.assetsEngine.getSpriteById(Misc.TREE_TRUNK),
  );
  const tree = new Sprite(gameEngine.assetsEngine.getSpriteById(Misc.BIG_TREE));
  const bush = new Sprite(gameEngine.assetsEngine.getSpriteById(Misc.BUSH));

  gameEngine.gameUpdate = () => {
    if (InputEngine.currentPressedKey === '') player.setCurrentSprite('idle');
    else if (InputEngine.currentPressedKey === 'q')
      player.setCurrentSprite('attack');
    else player.setCurrentSprite('walk');

    if (InputEngine.currentPressedKey === 'w') player.moveUp().move();
    else if (InputEngine.currentPressedKey === 's') player.moveDown().move();
    else if (InputEngine.currentPressedKey === 'a') player.moveLeft().move();
    else if (InputEngine.currentPressedKey === 'd') player.moveRight().move();

    const playerPosition = player.getCurrentPosition();
    const enemyPosition = enemy.getCurrentPosition();

    if (
      playerPosition.y < enemyPosition.y + 350 &&
      playerPosition.x < enemyPosition.x + 350
    ) {
      enemy.setCurrentSprite('walk');

      if (playerPosition.x > enemyPosition.x) enemy.moveRight().move();
      if (playerPosition.x < enemyPosition.x) enemy.moveLeft().move();
      if (playerPosition.y < enemyPosition.y) enemy.moveUp().move();
      if (playerPosition.y > enemyPosition.y) enemy.moveDown().move();
    } else {
      enemy.setCurrentSprite('idle');
    }
  };

  gameEngine.gameLoop = () => {
    const { canvasSize } = gameSettings;
    const { columns, rows } = canvasSize;

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        if (
          row === 0 ||
          row === rows - 1 ||
          column === 0 ||
          column === columns - 1
        )
          gameEngine.drawnEngine.drawnSpriteOnCoordinates(
            stone.getCurrentFrame(),
            row,
            column,
          );
      }
    }

    gameEngine.drawnEngine.drawnLayers();

    enemy.drawn(gameEngine.drawnEngine);
    player.drawn(gameEngine.drawnEngine);

    gameEngine.drawnEngine.drawnSpriteOnCoordinates(
      tree.getCurrentFrame(),
      15,
      15,
    );

    gameEngine.drawnEngine.drawnSpriteOnCoordinates(
      trunk.getCurrentFrame(),
      6,
      17,
    );

    gameEngine.drawnEngine.drawnSpriteOnCoordinates(
      bush.getCurrentFrame(),
      2,
      15,
    );

    gameEngine.drawnEngine.drawnSpriteOnCoordinates(
      bush.getCurrentFrame(),
      17,
      12,
    );

    gameEngine.drawnEngine.drawnSpriteOnCoordinates(
      chest.getCurrentFrame(),
      9,
      1,
    );
  };

  gameEngine.startGame();
};
