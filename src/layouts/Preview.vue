<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      autor: 'app/getAutor'
    })
  },

  render (h) {
    return h(
      'QLayout',
      [
        h(
          'QPageContainer',
          [
            h('RouterView')
          ]
        ),

        h(
          'QFooter',
          {
            class: 'bg-transparent text-center',

            style: {
              borderTop: '1px solid #eee'
            }
          },
          [
            h(
              'span',
              {
                class: 'text-grey-8 text-caption'
              },
              this.autor
            )
          ]
        )
      ]
    )
  }
}
</script>
