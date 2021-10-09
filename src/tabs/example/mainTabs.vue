<template>
    <simples-wrap>
        <simples-tabs>
            <simples-tab>
                <span>
                    <span>
                        <span>232323</span>
                    </span>
                </span>
            </simples-tab>
            <simples-tab>我的工作台</simples-tab>
            <simples-tab>消息中心</simples-tab>
            <simples-tab>订单管理</simples-tab>
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
</style>