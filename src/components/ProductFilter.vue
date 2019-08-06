<script>
const CATEGORIES = [
  { label: 'phone', value: 'phone' },
  { label: 'notebook', value: 'notebook' },
  { label: 'watch', value: 'watch' },
  { label: 'accessories', value: 'accessories' },
  { label: 'other', value: 'other' }
]

export default {
  props: {
    value: {
      type: Array,
      default: () => ([])
    }
  },

  computed: {
    options () {
      return CATEGORIES.map(item => ({
        label: this.$t(`catalog.${item.label}`),
        value: item.value
      }))
    }
  },

  render (h) {
    return h(
      'div',
      {
        class: 'q-pa-md  q-mb-lg',

        style: {
          backgroundColor: '#f4f4f4'
        }
      },
      [
        h(
          'QOptionGroup',
          {
            class: 'flex justify-between option-group--customize',

            props: {
              value: this.value,
              options: this.options,
              type: 'checkbox',
              inline: true
            },

            on: {
              input: value => (this.$emit('input', value))
            }
          }
        )
      ]
    )
  }
}
</script>

<style lang="stylus" scoped>
.option-group--customize >>>
  .q-checkbox
    &__inner
      padding 8px

      &--active
        .q-checkbox__bg
          svg
            display none

          &:before
            content ''
            position absolute
            width 8px
            height 8px
            top 50%
            left 50%
            margin-left -4px
            margin-top -4px
            background-color #ff8403

    &__bg
      width 18px
      height 18px
      border-color #d9d9d9 !important
      background-color white

    &__label
      color #222222
      font-family 'Segoe UI', sans-serif
      font-weight 600
      font-size 18px
</style>
