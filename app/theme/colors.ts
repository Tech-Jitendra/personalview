import {palette} from './palette';

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,

  appBackgroundColor: palette.mikadoYellow,
  defaultTextColor: palette.graphiteBlack,
  defaultErrorColor: palette.redError,
  defaultTextInputColor: palette.blackLight,
  // toastInfoBackground: palette.blue,
  // toastText: palette.white,
  // buttonPrimaryColor: palette.chineseBlue,
};
