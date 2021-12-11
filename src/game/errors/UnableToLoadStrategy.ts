/**
 * Represents an error that should be thrown when the drawn engine manager is unable to
 * load some strategy.
 */
class UnableToLoadStrategy extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export default UnableToLoadStrategy;
