import Typography from "typography";
import grandViewTheme from "typography-theme-grand-view";

grandViewTheme.baseLineHeight = 1.45;

const typography = new Typography(grandViewTheme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
