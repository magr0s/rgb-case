<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: () => (false)
    },

    navigator: {
      type: Array,
      default: () => ([])
    }
  },

  render (h) {
    return h(
      'QDialog',
      {
        props: {
          value: this.value,
          maximized: true,
          transitionShow: 'flip-right',
          transitionHide: 'fade'
        },

        on: {
          input: value => (this.$emit('input', value))
        }
      },
      [
        h(
          'QCard',
          {
            class: 'acrobat-bold-font',

            style: {
              backgroundColor: '#f2f5f7'
            }
          },
          [
            h(
              'QBtn',
              {
                class: 'absolute-top-right z-top',

                props: {
                  icon: 'close',
                  size: 'lg',
                  flat: true,
                  round: true,
                  dense: true
                },

                directives: [
                  {
                    name: 'close-popup',
                    value: true
                  }
                ]
              }
            ),

            h(
              'QCardSection',
              {
                class: 'flex items-center justify-center fit'
              },
              [
                h(
                  'QList',
                  this.navigator.map((item) => {
                    const {
                      name,
                      to
                    } = item

                    return h(
                      'QItem',
                      {
                        class: 'q-my-md',

                        props: {
                          to
                        }
                      },
                      [
                        h(
                          'QItemSection',
                          {
                            class: 'text-center text-h4 text-weight-bold'
                          },
                          this.$t(`route.${name}`)
                        )
                      ]
                    )
                  })
                )
              ]
            )
          ]
        )
      ]
    )
  }
}
</script>
