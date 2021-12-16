import { ISpriteAssetEntry } from '@byte-eight-engine/engines';
import { Misc } from '../../ids';

/**
 * Represents the list of all misc sprites.
 */
const miscSprites: ISpriteAssetEntry[] = [
  {
    id: Misc.CHEST,
    spriteDimensions: {
      height: 16,
      width: 16,
    },
    path: './assets/textures/misc/chest.png',
    spriteCount: 6,
    animationTime: 80,
  },
  {
    id: Misc.BUSH,
    spriteDimensions: {
      height: 13,
      width: 15,
    },
    path: './assets/textures/misc/bush.png',
    spriteCount: 'SINGLE_SPRITE',
    animationTime: 'FREEZED',
  },
  {
    id: Misc.COIN,
    spriteDimensions: {
      height: 5,
      width: 5,
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
      height: 7,
      width: 7,
    },
    path: './assets/textures/misc/heart.png',
    spriteCount: 'SINGLE_SPRITE',
    animationTime: 'FREEZED',
  },
  {
    id: Misc.ROCK,
    spriteDimensions: {
      height: 15,
      width: 15,
    },
    path: './assets/textures/misc/rock.png',
    spriteCount: 'SINGLE_SPRITE',
    animationTime: 'FREEZED',
  },
  {
    id: Misc.TREE_TRUNK,
    spriteDimensions: {
      height: 16,
      width: 18,
    },
    path: './assets/textures/misc/tree_trunk.png',
    spriteCount: 'SINGLE_SPRITE',
    animationTime: 'FREEZED',
  },
  {
    id: Misc.BIG_TREE,
    spriteDimensions: {
      height: 54,
      width: 48,
    },
    path: './assets/textures/misc/big_tree.png',
    spriteCount: 'SINGLE_SPRITE',
    animationTime: 'FREEZED',
  },
];

export default miscSprites;
