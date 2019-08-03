import {
  dynamicPadding,
  dynamicFontSize,
  dynamicBoxSize,
  dynamicHeight,
  dynamicBgOffsetX
} from 'src/js/directives'

export default async ({ Vue }) => {
  Vue.directive('dynamic-padding', dynamicPadding)
  Vue.directive('dynamic-font-size', dynamicFontSize)
  Vue.directive('dynamic-box-size', dynamicBoxSize)
  Vue.directive('dynamic-height', dynamicHeight)
  Vue.directive('dynamic-bg-offset-x', dynamicBgOffsetX)
}
