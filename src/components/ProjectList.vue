<script>
const LIST = [
  {
    size: 4,
    title: 'Сайт официального <br> дистрибьютора "Exxon <br> mobil"',
    tags: ['Корпоративный сайт'],
    img: 'statics/projects/p1.jpg',
    styling: 'ligth'
  },
  {
    size: 8,
    title: 'Бот-консультант <br> федерального <br> застройщика "Талан"',
    tags: ['Чат-бот'],
    img: 'statics/projects/p2.jpg',
    styling: 'ligth'
  },
  {
    size: 8,
    title: 'Сайт онлайн фитнес-клуба <br> "Teenweek"',
    tags: ['Веб-приложение', 'Брендинг'],
    img: 'statics/projects/p3.jpg'
  },
  {
    size: 4,
    title: 'Дизайн и надежная <br> поддержка магазина <br> "Baseg"',
    tags: ['Интернет-магазин'],
    img: 'statics/projects/p4.jpg'
  },
  {
    size: 4,
    title: 'Красивые решения для производства насосов ППД',
    tags: ['Корпоративный сайт'],
    img: 'statics/projects/p5.jpg'
  },
  {
    size: 4,
    title: 'Сайт кабельной и электропродукции "Кайрос инжиниринг"',
    tags: ['Корпоративный сайт'],
    img: 'statics/projects/p6.jpg',
    styling: 'dark'
  },
  {
    size: 4,
    title: 'Ярко представили работы <br> для "Геоспецтехнология"',
    tags: ['Корпоративный сайт'],
    img: 'statics/projects/p7.jpg'
  }
]

export default {
  render (h) {
    return h(
      'div',
      {
        class: 'wrap',

        style: {
          paddingTop: '24px'
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
                styling = 'light'
              } = item

              return h(
                'QCard',
                {
                  class: `col-${size}`,

                  props: {
                    square: true,
                    flat: true
                  }
                },
                [
                  h(
                    'QImg',
                    {
                      props: {
                        src: img
                      }
                    },
                    [
                      h(
                        'div',
                        {
                          class: 'bg-transparent',

                          style: {
                            fontSize: '20px',
                            letterSpacing: '.1em',
                            color: (styling === 'dark') ? '#42515b' : 'white'
                          },

                          domProps: {
                            innerHTML: title.toUpperCase()
                          }
                        }
                      ),

                      h(
                        'div',
                        {
                          class: 'bg-transparent absolute',

                          style: {
                            bottom: '6px',
                            letterSpacing: '.1em'
                          }
                        },
                        [
                          ...tags.map(item => (
                            h(
                              'QChip',
                              {
                                style: {
                                  backgroundColor: (styling === 'dark') ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.2)',
                                  color: (styling === 'dark') ? '#42515b' : 'white'
                                }
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
            }),

            h(
              'div',
              {
                class: 'col-12 text-center'
              },
              [
                h(
                  'QBtn',
                  {
                    class: 'q-px-xl',

                    style: {
                      fontSize: '16px',
                      minHeight: '60px'
                    },

                    props: {
                      color: 'primary',
                      unelevated: true,
                      label: this.$t('showMore'),
                      rounded: true
                    }
                  },
                  [
                    h(
                      'QIcon',
                      {
                        class: 'q-ml-md',

                        props: {
                          name: 'add'
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
