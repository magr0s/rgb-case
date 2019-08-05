<script>
import { required } from 'vuelidate/lib/validators'
import { uploaderFactory } from 'src/js/utils'

export default {
  validations: {
    form: {
      name: { required },
      phone: { required }
    },

    agree: {
      agree (value) {
        return value
      }
    }
  },

  props: {
    value: {
      type: Boolean,
      default: () => (false)
    }
  },

  data () {
    return {
      form: {
        name: '',
        phone: '',
        comment: '',
        attach: []
      },

      agree: true
    }
  },

  methods: {
    progressStatusColor (status) {
      switch (status) {
        case 'failed':
          return 'negative'
        default:
      }

      return 'blue-1'
    },

    submitHandle () {
      this.$v.$touch()

      if (this.$v.$invalid) return false

      this.$q.notify({
        color: 'positive',
        html: `<span class="ubuntu-light-font">${this.$t('msg.success')}</span>`,
        position: 'top-right'
      })
    },

    hasError (validator) {
      return validator.$error
    },

    getError (validator) {
      const rules = Object.keys(validator.$params)
      const errors = []

      rules.forEach(rule => {
        if (!validator[rule]) {
          errors.push(this.$t(`error.${rule}`))
        }
      })

      return (errors.length) ? errors[0] : ''
    }
  },

  render (h) {
    return h(
      'QDialog',
      {
        props: {
          value: this.value
        },

        on: {
          input: value => (this.$emit('input', value))
        }
      },
      [
        h(
          'QCard',
          {
            style: {
              width: '1280px',
              maxWidth: '90vw',
              height: '786px',
              maxHeight: '90vh',
              overflow: 'visible'
            },

            props: {
              square: true
            }
          },
          [
            h(
              'QBtn',
              {
                class: 'absolute z-top',

                style: {
                  top: (this.$q.screen.lt.md) ? '-21px' : '-30px',
                  right: (this.$q.screen.lt.md) ? '-21px' : '-30px'
                },

                props: {
                  color: 'primary',
                  icon: 'close',
                  unelevated: true,
                  round: true,
                  size: (this.$q.screen.lt.md) ? 'md' : 'lg'
                },

                directives: [
                  {
                    name: 'close-popup',
                    value: true
                  }
                ]
              }
            ),

            h(
              'QCardSection',
              {
                class: 'fit',

                style: {
                  backgroundImage: 'url(statics/d1.jpg)',
                  backgroundPosition: 'right top'
                }
              },
              [
                h(
                  'QScrollArea',
                  {
                    class: 'fit',

                    style: {
                      overflow: 'hidden'
                    }
                  },
                  [
                    h(
                      'div',
                      {
                        class: 'row',

                        style: {
                          paddingTop: '85px',
                          paddingBottom: '115px'
                        },

                        directives: [
                          {
                            name: 'dynamic-padding',
                            value: 25
                          }
                        ]
                      },
                      [
                        h(
                          'div',
                          {
                            class: 'col-xs-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-3 col-xl-7 offset-xl-4'
                          },
                          [
                            h(
                              'div',
                              {
                                class: 'row'
                              },
                              [
                                h(
                                  'div',
                                  {
                                    class: 'col-xs-12 col-md-6'
                                  },
                                  [
                                    h(
                                      'div',
                                      {
                                        class: 'text-uppercase text-white',

                                        style: {
                                          textAlign: (this.$q.screen.lt.md) ? 'center' : 'left',
                                          fontSize: '50px'
                                        },

                                        directives: [
                                          {
                                            name: 'dynamic-font-size',
                                            value: 15
                                          }
                                        ]
                                      },
                                      this.$t('dialog.consultation.title')
                                    )
                                  ]
                                ),

                                h(
                                  'div',
                                  {
                                    class: 'col-md-6 gt-sm'
                                  },
                                  [
                                    h(
                                      'div',
                                      {
                                        class: 'ubuntu-light-font text-white q-pt-md',

                                        style: {
                                          opacity: '.75'
                                        }
                                      },
                                      this.$t('dialog.consultation.desc')
                                    )
                                  ]
                                )
                              ]
                            ),

                            h(
                              'QForm',
                              {
                                class: 'q-pt-xl',

                                attrs: {
                                  autocomplete: 'off',
                                  autocapitalize: 'off',
                                  autocorrect: 'off',
                                  spellcheck: false
                                },

                                on: {
                                  submit: evt => (evt.preventDefault())
                                },

                                directives: [
                                  {
                                    name: 'dynamic-padding',
                                    value: 20
                                  }
                                ]
                              },
                              [
                                h(
                                  'div',
                                  {
                                    class: 'row q-col-gutter-lg'
                                  },
                                  [
                                    h(
                                      'div',
                                      {
                                        class: 'col-xs-12 col-sm-6'
                                      },
                                      [
                                        h(
                                          'QInput',
                                          {
                                            class: 'input--customize',

                                            style: {
                                              marginBottom: '10px'
                                            },

                                            attrs: {
                                              placeholder: this.$t('label.name')
                                            },

                                            props: {
                                              value: this.form.name,
                                              square: true,
                                              outlined: true,
                                              inputClass: 'ubuntu-light-font',
                                              inputStyle: {
                                                color: 'white',
                                                opacity: '.5'
                                              },
                                              error: this.hasError(this.$v.form.name),
                                              errorMessage: this.getError(this.$v.form.name),
                                              noErrorIcon: true
                                            },

                                            on: {
                                              input: value => (this.form.name = value),
                                              blur: () => (this.$v.form.name && this.$v.form.name.$touch())
                                            }
                                          }
                                        ),

                                        h(
                                          'QInput',
                                          {
                                            class: 'input--customize',

                                            props: {
                                              value: this.form.phone,
                                              mask: '+7 (###) ###-##-##',
                                              fillMask: true,
                                              square: true,
                                              outlined: true,
                                              inputClass: 'ubuntu-light-font',
                                              inputStyle: {
                                                color: 'white',
                                                opacity: '.5'
                                              },
                                              error: this.hasError(this.$v.form.phone),
                                              errorMessage: this.getError(this.$v.form.phone),
                                              noErrorIcon: true
                                            },

                                            on: {
                                              input: value => (this.form.phone = value),
                                              blur: () => (this.$v.form.phone && this.$v.form.phone.$touch())
                                            }
                                          }
                                        )
                                      ]
                                    ),

                                    h(
                                      'div',
                                      {
                                        class: 'col-xs-12 col-sm-6'
                                      },
                                      [
                                        h(
                                          'QInput',
                                          {
                                            class: 'input--customize',

                                            attrs: {
                                              rows: (this.$q.screen.gt.xs) ? '7' : '4',
                                              placeholder: this.$t('label.comment')
                                            },

                                            props: {
                                              value: this.form.comment,
                                              type: 'textarea',
                                              square: true,
                                              outlined: true,
                                              inputClass: 'ubuntu-light-font',
                                              inputStyle: {
                                                color: 'white',
                                                opacity: '.5',
                                                resize: 'none',
                                                maxHeight: '138px'
                                              }
                                            },

                                            on: {
                                              input: value => (this.form.comment = value)
                                            }
                                          }
                                        )
                                      ]
                                    )
                                  ]
                                ),

                                h(
                                  'div',
                                  {
                                    class: 'row q-mt-xs q-col-gutter-lg'
                                  },
                                  [
                                    h(
                                      'div',
                                      {
                                        class: 'col-xs-12 col-sm-6'
                                      },
                                      [
                                        h(
                                          'QUploader',
                                          {
                                            class: 'uploader--customize full-width',

                                            style: {
                                              borderColor: 'rgba(255,255,255,.3)'
                                            },

                                            props: {
                                              square: true,
                                              flat: true,
                                              autoUpload: true,
                                              factory: uploaderFactory,
                                              textColor: 'white'
                                            },

                                            scopedSlots: {
                                              header: (scope) => {
                                                if (!scope.canAddFiles || scope.files.length) return

                                                return h(
                                                  'div',
                                                  {
                                                    class: 'row no-wrap items-center q-gutter-xs'
                                                  },
                                                  [
                                                    h(
                                                      'QBtn',
                                                      {
                                                        props: {
                                                          label: this.$t('label.pickFile'),
                                                          icon: 'attach_file',
                                                          flat: true
                                                        }
                                                      },
                                                      [
                                                        h(
                                                          'QUploaderAddTrigger'
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              },

                                              list: (scope) => {
                                                if (!scope.files.length) return

                                                const file = scope.files[0]

                                                return h(
                                                  'QList',
                                                  [
                                                    h(
                                                      'QItem',
                                                      {
                                                        class: 'q-pa-none'
                                                      },
                                                      [
                                                        h(
                                                          'QItemSection',
                                                          [
                                                            h(
                                                              'QItemLabel',
                                                              {
                                                                class: 'full-width ellipsis text-white text-caption ubuntu-light-font'
                                                              },
                                                              file.name
                                                            ),

                                                            h(
                                                              'QItemLabel',
                                                              {
                                                                class: 'ubuntu-light-font text-grey-6',

                                                                props: {
                                                                  caption: true
                                                                }
                                                              },
                                                              this.$t(`uploader.${file.__status}`)
                                                            ),

                                                            h(
                                                              'QItemLabel',
                                                              {
                                                                props: {
                                                                  caption: true
                                                                }
                                                              },
                                                              [
                                                                h(
                                                                  'QLinearProgress',
                                                                  {
                                                                    props: {
                                                                      value: (file.__progressLabel / file.__sizeLabel), // file upload progress
                                                                      rounded: true,
                                                                      color: this.progressStatusColor(file.__status)
                                                                    }
                                                                  }
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        ),

                                                        h(
                                                          'QItemSection',
                                                          {
                                                            props: {
                                                              top: true,
                                                              side: true
                                                            }
                                                          },
                                                          [
                                                            h(
                                                              'QBtn',
                                                              {
                                                                props: {
                                                                  icon: 'delete',
                                                                  size: '12px',
                                                                  flat: true,
                                                                  round: true,
                                                                  dense: true,
                                                                  color: 'white'
                                                                },

                                                                on: {
                                                                  click: () => (scope.removeFile(file))
                                                                }
                                                              }
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              }
                                            }
                                          }
                                        )
                                      ]
                                    )
                                  ]
                                ),

                                h(
                                  'div',
                                  {
                                    class: 'row items-center q-col-gutter-lg'
                                  },
                                  [
                                    h(
                                      'div',
                                      {
                                        class: {
                                          'q-mt-lg': true,
                                          'col-xs-12': true,
                                          'col-sm-5': true,
                                          'col-lg-4': true,
                                          'order-last': this.$q.screen.lt.sm
                                        }
                                      },
                                      [
                                        h(
                                          'QBtn',
                                          {
                                            class: 'q-px-xl bg-white text-primary',

                                            style: {
                                              minHeight: (this.$q.screen.gt.sm) ? '60px' : '40px',
                                              width: '264px',
                                              maxWidth: '100%'
                                            },

                                            props: {
                                              rounded: true,
                                              unelevated: true,
                                              label: this.$t('btn.send')
                                            },

                                            on: {
                                              click: this.submitHandle
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
                                          }
                                        )
                                      ]
                                    ),

                                    h(
                                      'div',
                                      {
                                        class: {
                                          'q-mt-lg': true,
                                          'col-xs-12': true,
                                          'col-sm-7': true,
                                          'col-lg-8': true,
                                          'order-first': this.$q.screen.lt.sm
                                        }
                                      },
                                      [
                                        h(
                                          'QField',
                                          {
                                            class: 'field--customize',

                                            props: {
                                              value: this.agree,
                                              error: this.hasError(this.$v.agree),
                                              errorMessage: this.getError(this.$v.agree),
                                              hideBottomSpace: !this.hasError(this.$v.agree),
                                              noErrorIcon: true,
                                              outlined: true,
                                              dense: true
                                            },

                                            scopedSlots: {
                                              control: () => (
                                                h(
                                                  'QCheckbox',
                                                  {
                                                    class: 'checkbox--customize',

                                                    props: {
                                                      value: this.agree,
                                                      dense: true
                                                    },

                                                    on: {
                                                      input: value => {
                                                        this.agree = value
                                                        this.$v.agree && this.$v.agree.$touch()
                                                      }
                                                    }
                                                  },
                                                  [
                                                    h(
                                                      'span',
                                                      {
                                                        class: 'ubuntu-light-font text-white label--customize',

                                                        style: {
                                                          opacity: '.5'
                                                        },

                                                        domProps: {
                                                          innerHTML: this.$t('label.agree')
                                                        }
                                                      }
                                                    )
                                                  ]
                                                )
                                              )
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

<style lang="stylus" scoped>
.input--customize >>>
  .q-field__control
    &:before
      border-color white !important
      opacity .3

    &:after
      border-color transparent !important

.uploader--customize >>>
  .q-uploader__list
    min-height auto
    padding 0
    background-color $primary

  .q-uploader__header:before,
  .q-uploader__file:before
    content none

  .q-uploader__overlay
    display none
    visibility hidden

.label--customize >>>
  *
    color white !important

.field--customize >>>
  .q-field__control:before,
  .q-field__control:after
    display none
  .q-field__native
    padding-top 0
    padding-bottom 0

.checkbox--customize >>>
  .q-checkbox__bg
    border-color rgba(255,255,255, .3) !important
</style>
