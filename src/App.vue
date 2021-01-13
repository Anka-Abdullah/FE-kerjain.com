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
  padding: 3px 12px;
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
.skill {
  border-radius: 7px;
  display: inline-block;
  border: 2px solid #ffaa00;
  padding: 2px 15px;
  background-color: #ffc95d;
  color: #ffffff;
  margin: 10px;
}

@media (max-width: 600px) {
  .b-navbar {
    padding: 16px 5px;
  }
}
</style>
