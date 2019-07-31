<script>
import { MainCarousel } from 'components/carousels'

export default {
  components: {
    MainCarousel
  },

  render (h) {
    return h(
      'QPage',
      [
        h('MainCarousel')
      ]
    )
  }
}
</script>
