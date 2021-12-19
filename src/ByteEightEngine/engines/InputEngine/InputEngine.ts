/**
 * An abstractor to monitors the user keyboard input.
 */
abstract class InputEngine {
  /**
   * The current pressed key by the user.
   */
  public static currentPressedKey: string;

  /**
   * Setup the keyboard event listeners
   */
  public static initialize = () => {
    window.addEventListener('keypress', ({ key }) => {
      InputEngine.currentPressedKey = key;
    });

    window.addEventListener('keyup', () => {
      InputEngine.currentPressedKey = '';
    });
  };
}

export default InputEngine;
