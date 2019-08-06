<script>
import ProductFilter from 'components/ProductFilter'
import ProductCatalog from 'components/ProductCatalog'
import { BuyDialog } from 'components/dialogs'

export default {
  components: {
    ProductFilter,
    ProductCatalog,
    BuyDialog
  },

  data () {
    return {
      filter: [],
      buyItem: {},
      buyDialog: false
    }
  },

  methods: {
    buyHandle (item) {
      this.buyItem = item
    }
  },

  render (h) {
    return h(
      'QPage',
      {
        class: 'flex justify-center items-center column',

        props: {
          padding: true
        }
      },
      [
        h(
          'BuyDialog',
          {
            props: {
              value: this.buyDialog,
              item: this.buyItem
            },

            on: {
              input: value => (this.buyDialog = value)
            }
          }
        ),

        h(
          'div',
          {
            style: {
              width: '1200px',
              maxWidth: '100%'
            }
          },
          [
            h(
              'ProductFilter',
              {
                props: {
                  value: this.filter
                },

                on: {
                  input: value => (this.filter = value)
                }
              }
            ),

            h(
              'ProductCatalog',
              {
                props: {
                  filter: this.filter
                },

                on: {
                  buy: this.buyHandle
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
