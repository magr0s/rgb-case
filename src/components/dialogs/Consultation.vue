<script>
import { uploaderFactory } from 'src/js/utils'

export default {
  props: {
    value: {
      type: Boolean,
      default: () => (false)
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
                  top: '-30px',
                  right: '-30px'
                },

                props: {
                  color: 'primary',
                  icon: 'close',
                  unelevated: true,
                  round: true,
                  size: 'lg'
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
                  backgroundImage: 'url(statics/d1.jpg)'
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
                    }
                  },
                  [
                    h(
                      'div',
                      {
                        class: 'col-7 offset-4'
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
                                class: 'col-6'
                              },
                              [
                                h(
                                  'div',
                                  {
                                    class: 'text-uppercase text-white',

                                    style: {
                                      fontSize: '50px'
                                    }
                                  },
                                  this.$t('dialog.consultation.title')
                                )
                              ]
                            ),

                            h(
                              'div',
                              {
                                class: 'col-6'
                              },
                              [
                                h(
                                  'div',
                                  {
                                    class: 'ubuntu-light-font'
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
                            attrs: {
                              autocomplete: 'off',
                              autocapitalize: 'off',
                              autocorrect: 'off',
                              spellcheck: false
                            }
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
                                    class: 'col-6'
                                  },
                                  [
                                    h(
                                      'QInput',
                                      {
                                        class: 'input--customize',

                                        style: {
                                          marginBottom: '30px'
                                        },

                                        attrs: {
                                          placeholder: this.$t('label.name')
                                        },

                                        props: {
                                          square: true,
                                          outlined: true,
                                          inputClass: 'ubuntu-light-font',
                                          inputStyle: {
                                            color: 'white',
                                            opacity: '.5'
                                          }
                                        }
                                      }
                                    ),

                                    h(
                                      'QInput',
                                      {
                                        class: 'input--customize',

                                        props: {
                                          mask: '+7 (###) ###-##-##',
                                          fillMask: true,
                                          square: true,
                                          outlined: true,
                                          inputClass: 'ubuntu-light-font',
                                          inputStyle: {
                                            color: 'white',
                                            opacity: '.5'
                                          }
                                        }
                                      }
                                    )
                                  ]
                                ),

                                h(
                                  'div',
                                  {
                                    class: 'col-6'
                                  },
                                  [
                                    h(
                                      'QInput',
                                      {
                                        class: 'input--customize',

                                        attrs: {
                                          rows: '7',
                                          placeholder: this.$t('label.comment')
                                        },

                                        props: {
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
                                    class: 'col-6'
                                  },
                                  [
                                    h(
                                      'QUploader',
                                      {
                                        class: 'uploader--customize full-width',

                                        props: {
                                          flat: true,
                                          autoUpload: true,
                                          factory: uploaderFactory
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
                                                  [
                                                    h(
                                                      'QItemSection',
                                                      [
                                                        h(
                                                          'QItemLabel',
                                                          {
                                                            class: 'full-width ellipsis'
                                                          },
                                                          file.name
                                                        ),

                                                        h(
                                                          'QItemLabel',
                                                          {
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
                                                              dense: true
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
                                class: 'row'
                              },
                              [
                                h(
                                  'div',
                                  {
                                    class: 'col-4'
                                  },
                                  [
                                    h(
                                      'QBtn',
                                      {
                                        props: {
                                          label: this.$t('btn.send')
                                        }
                                      }
                                    )
                                  ]
                                ),

                                h(
                                  'div',
                                  {
                                    class: 'col-8'
                                  },
                                  [
                                    h(
                                      'QCheckbox',
                                      [
                                        h(
                                          'span',
                                          {
                                            domProps: {
                                              innerHTML: this.$t('label.agree')
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
</style>
