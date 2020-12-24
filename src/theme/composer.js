// @flow
import type, {Palette} from "./types";

/**
 * Revert the palette
 * @example
 * reversePalette({primary: ['red', 'green', 'blue']})
 * // {primary: ['blue', 'green', 'red']}
 */
export const reversePalette = (palette: Palette): Palette =>
  Object.keys(palette).reduce((newPalette, key) => ({
    ...newPalette,
    [key]: [...palette[key]].reverse()
  }), {});
