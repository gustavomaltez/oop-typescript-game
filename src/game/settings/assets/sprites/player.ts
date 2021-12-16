import { ISpriteAssetEntry } from '@byte-eight-engine/engines';
import { DefaultPlayerPosition } from '../../ids';

/**
 * Represents the list of all player attack sprites.
 */
const attack: ISpriteAssetEntry[] = [
  {
    id: DefaultPlayerPosition.ATTACK_LEFT,
    spriteDimensions: {
      height: 21,
      width: 16,
    },
    path: './assets/textures/player/attack/left.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: DefaultPlayerPosition.ATTACK_RIGHT,
    spriteDimensions: {
      height: 21,
      width: 16,
    },
    path: './assets/textures/player/attack/right.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: DefaultPlayerPosition.ATTACK_UP,
    spriteDimensions: {
      height: 18,
      width: 23,
    },
    path: './assets/textures/player/attack/up.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: DefaultPlayerPosition.ATTACK_DOWN,
    spriteDimensions: {
      height: 23,
      width: 23,
    },
    path: './assets/textures/player/attack/down.png',
    spriteCount: 6,
    animationTime: 80,
  },
];

/**
 * Represents the list of all player idle sprites.
 */
const idle: ISpriteAssetEntry[] = [
  {
    id: DefaultPlayerPosition.IDLE_LEFT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/idle/left.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: DefaultPlayerPosition.IDLE_RIGHT,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/idle/right.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: DefaultPlayerPosition.IDLE_UP,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/idle/up.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: DefaultPlayerPosition.IDLE_DOWN,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/player/idle/down.png',
    spriteCount: 6,
    animationTime: 80,
  },
];

/**
 * Represents the list of all player walk sprites.
 */
const walk: ISpriteAssetEntry[] = [
  {
    id: DefaultPlayerPosition.WALK_LEFT,
    spriteDimensions: {
      height: 17,
      width: 16,
    },
    path: './assets/textures/player/walk/left.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: DefaultPlayerPosition.WALK_RIGHT,
    spriteDimensions: {
      height: 17,
      width: 16,
    },
    path: './assets/textures/player/walk/right.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: DefaultPlayerPosition.WALK_UP,
    spriteDimensions: {
      height: 17,
      width: 16,
    },
    path: './assets/textures/player/walk/up.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: DefaultPlayerPosition.WALK_DOWN,
    spriteDimensions: {
      height: 17,
      width: 16,
    },
    path: './assets/textures/player/walk/down.png',
    spriteCount: 6,
    animationTime: 80,
  },
];

/**
 * Represents the list of all player sprites.
 */
const playerSprites = {
  attack,
  idle,
  walk,
};

export default playerSprites;
