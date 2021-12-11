/**
 * Represents an error that should be thrown when there's some attempt to get
 * the canvas context and isn't  available at moment.
 */
class UnableToGetCanvasContext extends Error {
  constructor(message?: string) {
    super(`Unable to get canvas context: ${message}`);
  }
}

export default UnableToGetCanvasContext;
