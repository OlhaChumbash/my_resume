<template>
    <div class="education-list">     
      <ul>
        <li v-for="education in educations" :key="education.institution">
         <p class="timeframe">{{ education.startDate }} - {{ education.endDate }}</p>
          <div class="education-item">
            <h3>{{ education.institution }}</h3>
            <p class="degree">{{ education.degree }}</p>          
          </div>
        </li>
      </ul>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      educations: [
        {
          institution: "Vinnytsia IT Academy (online)",
          startDate: "February 2023",
          endDate: "Present",
          degree: "Software Engineer Specialization",
        },
        {
          institution: "Kharkiv National University of Internal Affairs, Kharkiv",
          startDate: "October 2008",
          endDate: "October 2012",
          degree: "Bachelor's degree, Law",         
        },
      ],
    };
  },
};
</script>
  
<style>
.education-list {
  margin-bottom: 20px;
}

.education-list h2 {
  margin-bottom: 10px;
}

.education-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.education-list li {
  display: flex;
  margin-bottom: 10px;
}
.education-item {
    display: flex;
    flex-direction: column;
    align-content: center;
}

.education-item h3 {
  margin: 0;
}

.education-item .timeframe,
.education-item .specialization {
  margin-bottom: 5px;
}
.education-item .degree{
    margin: 0;
}
.timeframe{
    width: 30%;
    margin-right: 20px;
}
</style>
