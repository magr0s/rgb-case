<script>
import { Case1Header } from 'components/headers'

export default {
  components: {
    Case1Header
  },

  render (h) {
    return h(
      'QLayout',
      {
        class: 'acrobat-bold-font'
      },
      [
        h('Case1Header'),

        h(
          'QPageContainer',
          [
            h('RouterView')
          ]
        )
      ]
    )
  }
}
</script>
