<script>
const LIST = [
  {
    size: 4,
    title: 'Сайт официального <br> дистрибьютора "Exxon <br> mobil"',
    tags: ['Корпоративный сайт'],
    img: 'statics/projects/p1.jpg',
    url: '/case1/project'
  },
  {
    size: 8,
    title: 'Бот-консультант <br> федерального <br> застройщика "Талан"',
    tags: ['Чат-бот'],
    img: 'statics/projects/p2.jpg',
    url: '/case1/project'
  },
  {
    size: 8,
    title: 'Сайт онлайн фитнес-клуба <br> "Teenweek"',
    tags: ['Веб-приложение', 'Брендинг'],
    img: 'statics/projects/p3.jpg',
    url: '/case1/project'
  },
  {
    size: 4,
    title: 'Дизайн и надежная <br> поддержка магазина <br> "Baseg"',
    tags: ['Интернет-магазин'],
    img: 'statics/projects/p4.jpg',
    url: '/case1/project'
  },
  {
    size: 4,
    title: 'Красивые решения для производства насосов ППД',
    tags: ['Корпоративный сайт'],
    img: 'statics/projects/p5.jpg',
    url: '/case1/project'
  },
  {
    size: 4,
    title: 'Сайт кабельной и электропродукции "Кайрос инжиниринг"',
    tags: ['Корпоративный сайт'],
    img: 'statics/projects/p6.jpg',
    styling: 'dark',
    url: '/case1/project'
  },
  {
    size: 4,
    title: 'Ярко представили работы <br> для "Геоспецтехнология"',
    tags: ['Корпоративный сайт'],
    img: 'statics/projects/p7.jpg',
    url: '/case1/project'
  }
]

export default {
  render (h) {
    return h(
      'div',
      {
        class: 'wrap',

        style: {
          paddingTop: '100px'
        }
      },
      [
        h(
          'div',
          {
            class: 'row q-col-gutter-lg'
          },
          [
            ...LIST.map((item) => {
              const {
                size,
                title,
                tags,
                img,
                url,
                styling = 'light'
              } = item

              return h(
                'QCard',
                {
                  class: `col-xs-12 col-sm-${size}`,

                  props: {
                    square: true,
                    flat: true
                  }
                },
                [
                  h(
                    'a',
                    {
                      attrs: {
                        href: url
                      }
                    },
                    [
                      h(
                        'QImg',
                        {
                          props: {
                            src: img,
                            alt: title.replace(/(<br>)/g, '')
                          },

                          nativeOn: {
                            mouseenter: (evt) => {
                              (styling !== 'light')
                                ? evt.target.classList.add('img--hovered-light')
                                : evt.target.classList.add('img--hovered-dark')
                            },

                            mouseleave: (evt) => {
                              (styling !== 'light')
                                ? evt.target.classList.remove('img--hovered-light')
                                : evt.target.classList.remove('img--hovered-dark')
                            }
                          }
                        },
                        [
                          h(
                            'div',
                            {
                              class: 'bg-transparent',

                              style: {
                                fontSize: '20px',
                                color: (styling === 'dark') ? '#42515b' : 'white',
                                padding: '35px 30px'
                              },

                              domProps: {
                                innerHTML: title.toUpperCase()
                              },

                              directives: [
                                {
                                  name: 'dynamic-font-size',
                                  value: 10
                                },
                                {
                                  name: 'dynamic-padding',
                                  value: 10
                                }
                              ]
                            }
                          ),

                          h(
                            'div',
                            {
                              class: 'bg-transparent absolute',

                              style: {
                                bottom: '6px',
                                padding: '12px 26px'
                              },

                              directives: [
                                {
                                  name: 'dynamic-font-size'
                                },
                                {
                                  name: 'dynamic-padding',
                                  value: 10
                                }
                              ]
                            },
                            [
                              ...tags.map(item => (
                                h(
                                  'QChip',
                                  {
                                    style: {
                                      backgroundColor: (styling === 'dark') ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.2)',
                                      color: (styling === 'dark') ? '#42515b' : 'white',
                                      fontSize: '12px',
                                      paddingLeft: '20px',
                                      paddingRight: '20px'
                                    },

                                    directives: [
                                      {
                                        name: 'dynamic-font-size'
                                      },
                                      {
                                        name: 'dynamic-padding',
                                        value: 10
                                      }
                                    ]
                                  },
                                  item.toUpperCase()
                                )
                              ))
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            }),

            h(
              'div',
              {
                class: 'col-12 text-center'
              },
              [
                // h(
                //   'QBtn',
                //   {
                //     class: 'q-px-xl q-mt-xl',

                //     style: {
                //       fontSize: '16px',
                //       minHeight: '60px'
                //     },

                //     props: {
                //       color: 'primary',
                //       unelevated: true,
                //       label: this.$t('showMore'),
                //       rounded: true
                //     }
                //   },
                //   [
                //     h(
                //       'QIcon',
                //       {
                //         class: 'q-ml-md',

                //         props: {
                //           name: 'add'
                //         }
                //       }
                //     )
                //   ]
                // )
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
                      label: this.$t('btn.showMore')
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
                          name: 'add',
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
  }
}
</script>
