<script>
import { prepareProductPrice } from 'src/js/utils'

const PRODUCTS = [
  {
    id: 1,
    name: 'Iphone 5',
    price: '519.00',
    img: 'statics/product.jpg',
    category: 'phone'
  },
  {
    id: 2,
    name: 'Iphone 5',
    price: '519.00',
    img: 'statics/product.jpg',
    category: 'phone'
  },
  {
    id: 3,
    name: 'Iphone 5',
    price: '519.00',
    img: 'statics/product.jpg',
    category: 'notebook'
  },
  {
    id: 4,
    name: 'Iphone 5',
    price: '519.00',
    img: 'statics/product.jpg',
    category: 'notebook'
  },
  {
    id: 5,
    name: 'Iphone 5',
    price: '519.00',
    img: 'statics/product.jpg',
    category: 'watch'
  },
  {
    id: 6,
    name: 'Iphone 5',
    price: '519.00',
    img: 'statics/product.jpg',
    category: 'watch'
  },
  {
    id: 7,
    name: 'Iphone 5',
    price: '519.00',
    img: 'statics/product.jpg',
    category: 'accessories'
  },
  {
    id: 8,
    name: 'Iphone 5',
    price: '519.00',
    img: 'statics/product.jpg',
    category: 'other'
  }
]

export default {
  props: {
    filter: {
      type: Array,
      default: () => ([])
    }
  },

  computed: {
    products () {
      return (this.filter.length)
        ? PRODUCTS.filter(item => (this.filter.includes(item.category)))
        : PRODUCTS
    }
  },

  render (h) {
    return h(
      'div',
      {
        class: 'row q-col-gutter-lg'
      },
      [
        ...this.products.map((item) => {
          const {
            name,
            img,
            price
          } = item

          return h(
            'div',
            {
              class: 'col-xs-12 col-sm-6 col-md-4 col-lg-3'
            },
            [
              h(
                'QCard',
                {
                  class: 'shadow-transition product',

                  props: {
                    bordered: true,
                    square: true,
                    flat: true
                  },

                  on: {
                    click: () => {
                      if (this.$q.screen.lt.md) {
                        this.$emit('buy', item)
                      }
                    }
                  },

                  nativeOn: {
                    mouseenter: (evt) => {
                      evt.target.classList.add('shadow-5')
                      evt.target.classList.remove('no-shadow')
                    },

                    mouseleave: (evt) => {
                      evt.target.classList.add('no-shadow')
                      evt.target.classList.remove('shadow-5')
                    }
                  }
                },
                [
                  h(
                    'QCardSection',
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
                    'QCardSection',
                    {
                      style: {
                        paddingBottom: '34px'
                      }
                    },
                    [
                      h(
                        'div',
                        {
                          class: 'product__title text-center'
                        },
                        name
                      ),

                      h(
                        'div',
                        {
                          class: 'product__price text-center',

                          domProps: {
                            innerHTML: prepareProductPrice(price)
                          }
                        }
                      )
                    ]
                  ),

                  h(
                    'QBtn',
                    {
                      class: 'absolute-center product__btn-buy q-px-lg',

                      style: {
                        top: 'auto',
                        bottom: '-34px',
                        height: '34px'
                      },

                      props: {
                        color: 'accent',
                        label: this.$t('btn.buy'),
                        dense: true,
                        unelevated: true,
                        noCaps: true
                      },

                      on: {
                        click: () => (this.$emit('buy', item))
                      }
                    }
                  )
                ]
              )
            ]
          )
        }),

        h(
          'div',
          {
            class: 'col-12 text-center q-mt-xl'
          },
          [
            h(
              'span',
              {
                class: 'text-accent'
              },
              '* '
            ),

            h(
              'span',
              {
                class: 'text-grey-5'
              },
              this.$t('alert.catalog')
            )
          ]
        )
      ]
    )
  }
}
</script>
