<template>
  <button
    class="simple-button"
    :class="[
      type ? `simple-button--${type}` : '',
      outline || text ? 'simple-button--outline' : '',
      type && outline && text ? `simple-button--${type}--color` : '',
      type && text && !outline
        ? `simple-button--${type}--color simple-button--color`
        : '',
      disabled && outline && text ? 'simple-button--disabled--outline' : '',
      disabled && text && !outline ? 'simple-button--disabled--text' : '',
      disabled && !text && !outline
        ? 'simple-button--gray simple-button--disabled'
        : '',
      size ? `simple-button--${size}` : '',
      block ? 'simple-button-block' : '',
      round ? 'simple-button-round' : '',
    ]"
    :style="{
      color: textColor,
      backgroundColor: color,
      backgroundImage: color,
    }"
  >
    <span v-if="!loadingType"><slot></slot></span>
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
      v-if="loadingType == 'circle'"
    >
      <path
        fill="#fff"
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
      v-if="loadingType == 'rect'"
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
      <rect x="27" y="27" fill="#fff" width="46" height="50">
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
      v-if="loadingType == 'disappear'"
    >
      <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
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
      v-if="loadingType == 'cube'"
    >
      <path
        fill="#fff"
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
        fill="#fff"
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
        fill="#fff"
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
      v-if="loadingType == 'wave'"
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
      <g fill="#fff">
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
  </button>
</template>

<script>
export default {
  name:'SimplesButton',
  props: {
    type: String,
    text: Boolean,
    outline: Boolean,
    disabled: Boolean,
    size: String,
    block: Boolean,
    color: String,
    textColor: String,
    round: Boolean,
    loadingType: String,
  },
};
</script>

<style lang="css">
.simple-button {
  position: relative;
  width: auto;
  height: 35px;
  padding: 0 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 3px gray;
  font-family: inherit;
  cursor: pointer;
  font-size: 14px;
}

.text-color {
  color: #fff;
}
.simple-button--primary {
  background-color: #3DB2FF;
  color: #fff;
}
.simple-button--primary--color {
  color: #3DB2FF;
  border: 1px solid #3DB2FF;
}

.simple-button--info {
  background-color: rgb(163, 191, 233);
  color: #fff;
}
.simple-button--info--color {
  color: rgb(163, 191, 233);
  border: 1px solid rgb(163, 191, 233);
}
.simple-button--success {
  background-color: rgb(92, 218, 180);
  color: #fff;
}

.simple-button--success--color {
  color: rgb(92, 218, 180);
  border: 1px solid rgb(92, 218, 180);
}
.simple-button--warning {
  background-color: #FFB830;
  color: #fff;
}
.simple-button--warning--color {
  color: #FFB830;
  border: 1px solid #FFB830;
}
.simple-button--danger {
  background-color: #FF2442;
  color: #fff;
}
.simple-button--danger--color {
  color: #FF2442;
  border: 1px solid #FF2442;
}
.simple-button--outline {
  background-color: #fff;
}
.simple-button--color {
  border: none;
  box-shadow: none;
}
.simple-button--disabled {
  color: gray;
  cursor: no-drop;
}
.simple-button--disabled--outline {
  color: gray;
  cursor: no-drop;
  border: 1px solid gray;
}
.simple-button--disabled--text {
  color: gray;
  cursor: no-drop;
  border: none;
  box-shadow: none;
}
.simple-button--gray {
  background-color: rgb(226, 225, 225);
}
.simple-button--small {
  font-size: 12px;
  height: 30px;
}
.simple-button--mini {
  font-size: 8px;
  height: 25px;
}
.simple-button--large {
  font-size: 16px;
  height: 45px;
}
.simple-button-block {
  display: block;
}
.simple-button-round {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
svg {
  width: 50px;
  height: 35px;
}
</style>
