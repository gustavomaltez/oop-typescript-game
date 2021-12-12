/**
 * Represents an error that should be thrown when the assets could not be loaded
 * correctly.
 */
class UnableToLoadAssets extends Error {
  constructor(message?: string) {
    super(`Unable to load game assets: ${message}`);
  }
}

export default UnableToLoadAssets;
