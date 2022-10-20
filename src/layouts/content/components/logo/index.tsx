import { defineComponent } from 'vue'
import styles from './index.module.scss'

const Logo = defineComponent({
  name: 'Logo',
  render() {
    return (
      <div
        class={[
          styles.logo
        ]}
      />
    )
  }
})

export default Logo
