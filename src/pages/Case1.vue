<script>
import { MainCarousel } from 'components/carousels'
import ProjectList from 'components/ProjectList'

export default {
  components: {
    MainCarousel,
    ProjectList
  },

  render (h) {
    return h(
      'QPage',
      [
        h('MainCarousel'),
        h('ProjectList')
      ]
    )
  }
}
</script>
