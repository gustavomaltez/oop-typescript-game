import { ISpriteAssetEntry } from '@byte-eight-engine/engines';
import { SkeletonEnemyPositions } from '../../ids';

/**
 * Represents the list of all skeleton walk sprites.
 */
const walk: ISpriteAssetEntry[] = [
  {
    id: SkeletonEnemyPositions.WALK_LEFT,
    spriteDimensions: {
      height: 17,
      width: 16,
    },
    path: './assets/textures/enemy/walk/left.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: SkeletonEnemyPositions.WALK_RIGHT,
    spriteDimensions: {
      height: 17,
      width: 16,
    },
    path: './assets/textures/enemy/walk/right.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: SkeletonEnemyPositions.WALK_UP,
    spriteDimensions: {
      height: 17,
      width: 16,
    },
    path: './assets/textures/enemy/walk/up.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: SkeletonEnemyPositions.WALK_DOWN,
    spriteDimensions: {
      height: 17,
      width: 16,
    },
    path: './assets/textures/enemy/walk/down.png',
    spriteCount: 6,
    animationTime: 80,
  },
];

/**
 * Represents the list of all skeleton idle sprites.
 */
const idle: ISpriteAssetEntry[] = [
  {
    id: SkeletonEnemyPositions.IDLE_LEFT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/idle/left.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: SkeletonEnemyPositions.IDLE_RIGHT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/idle/right.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: SkeletonEnemyPositions.IDLE_UP,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/idle/up.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: SkeletonEnemyPositions.IDLE_DOWN,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/enemy/idle/down.png',
    spriteCount: 6,
    animationTime: 80,
  },
];

/**
 * Represents the list of all skeleton sprites.
 */
const skeletonSprites = {
  idle,
  walk,
};

export default skeletonSprites;
