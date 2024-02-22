<template>
    <div class="title-component">
      <h2>{{ title }}</h2>
      <div class="underline"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TitleComponent',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style>
  .title-component {
    margin-bottom: 20px;
}

.title-component h2 {
    font-size: 24px;
    margin-bottom: 5px;
    color:#4c4cda;
  }
  
  .title-component .underline {
    height: 2px;
    background-color: #4c4cda;
    width: 100%;
  }
  </style>