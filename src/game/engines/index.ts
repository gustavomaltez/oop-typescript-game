import DrawingEngineManager from './DrawingEngine/DrawingEngineManager';
import GameEngine from './GameEngine/GameEngine';
import AssetsEngine from './AssetsEngine/AssetsEngine';
import { IGameSettings, ICanvasSize } from './GameEngine/types';
import { IDrawingEngine, Strategy } from './DrawingEngine/types';
import {
  IAssetsData,
  IAssetsSettings,
  IAudioAssetEntry,
  ISpriteAssetEntry,
  ILoadedAudioAssetEntry,
  ILoadedSpriteAssetEntry,
} from './AssetsEngine/types';

export { Strategy, GameEngine, AssetsEngine, DrawingEngineManager };

export type {
  IAssetsData,
  ICanvasSize,
  IGameSettings,
  IDrawingEngine,
  IAssetsSettings,
  IAudioAssetEntry,
  ISpriteAssetEntry,
  ILoadedAudioAssetEntry,
  ILoadedSpriteAssetEntry,
};
