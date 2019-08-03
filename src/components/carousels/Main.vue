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
    desc: 'Эффективные решения для бизнеса в интернете',
    label: 'Посмотреть проекты',
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
          navigation: true,
          height: '667px',
          animated: true,
          transitionPrev: 'slide-right',
          transitionNext: 'slide-left',
          keepAlive: true,
          autoplay: 6000,
          infinite: true,
          swipeable: true
        },

        directives: [
          {
            name: 'dynamic-height',
            value: 10
          }
        ],

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
              class: 'flex column items-center justify-center',

              style: {
                backgroundPosition: 'right bottom', // need testing
                backgroundRepeat: 'no-repeat',
                backgroundSize: (this.$q.screen.lt.sm) ? 'cover' : 'contain'
              },

              props: {
                name: id,
                imgSrc: img
              },

              directives: [
                {
                  name: 'dynamic-bg-offset-x',
                  value: 1264
                }
              ]
            },
            [
              h(
                'div',
                {
                  class: 'row wrap'
                },
                [
                  h(
                    'div',
                    {
                      class: 'col-xs-12 col-lg-5'
                    },
                    [
                      h(
                        'div',
                        {
                          style: {
                            fontSize: '50px',
                            color: '#42515b',
                            letterSpacing: '.1em',
                            textAlign: (this.$q.screen.xs) ? 'center' : 'left'
                          },

                          domProps: {
                            innerHTML: title.toUpperCase()
                          },

                          directives: [
                            {
                              name: 'dynamic-font-size',
                              value: 10
                            }
                          ]
                        }
                      ),

                      h(
                        'div',
                        {
                          class: 'ubuntu-light-font q-mt-xl gt-xs',

                          style: {
                            color: '#42515b',
                            textAlign: (this.$q.screen.xs) ? 'center' : 'left'
                          }
                        },
                        desc
                      ),

                      h(
                        'QBtn',
                        {
                          class: 'q-px-xl q-mt-xl',

                          style: {
                            letterSpacing: '.1em',
                            minHeight: (this.$q.screen.gt.sm) ? '60px' : '40px'
                          },

                          props: {
                            color: 'primary',
                            rounded: true,
                            unelevated: true,
                            label
                          },

                          nativeOn: {
                            mouseenter: (evt) => {
                              evt.target.classList.add('btn--hovered')
                            },

                            mouseleave: (evt) => {
                              evt.target.classList.remove('btn--hovered')
                            }
                          },

                          directives: [
                            {
                              name: 'dynamic-font-size'
                            }
                          ]
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

    .q-carousel__navigation-icon
      border-radius 50%
      min-height 18px
      height  18px
      width 18px
      min-width 18px

      .q-icon
        color #83a1b2
        font-size 6px

      &--active
        background-color $primary

        .q-icon
          color white
          font-size 8px
</style>
