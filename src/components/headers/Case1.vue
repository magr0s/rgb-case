<script>
import { ConsultationDialog } from 'components/dialogs'

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
    ConsultationDialog
  },

  data () {
    return {
      dialog: false
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
                class: 'q-mr-md',

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
                      class: 'tab--customize link--hovered',

                      style: {
                        paddingLeft: '14px',
                        paddingRight: '14px'
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
                class: 'q-mr-sm link--hovered',

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
                    evt.target.classList.add('hover-style')
                  },

                  mouseleave: (evt) => {
                    evt.target.classList.remove('hover-style')
                  }
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
.hover-style
  box-shadow 5px 9px 15px 0px rgba(0, 99, 217, 0.3)
  background-color #17a4fd !important
  color white !important
  border-color #17a4fd !important

.tab--customize >>>
  .q-tab__content
    min-width auto
</style>
