import DrawingEngineManager from './DrawingEngine/DrawingEngineManager';
import GameEngine from './GameEngine/GameEngine';
import AssetsEngine from './AssetsEngine/AssetsEngine';
import { IGameSettings, ICanvasSize } from './GameEngine/types';
import { IDrawingEngine, Strategy } from './DrawingEngine/types';
import Canvas from './DrawingEngine/strategies/Canvas/Canvas';

import {
  IAssetsData,
  IAssetsSettings,
  IAudioAssetEntry,
  ISpriteDimensions,
  ISpriteAssetEntry,
  ILoadedAudioAssetEntry,
  ILoadedSpriteAssetEntry,
} from './AssetsEngine/types';

export { Canvas, Strategy, GameEngine, AssetsEngine, DrawingEngineManager };

export type {
  IAssetsData,
  ICanvasSize,
  IGameSettings,
  IDrawingEngine,
  IAssetsSettings,
  IAudioAssetEntry,
  ISpriteAssetEntry,
  ISpriteDimensions,
  ILoadedAudioAssetEntry,
  ILoadedSpriteAssetEntry,
};
