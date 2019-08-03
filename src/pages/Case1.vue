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
            },

            directives: [
              {
                name: 'dynamic-padding'
              }
            ]
          }
        ),

        h('MainCarousel'),

        h('ProjectList'),

        h(
          'div',
          {
            style: {
              paddingTop: '175px'
            },

            directives: [
              {
                name: 'dynamic-padding'
              }
            ]
          }
        )
      ]
    )
  }
}
</script>
