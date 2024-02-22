<template>
    <div class="resume">
      <TitleComponent title="Olha Chumbash" />
      <MyСontacts />
      <TitleComponent title="Profession" /> 
      <MyProfession />
      <TitleComponent title="Education" /> 
      <MyEducation />
      <TitleComponent title="Languages" /> 
      <LanguagesComponent />
      <TitleComponent title="Technology stackhard skills" /> 
      <SkillsList />
    </div>
  </template>
  
  <script>
  import LanguagesComponent from '~/components/LanguagesComponent.vue';
  import MyEducation from '~/components/MyEducation.vue';
  import TitleComponent from '~/components/TitleComponent.vue';
  import MyСontacts from '~/components/MyСontacts.vue';
  import MyProfession from '~/components/MyProfession.vue';
  import SkillsList from '~/components/SkillsList.vue';
  
  export default {
    components: {
      LanguagesComponent,
      MyEducation,
      TitleComponent,
      MyСontacts,
      MyProfession,
      SkillsList
    }
  }
  </script>
  
  <style scoped>

  .resume {  
    max-width: 800px;
    font-size: 16px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  