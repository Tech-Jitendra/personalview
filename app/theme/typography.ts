import {StyleProp, TextStyle} from 'react-native';
// import {isIos} from 'utils/constants';
import {color} from './colors';
import {palette} from './palette';

enum TypographyType {
  extraSmallBold = 'extraSmallBold', //8px
  extraSamllRegular = 'extraSamllRegular',

  smallBold = 'smallBold', //10px
  samllRegular = 'samllRegular',

  mediumBold = 'mediumBold', //12px
  mediumRegular = 'mediumRegular',

  normalBold = 'normalBold', //14px
  normalRegular = 'normalRegular',

  bigBold = 'bigBold', //16px
  bigRegular = 'bigRegular',
  bigRegularUnderline = 'bigRegularUnderline',

  largeBold = 'largeBold', //18px
  largeRegular = 'largeRegular',

  extraLargeBold = 'extraLargeBold', //20px
  extraLargeRegular = 'extraLargeRegular',

  hugeBold = 'hugeBold', //24px
  hugeRegular = 'hugeRegular',

  massiveBold = 'massiveBold', //30px
  massiveRegular = 'massiveRegular',

  uighurHeading = 'uighurHeading', //56px
  uighurHeaderHeading = 'uighurHeaderHeading', //42px
}
const isIos = false;
export const boldFontFamily = isIos ? 'Arial GEO' : 'G_ari_bd';
export const regularFontFamily = isIos ? '2 typefaces' : 'arial';

export const typography: Record<TypographyType, StyleProp<TextStyle>> = {
  extraSmallBold: {
    fontSize: 8,
    lineHeight: 12,
    color: color.defaultTextColor,
    fontFamily: boldFontFamily,
  },
  extraSamllRegular: {
    fontSize: 8,
    lineHeight: 12,
    color: color.defaultTextColor,
    fontFamily: regularFontFamily,
  },
  smallBold: {
    fontSize: 10,
    lineHeight: 15,
    color: color.defaultTextColor,
    fontFamily: boldFontFamily,
  },
  samllRegular: {
    fontSize: 10,
    lineHeight: 15,
    color: color.defaultTextColor,
    fontFamily: regularFontFamily,
  },
  mediumBold: {
    fontSize: 12,
    lineHeight: 18,
    color: color.defaultTextColor,
    fontFamily: boldFontFamily,
  },
  mediumRegular: {
    fontSize: 12,
    lineHeight: 18,
    color: color.defaultTextColor,
    fontFamily: regularFontFamily,
  },

  normalBold: {
    fontSize: 14,
    lineHeight: 21,
    color: color.defaultTextColor,
    fontFamily: boldFontFamily,
  },
  normalRegular: {
    fontSize: 14,
    lineHeight: 21,
    color: color.defaultTextColor,
    fontFamily: regularFontFamily,
  },

  bigBold: {
    fontSize: 16,
    lineHeight: 24,
    color: color.defaultTextColor,
    fontFamily: boldFontFamily,
  },
  bigRegular: {
    fontSize: 16,
    lineHeight: 24,
    color: color.defaultTextColor,
    fontFamily: regularFontFamily,
  },
  bigRegularUnderline: {
    fontSize: 16,
    lineHeight: 24,
    color: color.defaultTextColor,
    fontFamily: regularFontFamily,
    textDecorationLine: 'underline',
  },

  largeBold: {
    fontSize: 18,
    lineHeight: 27,
    color: color.defaultTextColor,
    fontFamily: boldFontFamily,
  },
  largeRegular: {
    fontSize: 18,
    lineHeight: 27,
    color: color.defaultTextColor,
    fontFamily: regularFontFamily,
  },

  extraLargeBold: {
    fontSize: 20,
    lineHeight: 30,
    color: color.defaultTextColor,
    fontFamily: boldFontFamily,
  },
  extraLargeRegular: {
    fontSize: 20,
    lineHeight: 30,
    color: color.defaultTextColor,
    fontFamily: regularFontFamily,
  },
  hugeBold: {
    fontSize: 24,
    lineHeight: 36,
    color: color.defaultTextColor,
    fontFamily: boldFontFamily,
  },
  hugeRegular: {
    fontSize: 24,
    lineHeight: 36,
    color: color.defaultTextColor,
    fontFamily: regularFontFamily,
  },
  massiveBold: {
    fontSize: 30,
    lineHeight: 45,
    color: color.defaultTextColor,
    fontFamily: boldFontFamily,
  },
  massiveRegular: {
    fontSize: 30,
    lineHeight: 45,
    color: color.defaultTextColor,
    fontFamily: regularFontFamily,
  },
  uighurHeading: {
    fontSize: 56,
    lineHeight: 56,
    color: color.defaultTextColor,
    fontFamily: isIos ? 'Microsoft Uighur' : 'msuighur',
  },
  uighurHeaderHeading: {
    fontSize: 42,
    // lineHeight: 30,
    color: palette.raisinBlack,
    fontFamily: isIos ? 'Microsoft Uighur' : 'msuighur',
  },
};
