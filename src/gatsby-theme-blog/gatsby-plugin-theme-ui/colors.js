import merge from 'deepmerge'
import defaultThemeColors from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors'

const primary = `#f90`
const secondary = `#06f`
const background = `#111`

export default merge(defaultThemeColors, {
  text: background,
  primary: primary,
  heading: secondary,
  modes: {
    dark: {
      background: background,
      primary: primary,
      highlight: primary
    }
  }
})
