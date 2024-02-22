<template>
    <div class="contact">   
      <div class="contact-info">
        <ul>
          <li v-if="phone">
            <span class="icon"><i class="fas fa-phone"></i></span>
            <span class="label">Phone:</span>
            <span class="value">{{ phone }}</span>
          </li>
          <li v-if="email">
            <span class="icon"><i class="fas fa-envelope"></i></span>
            <span class="label">Email:</span>
            <a v-bind:href="'mailto:' + email" class="value">{{ email }}</a>
          </li>
          <li v-if="linkedin">
            <span class="icon"><i class="fab fa-linkedin"></i></span>
            <span class="label">LinkedIn:</span>
            <a v-bind:href="linkedin" class="value" target="_blank">{{ linkedin }}</a>
          </li>
          <li v-if="github">
            <span class="icon"><i class="fab fa-github"></i></span>
            <span class="label">GitHub:</span>
            <a v-bind:href="github" class="value" target="_blank">{{ github }}</a>
          </li>
        </ul>
      </div>
  
      <img class="profile-img" :src="photo" alt="Photo">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phone: '+38 (097) 32 46 983',
        email: 'olyachumbash@gmail.com', 
        linkedin: 'https://www.linkedin.com/in/olha-chumbash-597568269/', 
        github: 'https://github.com/OlhaChumbash', 
        photo: require ('@/static/images/me.jpg') 
      };
    }
  };
  </script>
  
  <style scoped>
  .contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .contact-info ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .contact-info li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .contact-info .icon {
    width: 30px;
    text-align: center;
    font-size: 16px;
    color: #ddd;
  }
  
  .contact-info .label {
    flex-grow: 1;
    font-weight: bold;
  }
  
  .contact-info .value {
    color: #000;
  }
  
  .profile-img {
    width: 150px;
    margin: 0 auto;
    display: block;
  }
    
  </style>
  