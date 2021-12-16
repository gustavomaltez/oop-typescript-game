import {
  IAssetsSettings,
  IAudioAssetEntry,
  ISpriteAssetEntry,
} from '@byte-eight-engine/engines';
import { DefaultPlayerPosition, Misc, SkeletonEnemyPositions } from './ids';

// Audios ----------------------------------------------------------------------

const audiosSettings: IAudioAssetEntry[] = [];

// Player Assets ---------------------------------------------------------------

const playerAttackSprites: ISpriteAssetEntry[] = [
  {
    id: DefaultPlayerPosition.ATTACK_LEFT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/attack/left.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: DefaultPlayerPosition.ATTACK_RIGHT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/attack/right.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: DefaultPlayerPosition.ATTACK_UP,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/attack/up.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: DefaultPlayerPosition.ATTACK_DOWN,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/attack/down.png',
    spriteCount: 6,
    animationTime: 200,
  },
];

const playerIdleSprites: ISpriteAssetEntry[] = [
  {
    id: DefaultPlayerPosition.IDLE_LEFT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/idle/left.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: DefaultPlayerPosition.IDLE_RIGHT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/idle/right.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: DefaultPlayerPosition.IDLE_UP,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/idle/up.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: DefaultPlayerPosition.IDLE_DOWN,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/idle/down.png',
    spriteCount: 6,
    animationTime: 200,
  },
];

const playerWalkSprites: ISpriteAssetEntry[] = [
  {
    id: DefaultPlayerPosition.WALK_LEFT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/walk/left.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: DefaultPlayerPosition.WALK_RIGHT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/walk/right.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: DefaultPlayerPosition.WALK_UP,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/walk/up.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: DefaultPlayerPosition.WALK_DOWN,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/walk/down.png',
    spriteCount: 6,
    animationTime: 200,
  },
];

// Enemy Assets ----------------------------------------------------------------

const skeletonEnemyWalkSprites: ISpriteAssetEntry[] = [
  {
    id: SkeletonEnemyPositions.WALK_LEFT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/walk/left.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: SkeletonEnemyPositions.WALK_RIGHT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/walk/right.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: SkeletonEnemyPositions.WALK_UP,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/walk/up.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: SkeletonEnemyPositions.WALK_DOWN,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/walk/down.png',
    spriteCount: 6,
    animationTime: 200,
  },
];

const skeletonEnemyIdleSprites: ISpriteAssetEntry[] = [
  {
    id: SkeletonEnemyPositions.IDLE_LEFT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/idle/left.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: SkeletonEnemyPositions.IDLE_RIGHT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/idle/right.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: SkeletonEnemyPositions.IDLE_UP,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/idle/up.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: SkeletonEnemyPositions.IDLE_DOWN,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/idle/down.png',
    spriteCount: 6,
    animationTime: 200,
  },
];

// Misc ------------------------------------------------------------------------

const miscAssets: ISpriteAssetEntry[] = [
  {
    id: Misc.CHEST,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/misc/chest.png',
    spriteCount: 6,
    animationTime: 200,
  },
  {
    id: Misc.BUSH,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/misc/bush.png',
    spriteCount: 'SINGLE_SPRITE',
    animationTime: 'FREEZED',
  },
  {
    id: Misc.COIN,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/misc/coin.png',
    spriteCount: 'SINGLE_SPRITE',
    animationTime: 'FREEZED',
  },
  {
    id: Misc.GRASS,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/misc/grass.png',
    spriteCount: 'SINGLE_SPRITE',
    animationTime: 'FREEZED',
  },
  {
    id: Misc.HEART,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/misc/heart.png',
    spriteCount: 'SINGLE_SPRITE',
    animationTime: 'FREEZED',
  },
  {
    id: Misc.ROCK,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/misc/rock.png',
    spriteCount: 'SINGLE_SPRITE',
    animationTime: 'FREEZED',
  },
  {
    id: Misc.TREE_TRUNK,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/misc/tree_trunk.png',
    spriteCount: 'SINGLE_SPRITE',
    animationTime: 'FREEZED',
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