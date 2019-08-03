import { dom, Screen } from 'quasar'

const {
  css,
  style
} = dom

const PADDING_MOD_STEP = 20
const FONT_SIZE_MOD_STEP = 5
const BOX_SIZE_MOD_STEP = 5
const HEIGHT_MOD_STEP = 5

const dynamicPadding = {
  inserted: function (el, { value }) {
    const padding = style(el, 'padding').split(' ')

    const top = parseInt(padding[0])
    const right = (typeof (padding[1]) !== 'undefined') ? parseInt(padding[1]) : top
    const bottom = (typeof (padding[2]) !== 'undefined') ? parseInt(padding[2]) : top
    const left = (typeof (padding[3]) !== 'undefined') ? parseInt(padding[3]) : right

    css(el, DOMResponsive.padding({
      top,
      right,
      bottom,
      left
    }, value))

    window.addEventListener('resize', () => {
      css(el, DOMResponsive.padding({
        top,
        right,
        bottom,
        left
      }, value))
    })
  }
}

const dynamicFontSize = {
  inserted: function (el, { value }) {
    const fontSize = parseInt(style(el, 'font-size'))
    const lineHeight = parseInt(style(el, 'line-height'))

    css(el, DOMResponsive.fontSize({ fontSize, lineHeight }, value))

    window.addEventListener('resize', () => {
      css(el, DOMResponsive.fontSize({ fontSize, lineHeight }, value))
    })
  }
}

const dynamicBoxSize = {
  inserted: function (el, { value }) {
    const width = style(el, 'width')
    const height = style(el, 'height')

    css(el, DOMResponsive.boxSize({ width, height }, value))

    window.addEventListener('resize', () => {
      css(el, DOMResponsive.boxSize({ width, height }, value))
    })
  }
}

const dynamicHeight = {
  inserted: function (el, { value }) {
    const height = style(el, 'height')

    css(el, DOMResponsive.height(height, value))

    window.addEventListener('resize', () => {
      css(el, DOMResponsive.height(height, value))
    })
  },

  update: function (el, { value }) {
    const height = style(el, 'height')

    css(el, DOMResponsive.height(height, value))
  }
}

const dynamicBgOffsetX = {
  inserted: function (el, { value = 1264 }) {
    const bgPosition = style(el, 'background-position').split(' ')
    const modifier = 100 - value * 100 / 1920

    css(el, DOMResponsive.bgOffsetX(bgPosition, modifier))

    window.addEventListener('resize', () => {
      DOMResponsive.bgOffsetX(bgPosition, modifier)
    })
  },

  update: function (el, { value = 1264 }) {
    const bgPosition = style(el, 'background-position').split(' ')
    const modifier = 100 - value * 100 / 1920

    css(el, DOMResponsive.bgOffsetX(bgPosition, modifier))
  }
}

export {
  dynamicPadding,
  dynamicFontSize,
  dynamicBoxSize,
  dynamicHeight,
  dynamicBgOffsetX
}

class DOMResponsive {
  static boxSize (size, mod = BOX_SIZE_MOD_STEP) {
    const modificator = getModificator_(mod)
    const {
      width,
      height
    } = size

    return {
      width: calc_(width, modificator),
      height: calc_(height, modificator)
    }
  }

  static padding (padding, mod = PADDING_MOD_STEP) {
    const modificator = getModificator_(mod)
    const {
      top,
      right,
      bottom,
      left
    } = padding

    return {
      paddingTop: calc_(top, modificator),
      paddingRight: calc_(right, modificator),
      paddingBottom: calc_(bottom, modificator),
      paddingLeft: calc_(left, modificator)
    }
  }

  static fontSize (size, mod = FONT_SIZE_MOD_STEP) {
    const modificator = getModificator_(mod)
    const {
      fontSize,
      lineHeight
    } = size

    return {
      fontSize: calc_(fontSize, modificator),
      lineHeight: calc_(lineHeight, modificator)
    }
  }

  static height (height, mod = HEIGHT_MOD_STEP) {
    const modificator = getModificator_(mod)

    return {
      height: calc_(height, modificator)
    }
  }

  static bgOffsetX (position, mod) {
    const offset = Math.round(Screen.width / 100 * mod)

    position[0] = `${offset}px`

    return {
      backgroundPosition: position.join(' ')
    }
  }
}

function calc_ (str, m) {
  const value = parseInt(str) / 100 * m

  return `${Math.round(value)}px`
}

function getModificator_ (mod) {
  let modificator = 100

  if (Screen.lg) {
    modificator -= mod
  } else if (Screen.md) {
    modificator -= (mod * 2)
  } else if (Screen.sm) {
    modificator -= (mod * 3)
  } else if (Screen.xs) {
    modificator -= (mod * 4)
  }

  return modificator
}
