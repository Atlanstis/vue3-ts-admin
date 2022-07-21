<template>
  <div class="nav-header">
    <el-icon class="fold-menu" :size="24" @click="handleFoldClick">
      <Icon-Expand v-if="isFold" />
      <Icon-Fold v-else />
    </el-icon>
    <div class="content">
      <breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import UserInfo from './user-info.vue'
import Breadcrumb from '@/components/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    UserInfo,
    Breadcrumb
  },

  emits: ['foldChange'],

  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="scss">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
