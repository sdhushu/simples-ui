<template>
  <app-type>基本使用</app-type>
  <simplecard
    title="风景"
    description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
  />
  <app-type>显示副标题</app-type>
  <simplecard
    title="风景"
    subtitle="公园里的风景"
    description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
  />
  <app-type>显示图片</app-type>
   <simplecard
    title="风景"
    subtitle="公园里的风景"
    description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  />
  <app-type>使用插槽</app-type>
  <simplecard
    title="风景"
    subtitle="公园里的风景"
    description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  >
    <template #extra>
      <simplebutton type="primary" style="margin-left: 10px; margin-top: 30px"
        >添加按钮</simplebutton
      >
      <simplebutton type="warning" style="margin-left: 10px"
        >添加按钮</simplebutton
      >
    </template>
  </simplecard>
</template>
 
<script setup>
import simplecard from "../Card.vue";
import simplebutton from "../../button/Button.vue";
import AppType from "@varlet/cli/site/mobile/components/AppType";
</script>
<style>
.simple-button {
  margin-bottom: 10px;
}
</style>
