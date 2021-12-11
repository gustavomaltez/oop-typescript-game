/**
 * Represents an error that should be thrown when the drawing engine manager is unable to
 * load some strategy.
 */
class UnableToLoadStrategy extends Error {
  constructor(message?: string) {
    super(`Unable to load strategy: ${message}`);
  }
}

export default UnableToLoadStrategy;
