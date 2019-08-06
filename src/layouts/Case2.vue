<script>
export default {
  render (h) {
    return h(
      'QLayout',
      {
        attrs: {
          id: 'case2'
        }
      },
      [
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
