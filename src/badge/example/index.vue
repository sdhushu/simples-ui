<template>
  <!--主题色徽标 -->
  <app-type>主题色徽标</app-type>
  <simples-badge type="primary" />
  <simples-badge type="info" />
  <simples-badge type="success" />
  <simples-badge type="warning" />
  <simples-badge type="danger" />
  <simples-badge />
  <!-- 圆点徽标 -->
  <app-type>圆点徽标</app-type>
  <simples-badge type="danger" dot />
  <!-- 自定义徽标内容 -->
  <app-type>自定义内容徽标</app-type>
  <simples-badge type="danger" value="badge" />
  <simples-badge type="danger" value="hot" />
  <simples-badge type="danger" value="66" />
  <!-- 最大值 -->
  <app-type>最大值</app-type>
  <simples-badge type="danger" :value="66" :max-value="99" />
  <simples-badge type="danger" :value="180" :max-value="99" />
  <!-- 不同定位徽标 -->
  <app-type>不同定位徽标</app-type>
  <simples-badge type="danger" position="right-top">
    <simples-chip color="#faecd8" square text-color="#e6a23c" plain
      >右上</simples-chip
    >
  </simples-badge>

  <simples-badge type="danger" position="right-bottom" class="badge">
    <simples-chip color="#faecd8" square text-color="#e6a23c" plain
      >右下</simples-chip
    >
  </simples-badge>

  <simples-badge type="danger" position="left-top" class="badge">
    <simples-chip color="#faecd8" square text-color="#e6a23c" plain
      >左上</simples-chip
    >
  </simples-badge>

  <!-- 改变状态 -->
  <app-type>改变状态徽标</app-type>
  <simples-button @click="handleChange">点击改变状态</simples-button>
  <simples-badge
    type="danger"
    color="#6200ea"
    position="left-bottom"
    :hidden="hidden"
  >
    <simples-chip color="#faecd8" square text-color="#e6a23c" plain
      >右上</simples-chip
    >
  </simples-badge>
</template>
 
<script setup>
import SimplesBadge from "../Badge.vue";
import SimplesChip from "../../chip/Chip.vue";
import SimplesButton from "../../button/Button.vue";
import AppType from "@varlet/cli/site/mobile/components/AppType";
import { ref } from "vue";

const hidden = ref(false);
const handleChange = () => {
  hidden.value = !hidden.value;
};
</script>
<style>
/* .simple-badge {
  margin-bottom: 10px;
  margin-right: 10px;
} */
.badge {
  margin-left: 10px;
}
</style>
