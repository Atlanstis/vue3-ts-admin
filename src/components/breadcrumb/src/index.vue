<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item>
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { IBreadcrumb } from '../types'

export default defineComponent({
  name: 'BreadCrumb',
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {
      ArrowRight
    }
  }
})
</script>

<style scoped></style>
