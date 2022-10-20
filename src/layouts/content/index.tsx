import { defineComponent } from 'vue'
import { useRoute } from "vue-router";
import { NLayout, NLayoutContent, NLayoutHeader, useMessage } from 'naive-ui'
import NavBar from './components/navbar'

const Content = defineComponent({
  name: 'content',
  setup() {
    window.$message = useMessage()

    const route = useRoute()

    const menuOptions = [
      {
        label: "首页",
        key: 'home'
      }
    ]

    return {
      menuOptions
    }
  },
  render() {
    return (
      <NLayout style="height: 100%">
        <NLayoutHeader style="height: 65px">
          <NavBar
            class='tab-horizontal'
            headerMenuOptions={this.menuOptions}
          />
        </NLayoutHeader>
        <NLayout has-sider position="absolute" style="top: 65px">
          <NLayoutContent
            native-scrollbar="false"
            style="padding: 16px 22px"
            contentStyle="height: 100%"
          >
            <router-view key={this.$route.fullPath} />
          </NLayoutContent>
        </NLayout>
      </NLayout>
    )
  }
})

export default Content
