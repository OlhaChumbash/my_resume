<template>
    <div class="languages-list">      
      <ul>
        <li v-for="language in languages" :key="language.name">
          <span class="language-flag">
            <i :class="flagClass(language.name)"></i>
          </span>
          <span class="language-details">
            <span class="language-name">{{ language.name }}</span>
            <span class="language-level">{{ language.level }}</span>
          </span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        languages: [
          { name: 'Ukrainian', level: 'Native' },
          { name: 'Russian', level: 'Native' },
          { name: 'English', level: 'B1' },
          { name: 'German', level: 'B1' },
        ],
      };
    },
    methods: {
      flagClass(languageName) {
        const languageCodes = {
          'Ukrainian': 'ua',
          'Russian': 'ru',
          'English': 'gb',
          'German': 'de',         
        };
        return `flag-icon flag-icon-${languageCodes[languageName]}`;
      },
    },
  };
  </script>

<style> 
 .languages-list {
    margin-bottom: 20px;
  }
    
  .languages-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 42%;
    flex-grow: 1;
    margin: 0 20px;
   }
  
  .languages-list li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .languages-list .language-flag {
    display: inline-block;
    margin-right: 10px;
  }
  
  .languages-list .flag-icon {
    font-size: 24px;
    vertical-align: middle;
  }
  
  .languages-list .language-details {
    display: flex;
    justify-content: space-between;

    flex-grow: 1;
  }  

  
  .languages-list .language-name {
    font-size: 16px;
    font-weight: bold;
    flex-grow: 1;    
  }
  
  .languages-list .language-level {
    font-size: 14px;
    color: #aaa;
  }
  
  </style>