<script>
import { ref } from 'vue';

export default {
  name: "UtmropList",
  setup() {
    const filters = ref({
      sessionCode1: '',
      sessionCode2: '',
      sessionCode3: '',
    });

    const projects = ref([]);

    const filterProjects = () => {
      console.log('Filtering projects with:', filters.value);

    };

    const clearFilters = () => {
      filters.value.sessionCode1 = '';
      filters.value.sessionCode2 = '';
      filters.value.sessionCode3 = '';
      projects.value = [];
    };

    return {
      filters,
      projects,
      filterProjects,
      clearFilters,
    };
  },
};
</script>

<template>
  <div>
    <!-- Filter Section -->
    <div class="filter-section">
      <h2>Filter ROP Projects</h2>
      <form @submit.prevent="filterProjects">
        <div class="input-group">
          <input 
            type="text" 
            v-model="filters.sessionCode1" 
            placeholder="Session Code"
          >
          <input 
            type="text" 
            v-model="filters.sessionCode2" 
            placeholder="Session Code"
          >
          <input 
            type="text" 
            v-model="filters.sessionCode3" 
            placeholder="Session Code"
          >
        </div>
        <div class="button-group">
          <button type="button" @click="filterProjects">Filter Projects</button>
          <button type="button" @click="clearFilters">Clear Filters</button>
        </div>
      </form>
    </div>

    <!-- Project List Section -->
    <div class="project-list-section">
      <table>
        <thead>
          <tr>
            <th>Session Code</th>
            <th>Project Number</th>
            <th>Course Credit</th>
            <th>Project Title</th>
            <th>Instructor Name</th>
            <th>Request Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="projects.length === 0">
            <td colspan="6" class="no-projects">No projects available</td>
          </tr>
          <tr v-for="project in projects" :key="project.projectNumber">
            <td>{{ project.sessionCode }}</td>
            <td>{{ project.projectNumber }}</td>
            <td>{{ project.courseCredit }}</td>
            <td>{{ project.projectTitle }}</td>
            <td>{{ project.instructorName }}</td>
            <td>{{ project.requestStatus }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.filter-section {
  padding: 30px;
  background-color: #e7f0f9;
  border-radius: 8px;
  margin: 20px auto;
  text-align: center;
  max-width: 900px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.filter-section h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #004aad;
}

.input-group {
  margin-bottom: 20px;
}

.input-group input {
  margin: 0 10px;
  padding: 10px;
  width: 180px;
  border: 1px solid #cfd4d9;
  border-radius: 5px;
}

.button-group {
  display: inline-block;
}

.button-group button {
  padding: 10px 20px;
  margin: 10px 5px;
  background-color: #004aad;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.button-group button:hover {
  background-color: #003780;
}

.project-list-section {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  margin: 20px auto;
  text-align: center;
  max-width: 900px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.project-list-section table {
  width: 100%;
  border-collapse: collapse;
}

.project-list-section th,
.project-list-section td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 0.9em;
}

.project-list-section th {
  background-color: #f1f1f1;
  color: #333;
}

.project-list-section .no-projects {
  text-align: center;
  color: #999;
  padding: 30px 0;
}

table thead {
  border-top: 1px solid #ddd;
  border-bottom: 2px solid #ddd;
}

table thead th {
  font-weight: bold;
}

table tbody tr:hover {
  background-color: #f9f9f9;
}
</style>
