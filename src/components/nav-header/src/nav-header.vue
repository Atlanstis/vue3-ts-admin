<template>
  <div class="nav-header">
    <el-icon class="fold-menu" :size="24" @click="handleFoldClick">
      <Icon-Expand v-if="isFold" />
      <Icon-Fold v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="scss">
.nav-header {
  .fold-menu {
    cursor: pointer;
  }
}
</style>
