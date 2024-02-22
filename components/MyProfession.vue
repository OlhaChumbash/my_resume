<template>
    <div class="experience-list">    
      <ul>
        <li v-for="job in jobs" :key="job.startDate">
          <div class="date-range">
            {{ job.startDate }} - {{ job.endDate }}
          </div>
          <div class="job-details">
            <h3>{{ job.title }}</h3>
            <p>{{ job.company }}</p>
            <ul class="job-responsibilities">
              <li v-for="responsibility in job.responsibilities" :key="responsibility">
                {{ responsibility }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        jobs: [
          {
            startDate: "Februar 2017",
            endDate: "Februar 2022",
            title: "Logistics manager",
            company: "GmbH Zapravsky, Mariupol",
            responsibilities: [
              "Permanent updating of the master data of all partners",
              "Close cooperation with the logistics management",
              "Guarding the transportation of materials to their destination",
              "Offering targeted customer service and demonstrating outstanding social competence towards customers and employees",
              "Reporting maintenance and repair requirements for transport vehicles and equipment",
              "Coordinating the team and developing effective transportation routes and plans to facilitate the daily workflow",
              "Leading investigations to review and resolve customer or carrier complaints",
              "Friendly and competent approach to customers",
              "Effective execution of assigned tasks",
              "Fast processing of all tasks that arise",
              "Answering phone calls and processing e-mails",
              "Careful completion of the specified documents",
            ],
          },
          {
            startDate: "August 2012",
            endDate: "August 2015",
            title: "Secretary",
            company: "School Nr. 44, Mariupol",
            responsibilities: [
              "Regular completion of filing",
              "Welcoming and friendly greeting of customers",
              "Organization, administration and issue of office supplies",
              "Several years of professional experience in the secretariat and as an assistant to the management, support in all administrative and organizational tasks",
              "Managing correspondence, setting up appointments and coordinating meetings",
              "Receiving customer inquiries and answering questions",
              "Proper collection and processing of data",
              "Managing general correspondence",
              "Accurate sorting and archiving of company documents",
            ],
          },
        ],
      };
    },
  };
  </script>
  <style>
.experience-list {
    margin-bottom: 20px;
  }

  .experience-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .experience-list li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
  }
  
  .experience-list .date-range {
    width: 38%;
    font-weight: bold;
    margin-right: 10px;
  }
  
  .experience-list .job-details {
    width: 80%;
  }
  
  .experience-list .job-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .experience-list .job-company {
    margin-bottom: 5px;
  }
  
  .experience-list .job-responsibilities {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .experience-list .job-responsibilities li {
  margin-bottom: 5px;
}

.experience-list .job-details h3{
    margin-top: 0;
}

.experience-list .job-details .english-translation {
  margin-top: 10px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
}

.experience-list .job-details .english-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.experience-list .job-details .english-responsibilities {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience-list .job-details .english-responsibilities li {
  margin-bottom: 5px;
}

    </style>