<script>
import { prepareProductPrice } from 'src/js/utils'

const MEMORY = [
  '32Gb', '64Gb', '128Gb', '256Gb'
]

const COLOR = [
  'white', 'black', 'grey'
]

const COUNT = [
  1, 2, 3, 4, 5
]

export default {
  props: {
    value: {
      type: Boolean,
      default: () => (false)
    },

    item: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      form: {
        memory: '64Gb',
        color: 'white',
        count: 1,
        ...this.item
      }
    }
  },

  computed: {
    colorOptions () {
      return COLOR.map(item => ({
        label: this.$t(`label.${item}`),
        value: item
      }))
    }
  },

  methods: {
    buyHandle () {
      const {
        name,
        memory,
        color,
        count
      } = this.form

      const message = `Client buy ${name}. Color: ${this.$t(`label.${color}`)}. Memory: ${memory}. Count: ${count}`

      this.$q.dialog({
        title: 'Order Data',
        message
      })

      this.$emit('input', false)
    }
  },

  render (h) {
    const {
      name,
      img,
      price
    } = this.item

    return h(
      'QDialog',
      {
        props: {
          value: this.value
        },

        on: {
          input: value => (this.$emit('input', value))
        }
      },
      [
        h(
          'QCard',
          {
            style: {
              width: '668px',
              maxWidth: '90vw'
            }
          },
          [
            h(
              'QCardSection',
              {
                class: 'row items-center q-mb-md',

                style: {
                  border: '1px solid #eee'
                }
              },
              [
                h(
                  'div',
                  {
                    class: 'product__title'
                  },
                  name
                ),

                h('QSpace'),

                h(
                  'QBtn',
                  {
                    props: {
                      icon: 'close',
                      flat: true,
                      round: true,
                      dense: true,
                      size: '12px'
                    },

                    directives: [
                      {
                        name: 'close-popup',
                        value: true
                      }
                    ]
                  }
                )
              ]
            ),

            h(
              'QCardSection',
              [
                h(
                  'div',
                  {
                    class: 'row items-center'
                  },
                  [
                    h(
                      'div',
                      {
                        class: 'col-xs-12 col-sm-4 q-mb-md'
                      },
                      [
                        h(
                          'QImg',
                          {
                            props: {
                              src: img
                            }
                          }
                        )
                      ]
                    ),

                    h(
                      'div',
                      {
                        class: 'col-xs-12 col-sm-7 offset-sm-1'
                      },
                      [
                        h(
                          'QForm',
                          [
                            h(
                              'div',
                              {
                                class: 'row q-col-gutter-lg q-mb-md'
                              },
                              [
                                h(
                                  'div',
                                  {
                                    class: 'col-xs-6 col-sm-5'
                                  },
                                  [
                                    h(
                                      'label',
                                      {
                                        class: 'label--top'
                                      },
                                      this.$t('label.memory')
                                    ),

                                    h(
                                      'QSelect',
                                      {
                                        props: {
                                          value: this.form.memory,
                                          dense: true,
                                          outlined: true,
                                          options: MEMORY,
                                          optionsDense: true,
                                          mapOptions: true
                                        },

                                        on: {
                                          input: value => (this.form.memory = value)
                                        }
                                      }
                                    )
                                  ]
                                ),

                                h(
                                  'div',
                                  {
                                    class: 'col-xs-6 col-sm-5'
                                  },
                                  [
                                    h(
                                      'label',
                                      {
                                        class: 'label--top'
                                      },
                                      this.$t('label.color')
                                    ),

                                    h(
                                      'QSelect',
                                      {
                                        props: {
                                          value: this.form.color,
                                          dense: true,
                                          outlined: true,
                                          options: this.colorOptions,
                                          optionsDense: true,
                                          optionLabel: 'label',
                                          optionValue: 'value',
                                          mapOptions: true
                                        },

                                        on: {
                                          input: value => (this.form.color = value)
                                        }
                                      }
                                    )
                                  ]
                                )
                              ]
                            ),

                            h(
                              'div',
                              {
                                class: 'row q-col-gutter-lg q-mb-md'
                              },
                              [
                                h(
                                  'div',
                                  {
                                    class: 'col-xs-6 col-sm-5'
                                  },
                                  [
                                    h(
                                      'label',
                                      {
                                        class: 'label--top'
                                      },
                                      this.$t('label.count')
                                    ),

                                    h(
                                      'QSelect',
                                      {
                                        props: {
                                          value: this.form.count,
                                          dense: true,
                                          outlined: true,
                                          options: COUNT,
                                          optionsDense: true,
                                          mapOptions: true
                                        },

                                        on: {
                                          input: value => (this.form.count = value)
                                        }
                                      }
                                    )
                                  ]
                                )
                              ]
                            ),

                            h(
                              'div',
                              {
                                class: 'row q-col-gutter-lg'
                              },
                              [
                                h(
                                  'div',
                                  {
                                    class: 'col-xs-6 col-sm-5'
                                  },
                                  [
                                    h(
                                      'div',
                                      {
                                        class: 'product__price text-black',

                                        domProps: {
                                          innerHTML: prepareProductPrice(price)
                                        }
                                      }
                                    )
                                  ]
                                ),

                                h(
                                  'div',
                                  {
                                    class: 'col-xs-6 col-sm-5'
                                  },
                                  [
                                    h(
                                      'QBtn',
                                      {
                                        class: 'q-mt-sm q-px-lg',

                                        props: {
                                          label: this.$t('btn.buy'),
                                          color: 'accent',
                                          noCaps: true
                                        },

                                        on: {
                                          click: this.buyHandle
                                        },

                                        directives: [
                                          {
                                            name: 'close-popup'
                                          }
                                        ]
                                      }
                                    )
                                  ]
                                )
                              ]
                            ),

                            h(
                              'div',
                              {
                                class: 'q-mt-sm'
                              },
                              [
                                h(
                                  'a',
                                  {
                                    class: 'text-accent font-weight-medium',

                                    style: {
                                      fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif'
                                    },

                                    attrs: {
                                      href: '/'
                                    }
                                  },
                                  this.$t('label.detail')
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
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
