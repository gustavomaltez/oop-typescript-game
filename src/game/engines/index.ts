import DrawingEngineManager from "./DrawingEngine/DrawingEngineManager";
import GameEngine from "./GameEngine";
import { IDrawingEngine, Strategy, StrategyMap } from './DrawingEngine/types';

export {
  Strategy,
  GameEngine,
  DrawingEngineManager
};

export type {
  IDrawingEngine,
  StrategyMap,
}
