/**
 * NOTE TO DEVS:
 *
 * Spacing should consistent and whitespace thought of as a first class technique up
 * there with color and typefaces.
 *
 * Which type of scale you use is based on the design.
 *
 * If you've got simpler app, you may only need 10 items.  Or maybe you want a spacing scale
 * to be named:
 *
 * export const spacing = {
 *   0. none: 0
 *   1. tiny: 4,
 *   2. smaller: 8
 *   3. small: 12,
 *   4. medium: 16,
 *   5. medium+: 18
 *   6. large: 20,
 *   7. large+: 24,
 *   8. huge: 32,
 *   9. huge+ :42
 *   10. massive: 48
 *   11. massivePluse:64
 *   12. grand: 100
 * }
 *
 * Whatever you choose, try to stick with these, and not freestyle it everywhere.
 *
 */

const spacing = [0, 4, 8, 12, 16, 18, 20, 24, 32, 42, 48, 64, 100];

/** Spacing **/
export const Spacing = {
  none: spacing[0],
  tiny: spacing[1],
  smaller: spacing[2],
  small: spacing[3],
  medium: spacing[4],
  mediumPlus: spacing[5],
  large: spacing[6],
  largePlus: spacing[7],
  huge: spacing[8],
  hugePlus: spacing[9],
  massive: spacing[10],
  massivePlus: spacing[11],
  grand: spacing[12],
};
