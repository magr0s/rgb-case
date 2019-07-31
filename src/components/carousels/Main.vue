<script>
const SLIDES = [
  {
    id: 1,
    title: 'Разработка <br> и продвижение <br> сайтов',
    desc: 'Эффективные решения для бизнеса в интернете',
    label: 'Посмотреть проекты',
    img: 'statics/banners/b1.png'
  },
  {
    id: 2,
    title: 'Разработка <br> и продвижение <br> сайтов',
    desc: 'desc',
    label: 'label',
    img: 'statics/banners/b1.png'
  },
  {
    id: 3,
    title: 'Разработка <br> и продвижение <br> сайтов',
    desc: 'Эффективные решения для бизнеса в интернете',
    label: 'Посмотреть проекты',
    img: 'statics/banners/b1.png'
  },
  {
    id: 4,
    title: 'Разработка <br> и продвижение <br> сайтов',
    desc: 'Эффективные решения для бизнеса в интернете',
    label: 'Посмотреть проекты',
    img: 'statics/banners/b1.png'
  },
  {
    id: 5,
    title: 'Разработка <br> и продвижение <br> сайтов',
    desc: 'Эффективные решения для бизнеса в интернете',
    label: 'Посмотреть проекты',
    img: 'statics/banners/b1.png'
  }
]

export default {
  data () {
    return {
      slide: 1
    }
  },

  render (h) {
    return h(
      'QCarousel',
      {
        class: 'carousel--customize',

        style: {
          backgroundColor: '#f2f5f7'
        },

        props: {
          value: this.slide,
          height: '667px',
          navigation: true,
          animated: true,
          transitionPrev: 'slide-right',
          transitionNext: 'slide-left'
        },

        on: {
          input: value => (this.slide = value)
        }
      },
      [
        ...SLIDES.map((item) => {
          const {
            id,
            title,
            desc,
            label,
            img
          } = item

          return h(
            'QCarouselSlide',
            {
              class: 'flex column',

              style: {
                backgroundPosition: '500px center', // need testing
                backgroundRepeat: 'no-repeat'
              },

              props: {
                name: id,
                imgSrc: img
              }
            },
            [
              h(
                'div',
                {
                  class: 'flex column items-center justify-center'
                },
                [
                  h(
                    'div',
                    {
                      style: {
                        width: '100%',
                        maxWidth: '1140px'
                      }
                    },
                    [
                      h(
                        'div',
                        {
                          class: 'col-5'
                        },
                        [
                          h(
                            'div',
                            {
                              style: {
                                fontSize: '50px',
                                color: '#42515b',
                                letterSpacing: '.1em'
                              },

                              domProps: {
                                innerHTML: title.toUpperCase()
                              }
                            }
                          ),

                          h(
                            'div',
                            {
                              class: 'ubuntu-light-font q-my-xl',

                              style: {
                                color: '#42515b'
                              }
                            },
                            desc
                          ),

                          h(
                            'QBtn',
                            {
                              class: 'q-px-xl q-mt-sm',

                              style: {
                                letterSpacing: '.1em',
                                minHeight: '60px'
                              },

                              props: {
                                color: 'primary',
                                rounded: true,
                                unelevated: true,
                                label
                              }
                            },
                            [
                              h(
                                'QIcon',
                                {
                                  class: 'q-ml-sm',

                                  props: {
                                    name: 'arrow_right_alt',
                                    size: '20px'
                                  }
                                }
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        })
      ]
    )
  }
}
</script>

<style lang="stylus" scoped>
.carousel--customize >>>
  .q-carousel__navigation
    max-width 1140px
    margin-left auto
    margin-right auto

    &-inner
      justify-content start

    .q-btn
      padding 0
      min-width 1em
      min-height 1em
      width 1em
      height 1em
      opacity 1

      .q-icon
        font-size 6px
        border-radius 50%

      &.q-carousel__navigation-icon--active
        .q-icon
          font-size 8px
          border 3px solid $primary
          border-radius 50%

    .q-btn:not(.q-carousel__navigation-icon--active)
      color #83a1b2
</style>
