<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3 + TS</span>
    </div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="`${item.id}`">
            <template #title>
              <menu-icon v-if="item.icon" :icon="item.icon" />
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="`${subitem.id}`"
                @click="handleMenuItemClick(subitem)"
              >
                <menu-icon v-if="subitem.icon" :icon="subitem.icon" />
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="`${item.id}`">
            <menu-icon v-if="item.icon" :icon="item.icon" />
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import MenuIcon from './components/menu-icon'
import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  components: {
    MenuIcon
  },

  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    const router = useRouter()
    const route = useRoute()
    // 获取当前生效菜单的 id
    const activeMenu = pathMapToMenu(userMenus.value, route.path)
    const defaultActive = ref(`${activeMenu.id}`)
    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return {
      defaultActive,
      userMenus,
      handleMenuItemClick
    }
  }
})
</script>

<style scoped lang="scss">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 10px 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .img {
      height: 100%;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      margin-left: 10px;
      line-height: 48px;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  :deep(.el-sub-menu__title) {
    background-color: #001529 !important;
  }

  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
