<template>
  <div class="simple-loading" :style="{ width: width, height: height }">
    <!-- 圆形加载 -->
    <svg
      version="1.1"
      id="L9"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
      xml:space="preserve"
      v-if="type == 'circle'"
    >
      <path
        :fill="colors"
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
    <!-- 方形加载 -->
    <svg
      version="1.1"
      id="L6"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
      v-if="type == 'rect'"
    >
      <rect
        fill="none"
        stroke="#fff"
        stroke-width="4"
        x="25"
        y="25"
        width="50"
        height="50"
      >
        <animateTransform
          attributeName="transform"
          dur="0.5s"
          from="0 50 50"
          to="180 50 50"
          type="rotate"
          id="strokeBox"
          attributeType="XML"
          begin="rectBox.end"
        />
      </rect>
      <rect x="27" y="27" :fill="colors" width="46" height="50">
        <animate
          attributeName="height"
          dur="1.3s"
          attributeType="XML"
          from="50"
          to="0"
          id="rectBox"
          fill="freeze"
          begin="0s;strokeBox.end"
        />
      </rect>
    </svg>
    <!-- 圆点加载 -->
    <svg
      version="1.1"
      id="L4"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
      xml:space="preserve"
      v-if="type == 'disappear'"
    >
      <circle :fill="colors" stroke="none" cx="6" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle :fill="colors" stroke="none" cx="26" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle :fill="colors" stroke="none" cx="46" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
    <!-- 半圆加载  -->
    <svg
      version="1.1"
      id="L7"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
      v-if="type == 'cube'"
    >
      <path
        :fill="colors"
        d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="2s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
      <path
        :fill="colors"
        d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="-360 50 50"
          repeatCount="indefinite"
        />
      </path>
      <path
        :fill="colors"
        d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="2s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
    <!-- 竖杠加载 -->
    <svg
      version="1.1"
      id="L1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
      v-if="type == 'wave'"
    >
      <circle
        fill="none"
        stroke="#fff"
        stroke-width="6"
        stroke-miterlimit="15"
        stroke-dasharray="14.2472,14.2472"
        cx="50"
        cy="50"
        r="47"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="5s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        fill="none"
        stroke="#fff"
        stroke-width="1"
        stroke-miterlimit="10"
        stroke-dasharray="10,10"
        cx="50"
        cy="50"
        r="39"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="5s"
          from="0 50 50"
          to="-360 50 50"
          repeatCount="indefinite"
        />
      </circle>
      <g :fill="colors">
        <rect x="30" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.1"
          />
        </rect>
        <rect x="40" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.2"
          />
        </rect>
        <rect x="50" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.3"
          />
        </rect>
        <rect x="60" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.4"
          />
        </rect>
        <rect x="70" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.5"
          />
        </rect>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name:'SimpleLoading',
  props: {
    type: String,
    color: String,
    width: String,
    height: String,
  },
  setup(props) {
    let colors = props.color ? props.color : "rgb(5, 5, 5)";
    return { colors };
  },
};
</script>
<style lang="css">
.simple-loading {
  display: inline-block;
  width: 60px;
  height: 60px;
}
</style>
