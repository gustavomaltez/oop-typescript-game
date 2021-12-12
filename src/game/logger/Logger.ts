/* eslint-disable no-console */
import { Service, ServiceLogColor } from './types';

/**
 * Represents an abstraction to log data into browser console.
 */
abstract class Logger {
  private static isEnabled = true;

  public static enableLog = () => (this.isEnabled = true);

  public static disableLog = () => (this.isEnabled = false);

  /**
   * Gets the service log color.
   *
   * @param {Service} service The service to get log color.
   * @returns {string} The hexadecimal service log color.
   */
  private static getLogColor = (service: Service): string => {
    const DEFAULT_COLOR = '#55abda';

    const colors: ServiceLogColor = {
      [Service.GAME_ENGINE]: '#daa555',
      [Service.DRAWN_ENGINE_MANAGER]: '#da7455',
      [Service.CANVAS_LOADER]: '#7b55da',
      [Service.CANVAS_CONTEXT_LOADER]: '#ae55da',
      [Service.CANVAS_STRATEGY]: '#55dab0',
    };

    const color = colors[service];

    if (color) return color;

    return DEFAULT_COLOR;
  };

  /**
   * Logs a informative message into console.
   *
   * @param {Service} service The service that triggered this info message
   * @param {string} message The info message to log into console.
   * @param {unknown} extra Some extra data to log into console.
   */
  public static info = (service: Service, message: string, extra?: unknown) => {
    if (!this.isEnabled) return;

    const color = this.getLogColor(service);

    console.info(
      `%c[${service}]%c ${message}`,
      `background: #000; color: ${color}; font-weight: bold;`,
      'background: transparent; color: #55abda',
    );

    if (!extra) return;

    console.info(`[${service}]`, extra);
  };

  /**
   * Logs a warn message into console.
   *
   * @param {Service} service The service that triggered this warn message
   * @param {string} message The warn message to log into console.
   * @param {unknown} extra Some extra data to log into console.
   */
  public static warn = (service: Service, message: string, extra?: unknown) => {
    if (!this.isEnabled) return;

    const color = this.getLogColor(service);

    console.warn(
      `%c[${service}]%c ${message}`,
      `background: #000; color: ${color}; font-weight: bold;`,
      'background: transparent; color: #dad155',
    );

    if (!extra) return;

    console.info(`[${service}]`, extra);
  };

  /**
   * Logs a error message into console.
   *
   * @param {Service} service The service that triggered this warn message
   * @param {string} message The error message to log into console.
   * @param {unknown} extra Some extra data to log into console.
   */
  public static error = (
    service: Service,
    message: string,
    extra?: unknown,
  ) => {
    if (!this.isEnabled) return;

    const color = this.getLogColor(service);

    console.error(
      `%c[${service}]%c ${message}`,
      `background: #000; color: ${color}; font-weight: bold;`,
      'background: transparent; color: #e63737',
    );

    if (!extra) return;

    console.info(`[${service}]`, extra);
  };
}

export default Logger;
