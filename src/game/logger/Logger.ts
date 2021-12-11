import { Service } from "./types";

/**
 * Represents an abstraction to log data into browser console.
 */
abstract class Logger {

  private static isEnabled = true;

  public static enableLog = () => this.isEnabled = true;

  public static disableLog = () => this.isEnabled = false;

  /**
   * Logs a informative message into console.
   *
   * @param {Service} service The service that triggered this info message
   * @param {string} message The info message to log into console.
   * @param {unknown} extra Some extra data to log into console.
   */
  public static info = (service: Service, message: string, extra?: unknown) => {
    if (!this.isEnabled) return;

    console.info(
      `%c[${service}]%c ${message}`,
      'background: #000; color: #55abda; font-weight: bold;',
      'background: transparent; color: #55abda',
    )

    if (!extra) return;

    console.info(`[${service}]`, extra);
  }

  /**
   * Logs a warn message into console.
   *
   * @param {Service} service The service that triggered this warn message
   * @param {string} message The warn message to log into console.
   * @param {unknown} extra Some extra data to log into console.
   */
  public static warn = (service: Service, message: string, extra?: unknown) => {
    if (!this.isEnabled) return;

    console.warn(
      `%c[${service}]%c ${message}`,
      'background: #000; color: #dad155; font-weight: bold;',
      'background: transparent; color: #dad155',
    );

    if (!extra) return;

    console.info(`[${service}]`, extra);
  }

  /**
   * Logs a error message into console.
   *
   * @param {Service} service The service that triggered this warn message
   * @param {string} message The error message to log into console.
   * @param {unknown} extra Some extra data to log into console.
   */
  public static error = (service: Service, message: string, extra?: unknown) => {
    if (!this.isEnabled) return;

    console.error(
      `%c[${service}]%c ${message}`,
      'background: #000; color: #e63737; font-weight: bold;',
      'background: transparent; color: #e63737',
    );

    if (!extra) return;

    console.info(`[${service}]`, extra);
  }
}

export default Logger;
