import DrawingEngineManager from './DrawingEngine/DrawingEngineManager';
import GameEngine from './GameEngine/GameEngine';
import { IGameSettings, IGameDimensions } from './GameEngine/types';
import { IDrawingEngine, Strategy } from './DrawingEngine/types';

export { Strategy, GameEngine, DrawingEngineManager };

export type { IDrawingEngine, IGameSettings, IGameDimensions };
