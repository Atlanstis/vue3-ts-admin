import { h, defineComponent, resolveComponent } from 'vue'
import { ElIcon } from 'element-plus'

export default defineComponent({
  name: 'MenuIcon',

  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 16
    }
  },

  setup(props) {
    return () => {
      return h(ElIcon, { size: props.size }, () => {
        return h(resolveComponent(`Icon-${props.icon}`))
      })
    }
  }
})
