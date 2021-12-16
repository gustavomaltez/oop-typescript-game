import { IAudioAssetEntry } from '@byte-eight-engine/engines';
import { SoundEffect } from '../../ids';

/**
 * Represents all game sound effects that will be available during the game.
 */
const gameSoundEffects: IAudioAssetEntry[] = [
  {
    id: SoundEffect.COIN,
    path: './assets/sounds/effects/coin.wav',
  },
  {
    id: SoundEffect.COLLECT_HEART,
    path: './assets/sounds/effects/collect_heart.wav',
  },
  {
    id: SoundEffect.ENEMY_DEATH,
    path: './assets/sounds/effects/enemy_death.wav',
  },
  {
    id: SoundEffect.GAME_OVER,
    path: './assets/sounds/effects/game_over.wav',
  },
  {
    id: SoundEffect.GAME_START,
    path: './assets/sounds/effects/game_start.wav',
  },
  {
    id: SoundEffect.NEXT_LEVEL,
    path: './assets/sounds/effects/next_level.wav',
  },
];

export default gameSoundEffects;
