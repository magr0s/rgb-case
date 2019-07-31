<script>
const NAVIGATOR = [
  { name: 'service', to: '/case1/service' },
  { name: 'project', to: '/case1/project' },
  { name: 'about', to: '/case1/about' },
  { name: 'price', to: '/case1/price' },
  { name: 'contact', to: '/case1/contact' }
]

const PHONE = '+7 342 225-00-75'

export default {
  data () {
    return {
      dialog: false
    }
  },

  render (h) {
    return h(
      'QHeader',
      {
        class: 'q-py-lg q-px-xl',

        style: {
          backgroundColor: '#f2f5f7'
        }
      },
      [
        h(
          'QDialog',
          {
            props: {
              value: this.dialog
            },

            on: {
              input: value => (this.dialog = value)
            }
          },
          [
            h(
              'QCard',
              {
                style: {
                  width: '1280px',
                  maxWidth: '90vw',
                  height: '786px',
                  maxHeight: '90vh',
                  overflow: 'visible'
                },

                props: {
                  square: true
                }
              },
              [
                h(
                  'QBtn',
                  {
                    class: 'absolute z-top',

                    style: {
                      top: '-30px',
                      right: '-30px'
                    },

                    props: {
                      color: 'primary',
                      icon: 'close',
                      unelevated: true,
                      round: true,
                      size: 'lg'
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
                    class: 'fit'
                  }
                )
              ]
            )
          ]
        ),

        h(
          'QToolbar',
          {
            class: 'bg-transparent text-black q-py-xs',

            style: {
              maxWidth: '1400px',
              margin: 'auto'
            }
          },
          [
            h(
              'QToolbarTitle',
              {
                style: {
                  minWidth: '234px'
                }
              },
              [
                h(
                  'QImg',
                  {
                    style: {
                      height: '40px',
                      width: '234px'
                    },

                    props: {
                      src: 'statics/logo.png'
                    }
                  }
                )
              ]
            ),

            h('QSpace'),

            h(
              'QTabs',
              {
                class: 'q-mr-md'
              },
              [
                ...NAVIGATOR.map((item) => {
                  const {
                    name,
                    to
                  } = item

                  return h(
                    'QRouteTab',
                    {
                      class: 'tab--customize',

                      style: {
                        paddingLeft: '12px',
                        paddingRight: '12px'
                      },

                      props: {
                        label: this.$t(`route.${name}`),
                        to
                      }
                    }
                  )
                })
              ]
            ),

            h(
              'QBtn',
              {
                class: 'q-mr-sm',

                props: {
                  label: PHONE,
                  flat: true,
                  color: 'primary'
                }
              }
            ),

            h(
              'QBtn',
              {
                props: {
                  label: this.$t('case1.consultation'),
                  color: 'primary',
                  outline: true,
                  rounded: true
                },

                on: {
                  click: () => (this.dialog = true)
                }
              }
            )
          ]
        )
      ]
    )
  }
}
</script>

<style lang="stylus" scoped>
.tab--customize >>>
  .q-tab__content
    min-width auto
</style>
