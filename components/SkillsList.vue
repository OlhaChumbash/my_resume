<template>
    <div class="skills-list">
      <div class="columns">
        <div class="column-left">
          <ul>
            <li v-for="skill in leftSkills" :key="skill.name">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}</span>
            </li>
          </ul>
        </div>
        <div class="column-right">
          <ul>
            <li v-for="skill in rightSkills" :key="skill.name">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
 <script>
 export default {
   data() {
     return {
       skills: [
         { name: "Microsoft Office", level: "Proficient" },
         { name: "JavaScript", level: "Intermediate" },
         { name: "GitHub", level: "Familiar" },
         { name: "Figma", level: "Beginner" },
         { name: "Visual Studio Code", level: "Proficient" },
         { name: "Bootstrap", level: "Intermediate" },
         { name: "HTML/CSS", level: "Proficient" },
         { name: "Bürotechnik", level: "Proficient" },
       ],
     };
   },
   computed: {
     leftSkills() {
       return this.skills.slice(0, Math.ceil(this.skills.length / 2));
     },
     rightSkills() {
       return this.skills.slice(Math.ceil(this.skills.length / 2));
     },
   },
 };
 </script>

<style>
.skills-list {
    margin-bottom: 20px;
  }
  
 .skills-list .columns {
    display: flex;
  }
  
  .skills-list .column-left,
  .skills-list .column-right {
    flex-grow: 1;
    margin: 0 30px;
  }
  
  .skills-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .skills-list li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .skills-list .skill-name {
    flex-grow: 1;
    font-weight: bold;
  }
  
  .skills-list .skill-level {
    color: #aaa;
  }
</style>
  
  