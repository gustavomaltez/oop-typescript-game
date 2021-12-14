/**
 * Represents an error that should be thrown when the drawing engine could not be
 * loaded successfully.
 */
class UnableToLoadDrawingEngine extends Error {
  constructor(message?: string) {
    super(`Unable to load drawing engine: ${message}`);
  }
}

export default UnableToLoadDrawingEngine;
