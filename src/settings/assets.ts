import { IAssetsSettings, IAudioAssetEntry, ISpriteAssetEntry } from '@engines';
import { DefaultPlayerPosition, Misc, SkeletonEnemyPositions } from './ids';

// Audios ----------------------------------------------------------------------

const audiosSettings: IAudioAssetEntry[] = [];

// Player Assets ---------------------------------------------------------------

const playerAttackSprites: ISpriteAssetEntry[] = [
  {
    id: DefaultPlayerPosition.ATTACK_LEFT,
    spriteSize: 16,
    path: './assets/textures/player/attack/left.png',
    spriteCount: 6,
  },
  {
    id: DefaultPlayerPosition.ATTACK_RIGHT,
    spriteSize: 16,
    path: './assets/textures/player/attack/right.png',
    spriteCount: 6,
  },
  {
    id: DefaultPlayerPosition.ATTACK_UP,
    spriteSize: 16,
    path: './assets/textures/player/attack/up.png',
    spriteCount: 6,
  },
  {
    id: DefaultPlayerPosition.ATTACK_DOWN,
    spriteSize: 16,
    path: './assets/textures/player/attack/down.png',
    spriteCount: 6,
  },
];

const playerIdleSprites: ISpriteAssetEntry[] = [
  {
    id: DefaultPlayerPosition.IDLE_LEFT,
    spriteSize: 16,
    path: './assets/textures/player/idle/left.png',
    spriteCount: 6,
  },
  {
    id: DefaultPlayerPosition.IDLE_RIGHT,
    spriteSize: 16,
    path: './assets/textures/player/idle/right.png',
    spriteCount: 6,
  },
  {
    id: DefaultPlayerPosition.IDLE_UP,
    spriteSize: 16,
    path: './assets/textures/player/idle/up.png',
    spriteCount: 6,
  },
  {
    id: DefaultPlayerPosition.IDLE_DOWN,
    spriteSize: 16,
    path: './assets/textures/player/idle/down.png',
    spriteCount: 6,
  },
];

const playerWalkSprites: ISpriteAssetEntry[] = [
  {
    id: DefaultPlayerPosition.WALK_LEFT,
    spriteSize: 16,
    path: './assets/textures/player/walk/left.png',
    spriteCount: 6,
  },
  {
    id: DefaultPlayerPosition.WALK_RIGHT,
    spriteSize: 16,
    path: './assets/textures/player/walk/right.png',
    spriteCount: 6,
  },
  {
    id: DefaultPlayerPosition.WALK_UP,
    spriteSize: 16,
    path: './assets/textures/player/walk/up.png',
    spriteCount: 6,
  },
  {
    id: DefaultPlayerPosition.WALK_DOWN,
    spriteSize: 16,
    path: './assets/textures/player/walk/down.png',
    spriteCount: 6,
  },
];

// Enemy Assets ----------------------------------------------------------------

const skeletonEnemyWalkSprites: ISpriteAssetEntry[] = [
  {
    id: SkeletonEnemyPositions.WALK_LEFT,
    spriteSize: 16,
    path: './assets/textures/enemy/walk/left.png',
    spriteCount: 6,
  },
  {
    id: SkeletonEnemyPositions.WALK_RIGHT,
    spriteSize: 16,
    path: './assets/textures/enemy/walk/right.png',
    spriteCount: 6,
  },
  {
    id: SkeletonEnemyPositions.WALK_UP,
    spriteSize: 16,
    path: './assets/textures/enemy/walk/up.png',
    spriteCount: 6,
  },
  {
    id: SkeletonEnemyPositions.WALK_DOWN,
    spriteSize: 16,
    path: './assets/textures/enemy/walk/down.png',
    spriteCount: 6,
  },
];

const skeletonEnemyIdleSprites: ISpriteAssetEntry[] = [
  {
    id: SkeletonEnemyPositions.IDLE_LEFT,
    spriteSize: 16,
    path: './assets/textures/enemy/idle/left.png',
    spriteCount: 6,
  },
  {
    id: SkeletonEnemyPositions.IDLE_RIGHT,
    spriteSize: 16,
    path: './assets/textures/enemy/idle/right.png',
    spriteCount: 6,
  },
  {
    id: SkeletonEnemyPositions.IDLE_UP,
    spriteSize: 16,
    path: './assets/textures/enemy/idle/up.png',
    spriteCount: 6,
  },
  {
    id: SkeletonEnemyPositions.IDLE_DOWN,
    spriteSize: 16,
    path: './assets/textures/enemy/idle/down.png',
    spriteCount: 6,
  },
];

// Misc ------------------------------------------------------------------------

const miscAssets: ISpriteAssetEntry[] = [
  {
    id: Misc.CHEST,
    spriteSize: 16,
    path: './assets/textures/misc/chest.png',
    spriteCount: 6,
  },
  {
    id: Misc.BUSH,
    spriteSize: 16,
    path: './assets/textures/misc/bush.png',
    spriteCount: 'SINGLE_SPRITE',
  },
  {
    id: Misc.COIN,
    spriteSize: 16,
    path: './assets/textures/misc/coin.png',
    spriteCount: 'SINGLE_SPRITE',
  },
  {
    id: Misc.GRASS,
    spriteSize: 16,
    path: './assets/textures/misc/grass.png',
    spriteCount: 'SINGLE_SPRITE',
  },
  {
    id: Misc.HEART,
    spriteSize: 16,
    path: './assets/textures/misc/heart.png',
    spriteCount: 'SINGLE_SPRITE',
  },
  {
    id: Misc.ROCK,
    spriteSize: 16,
    path: './assets/textures/misc/rock.png',
    spriteCount: 'SINGLE_SPRITE',
  },
  {
    id: Misc.TREE_TRUNK,
    spriteSize: 16,
    path: './assets/textures/misc/tree_trunk.png',
    spriteCount: 'SINGLE_SPRITE',
  },
];

// Final Settings --------------------------------------------------------------

const spritesSettings: ISpriteAssetEntry[] = [
  ...miscAssets,
  ...playerWalkSprites,
  ...playerIdleSprites,
  ...playerAttackSprites,
  ...skeletonEnemyIdleSprites,
  ...skeletonEnemyWalkSprites,
];

const assetsSettings: IAssetsSettings = {
  audios: audiosSettings,
  sprites: spritesSettings,
  loadingRounds: 3,
};

export { assetsSettings };
