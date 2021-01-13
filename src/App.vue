<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: 'b612regular';
  src: url('./assets/Fonts/b612-regular-webfont.woff2') format('woff2'),
    url('./assets/Fonts/b612-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'b612bold';
  src: url('./assets/Fonts/b612-bold-webfont.woff2') format('woff2'),
    url('./assets/Fonts/b612-bold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
* {
  font-family: 'b612regular';
}
.button {
  border-radius: 10px;
  padding: 4px 12px;
  margin: 0 10px;
}
.button:focus {
  outline: none;
}
.button:hover {
  transform: scale(1.1);
}
.button-white {
  background-color: #ffffff;
  border: 2px solid #5e50a1;
  color: #5e50a1;
}
.button-purple {
  background-color: #5e50a1;
  border: 2px solid #5e50a1;
  color: #ffffff;
}
</style>
