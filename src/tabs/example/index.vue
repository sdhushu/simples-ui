<template>
  <!-- 初始化选中 -->
  <apptype>初始化选中</apptype>
  <simples-tabs v-model:active="active">
    <simples-tab name="选项卡1"
      ><span
        ><span><span>232323</span></span></span
      ></simples-tab
    >
    <simples-tab name="选项卡2">我</simples-tab>
    <simples-tab name="选项卡3">消息中心</simples-tab>
    <simples-tab name="选项卡4">订单</simples-tab>
  </simples-tabs>

  <!-- 基础使用 -->
  <apptype>基础使用</apptype>

  <simples-tabs>
    <simples-tab
      ><span
        ><span><span>232323</span></span></span
      ></simples-tab
    >
    <simples-tab>我的工作台</simples-tab>
    <simples-tab>消息中心</simples-tab>
    <simples-tab>订单管理</simples-tab>
  </simples-tabs>

  <!-- 修改样式 -->
  <apptype>修改样式</apptype>

  <simples-tabs
    color="#2979ff"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
  >
    <simples-tab
      ><span
        ><span><span>232323</span></span></span
      ></simples-tab
    >
    <simples-tab>我的工作台</simples-tab>
    <simples-tab>消息中心</simples-tab>
    <simples-tab>订单管理</simples-tab>
  </simples-tabs>

  <!-- 禁用选项 -->
  <apptype>禁用选项</apptype>

  <simples-tabs
    color="#2979ff"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
  >
    <simples-tab @click="handleClick"
      ><span
        ><span><span>232323</span></span></span
      ></simples-tab
    >
    <simples-tab @click="handleClick">我的工作台</simples-tab>
    <simples-tab @click="handleClick">消息中心</simples-tab>
    <simples-tab disabled @click="handleClick">订单管理</simples-tab>
  </simples-tabs>

  <!-- 容器垂直布局 -->
  <!-- <simples-tabs
    color="#2979ff"
    layout-direction="vertical"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
  >
    <simples-tab @click="handleClick"
      ><span
        ><span><span>232323</span></span></span
      ></simples-tab
    >
    <simples-tab @click="handleClick">我的工作台</simples-tab>
    <simples-tab @click="handleClick">消息中心</simples-tab>
  </simples-tabs> -->

  <!-- 视图联动 -->
  <apptype>视图联动</apptype>

  <simples-tabs
    v-model:active="active"
    color="#2979ff"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
  >
    <simples-tab name="选项卡1" @click="handleClick"
      ><span
        ><span><span>232323</span></span></span
      ></simples-tab
    >
    <simples-tab name="选项卡2" @click="handleClick">我的工作台</simples-tab>
    <simples-tab name="选项卡3" @click="handleClick">消息中心</simples-tab>
    <simples-tab name="选项卡4" @click="handleClick">订单管理</simples-tab>
    <simples-tab name="选项卡5" @click="handleClick">订单管理5</simples-tab>
  </simples-tabs>

  <simples-tabs-items v-model:active="active" :list="list">
    <simples-tab-item name="选项卡1">
      <span></span><span></span><span></span><span></span><span></span
      ><span></span>
      呜啦啦啦火车笛，随着奔腾的马蹄。 小妹妹吹着口琴，夕阳下美了剪影。
      我用子弹写日记，介绍完了风景。 接下来换介绍我自己。
      我虽然是个牛仔，在酒吧只点牛奶。 为什么不喝啤酒，因为啤酒伤身体。
    </simples-tab-item>
    <simples-tab-item name="选项卡2">
      很多人不长眼睛，嚣张都靠武器。 赤手空拳就缩成蚂蚁。
      不用麻烦了，不用麻烦了。 不用麻烦，不用麻烦了，不用麻烦了。
    </simples-tab-item>
    <simples-tab-item name="选项卡3">
      你们一起上，我在赶时间。 每天决斗观众都累了，英雄也累了。
      不用麻烦了，不用麻烦了。 副歌不长你们有几个，一起上好了。
      正义呼唤我，美女需要我。 牛仔很忙的。
    </simples-tab-item>
    <simples-tab-item name="选项卡4">
      很多人不长眼睛，嚣张都靠武器。 赤手空拳就缩成蚂蚁。
      不用麻烦了，不用麻烦了。 不用麻烦，不用麻烦了，不用麻烦了。
    </simples-tab-item>
    <simples-tab-item name="选项卡5">
      <span></span><span></span><span></span><span></span><span></span
      ><span></span>
      呜啦啦啦火车笛，随着奔腾的马蹄。 小妹妹吹着口琴，夕阳下美了剪影。
      我用子弹写日记，介绍完了风景。 接下来换介绍我自己。
      我虽然是个牛仔，在酒吧只点牛奶。 为什么不喝啤酒，因为啤酒伤身体。
    </simples-tab-item>
  </simples-tabs-items>
</template>
 
<script setup>
import { reactive, ref } from "vue";
import SimplesTabs from "../Tabs.vue";
import SimplesTab from "../../tab/Tab.vue";
import SimplesTabsItems from "../../tabs-items/TabsItems.vue";
import SimplesTabItem from "../../tab-item/TabItem.vue";
import AppType from "@varlet/cli/site/mobile/components/AppType";

const active = ref("选项卡2");
const list = reactive(["选项卡1", "选项卡2", "选项卡3", "选项卡4", "选项卡5"]);
let handleClick = () => {
  console.log(111);
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.ds {
  width: 500px;
  height: 800px;
}
.cs {
  width: 100%;
  height: 100%;
}
</style>
