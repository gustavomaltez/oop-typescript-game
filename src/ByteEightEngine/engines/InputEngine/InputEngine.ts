abstract class InputEngine {
  public static currentPressedKey: string;

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
