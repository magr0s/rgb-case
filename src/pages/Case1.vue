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
        h(
          'div',
          {
            style: {
              backgroundColor: '#f2f5f7',
              paddingTop: '28px'
            }
          }
        ),

        h('MainCarousel'),

        h('ProjectList')
      ]
    )
  }
}
</script>
