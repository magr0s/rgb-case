<script>
import {
  ConsultationDialog,
  MenuDialog
} from 'components/dialogs'

const NAVIGATOR = [
  { name: 'service', to: '/case1/service' },
  { name: 'project', to: '/case1/project' },
  { name: 'about', to: '/case1/about' },
  { name: 'price', to: '/case1/price' },
  { name: 'contact', to: '/case1/contact' }
]

const PHONE = '+7 342 225-00-75'

export default {
  components: {
    ConsultationDialog,
    MenuDialog
  },

  data () {
    return {
      dialog: false,
      menuDialog: false
    }
  },

  render (h) {
    return h(
      'QHeader',
      {
        class: 'q-py-lg',

        style: {
          backgroundColor: '#f2f5f7'
        }
      },
      [
        h(
          'MenuDialog',
          {
            props: {
              value: this.menuDialog,
              navigator: NAVIGATOR
            },

            on: {
              input: value => (this.menuDialog = value)
            }
          }
        ),

        h(
          'ConsultationDialog',
          {
            props: {
              value: this.dialog
            },

            on: {
              input: value => (this.dialog = value)
            }
          }
        ),

        h(
          'QToolbar',
          {
            class: 'bg-transparent text-black q-px-xl',

            style: {
              maxWidth: '1400px',
              margin: 'auto'
            },

            directives: [
              {
                name: 'dynamic-padding'
              }
            ]
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
                    },

                    directives: [
                      {
                        name: 'dynamic-box-size'
                      }
                    ]
                  }
                )
              ]
            ),

            h('QSpace'),

            h(
              'QTabs',
              {
                class: 'q-mr-md gt-md',

                style: {
                  marginTop: '6px',
                  marginRight: '16px'
                },

                props: {
                  indicatorColor: 'transparent'
                }
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
                        paddingLeft: '14px',
                        paddingRight: '14px'
                      },

                      props: {
                        label: this.$t(`route.${name}`),
                        to
                      },

                      nativeOn: {
                        mouseenter: (evt) => {
                          evt.target.classList.add('link--hovered')
                        },

                        mouseleave: (evt) => {
                          evt.target.classList.remove('link--hovered')
                        }
                      }
                    }
                  )
                })
              ]
            ),

            h(
              'QBtn',
              {
                class: 'q-mr-sm link--hovered gt-sm',

                style: {
                  marginTop: '6px',
                  marginRight: '12px'
                },

                props: {
                  label: PHONE,
                  flat: true,
                  color: 'primary',
                  to: `tel:${PHONE}`
                }
              }
            ),

            h(
              'QBtn',
              {
                class: 'gt-xs',

                style: {
                  borderWidth: '2px',
                  marginTop: '6px',
                  minHeight: '51px',
                  paddingLeft: '28px',
                  paddingRight: '28px'
                },

                props: {
                  label: this.$t('btn.consultation'),
                  color: 'primary',
                  outline: true,
                  rounded: true
                },

                on: {
                  click: () => (this.dialog = true)
                },

                nativeOn: {
                  mouseenter: (evt) => {
                    evt.target.classList.add('btn--hovered')
                  },

                  mouseleave: (evt) => {
                    evt.target.classList.remove('btn--hovered')
                  }
                }
              }
            ),

            h(
              'QBtn',
              {
                class: 'lt-lg q-ml-md',

                style: {
                  marginTop: '6px'
                },

                props: {
                  icon: 'menu',
                  flat: true,
                  round: true,
                  size: (this.$q.screen.gt.sm) ? 'lg' : 'md'
                },

                on: {
                  click: () => (this.menuDialog = true)
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
