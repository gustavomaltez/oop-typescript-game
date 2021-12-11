/**
 * Represents an error that should be thrown when the drawn engine could not be
 * loaded successfully.
 */
class UnableToLoadDrawnEngine extends Error {
  constructor(message?: string) {
    super(`Unable to load strategy: ${message}`);
  }
}

export default UnableToLoadDrawnEngine;
