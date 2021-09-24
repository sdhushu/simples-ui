<template>
  <div class="simple-card">
    <img class="card-img" :src="src" alt="图片" v-if="src"/>
    <div class="card-title">{{ title }}</div>
    <div class="card-sub" v-if="subtitle">{{ subtitle }}</div>
    <div class="card-desc">{{ description }}</div>
    <slot name="extra"></slot>
  </div>
</template>
 
<script>
export default {
  name:'SimplesCard',
  props: {
    title: String,
    description: String,
    subtitle: String,
    src: String,
  },
};
</script>
<style lang="css">
.simple-card {
  box-shadow: 0px 0px 3px gray;
  border-radius: 3px;
}
.card-title {
  font-size: 17px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding-top: 10px;
}
.card-desc {
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-left: 10px;
}
.card-sub {
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 20px;
}
.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
