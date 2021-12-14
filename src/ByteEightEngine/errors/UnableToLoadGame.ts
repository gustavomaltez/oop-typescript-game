/**
 * Represents an error that should be thrown when the game for some reason could
 * not be loaded.
 */
class UnableToLoadGame extends Error {
  constructor(message?: string) {
    super(`Unable to load game: ${message}`);
  }
}

export default UnableToLoadGame;
