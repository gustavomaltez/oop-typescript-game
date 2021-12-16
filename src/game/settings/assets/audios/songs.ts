import { IAudioAssetEntry } from '@byte-eight-engine/engines';
import { Songs } from '../../ids';

/**
 * Represents all game songs that will be available during the game.
 */
const gameSongs: IAudioAssetEntry[] = [
  {
    id: Songs.BACKGROUND,
    path: './assets/sounds/music/background.mp3',
  },
  {
    id: Songs.MENU,
    path: './assets/sounds/music/menu.mp3',
  },
];

export default gameSongs;
