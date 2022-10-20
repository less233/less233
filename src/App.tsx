
import { defineComponent, ref, nextTick, provide } from 'vue'
import {
  zhCN,
  enUS,
  dateZhCN,
  dateEnUS,
  NConfigProvider,
  NMessageProvider,
  GlobalThemeOverrides
} from "naive-ui";
import { useLocalesStore } from "@/stores/locales/locales";

const App = defineComponent({
  name: 'App',
  setup() {
    const localesStore = useLocalesStore();
    
    const isRouterAlive = ref(true);
    const reload = () => {
      isRouterAlive.value = false;
      nextTick(() => {
        isRouterAlive.value = true;
      });
    };
    
    provide("reload", reload);

    return {
      reload,
      isRouterAlive,
      localesStore
    }
  },
  render() {
    const themeOverrides: GlobalThemeOverrides = {
      common: {
        primaryColor: '#fff',
        primaryColorHover: '#fff',
      }
    }
    
    return (
      <NConfigProvider
        style={{width: '100%', height: '100vh'}}
        theme-overrides={themeOverrides}
        date-locale={
          String(this.localesStore.getLocales) === 'zh_CN' ? dateZhCN : dateEnUS
        }
        locale={String(this.localesStore.getLocales) === 'zh_CN' ? zhCN : enUS}
      >
        <NMessageProvider>
          { this.isRouterAlive ? <router-view /> : ''}
        </NMessageProvider>
      </NConfigProvider>
    )
  }
})

export default App
