/**
 * Represents an error that should be thrown when the canvas could not be loaded.
 */
 class UnableToLoadCanvas extends Error {
  constructor(message?: string) {
    super(`Unable to load canvas: ${message}`);
  }
}

export default UnableToLoadCanvas;
