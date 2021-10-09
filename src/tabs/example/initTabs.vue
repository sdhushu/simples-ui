<template>
    <simples-wrap>
        <simples-tabs v-model:active="active">
            <simples-tab name="选项卡1">
                <span>
                    <span>
                        <span>232323</span>
                    </span>
                </span>
            </simples-tab>
            <simples-tab name="选项卡2">我</simples-tab>
            <simples-tab name="选项卡3">消息中心</simples-tab>
            <simples-tab name="选项卡4">订单</simples-tab>
        </simples-tabs>
    </simples-wrap>
</template>

<script setup>
import { reactive, ref } from "vue";
import SimplesTabs from "../Tabs.vue";
import SimplesTab from "../../tab/Tab.vue";
import SimplesTabsItems from "../../tabs-items/TabsItems.vue";
import SimplesTabItem from "../../tab-item/TabItem.vue";

const active = ref("选项卡2");
const list = reactive(["选项卡1", "选项卡2", "选项卡3", "选项卡4", "选项卡5"]);
let handleClick = () => {
  console.log(111);
};
</script>

<style>
.simple-button {
    margin-bottom: 10px;
    margin-right: 10px;
}
</style>