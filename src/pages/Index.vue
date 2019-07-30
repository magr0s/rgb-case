<script>
import { mapGetters } from 'vuex'

const NAVIGATOR = [
  {
    name: 'case',
    to: '/case1'
  }
]

export default {
  computed: {
    ...mapGetters({
      appName: 'app/getAppName'
    })
  },

  render (h) {
    return h(
      'QPage',
      {
        class: 'flex flex-center column',

        props: {
          padding: true
        }
      },
      [
        h(
          'h1',
          {
            class: 'text-h2 text-center'
          },
          [
            h(
              'QBadge',
              {
                class: 'q-py-sm',

                style: {
                  letterSpacing: '0.5px'
                },

                props: {
                  align: 'top',
                  color: 'grey-6'
                }
              },
              this.$t('for').toUpperCase()
            ),

            this.appName
          ]
        ),

        h(
          'QTabs',
          NAVIGATOR.map((item, i) => {
            const {
              name,
              to
            } = item

            return h(
              'QRouteTab',
              {
                props: {
                  label: this.$t(`route.${name}`) + ` ${i + 1}`,
                  to
                }
              }
            )
          })
        )
      ]
    )
  }
}
</script>
