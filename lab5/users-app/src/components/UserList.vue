<template>
    <div>
        <div class="toolbar">
      <button @click="filterUsers('all')" :class="{ active: filter === 'all' }">All</button>
      <button @click="filterUsers('male')" :class="{ active: filter === 'male' }">Male</button>
      <button @click="filterUsers('female')" :class="{ active: filter === 'female' }">Female</button>
    </div>
    
    <div class="user-list">
      <p v-if="filteredUsers.length === 0">Список користувачів пустий</p>
      <div v-for="(user, index) in filteredUsers" :key="index" class="user-item">
        <div class="user-card" :class="user.age > 18 ? 'card-adult' : 'card-minor'">
          <img :src="user.photo" alt="User Photo" class="user-photo">
          <h2>{{ user.firstName }} {{ user.lastName }}</h2>
          <div class="content">   
            <div class="general">
                <p><strong>Gender:</strong> {{ user.gender }}</p>
                <p v-if="user.age > 18"><strong>Age:</strong> {{ user.age }}</p>
                <p><strong>Position:</strong> {{ user.position }}</p>
            </div>
            <div>
                <p><strong>Hobbies:</strong></p>
                <ul>
                   <li v-for="(hobby, index) in user.hobbies" :key="index">{{ hobby }}</li>
                </ul>
            </div>
          </div> 
        </div>
      </div>
    </div>
    </div>  
</template>

<script lang="ts">
import { defineComponent} from 'vue';

interface UserData {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  position: string;
  photo: string;
  hobbies: string[];
}

export default defineComponent({
 name: 'UserList',
 data() {
     return{
        users:[
        { firstName: 'Vika', lastName: 'Dem', gender: 'Female', age: 23, position: 'Software Developer', photo: require('@/assets/images/user_photo.jpg'), hobbies: ['Reading', 'Cycling', 'Gaming'] },
        { firstName: 'John', lastName: 'Doe', gender: 'Male', age: 22, position: 'Designer', photo: require('@/assets/images/user_photo.jpg'), hobbies: ['Drawing', 'Traveling'] },
        { firstName: 'Alice', lastName: 'Smith', gender: 'Female', age: 17, position: 'Project Manager', photo: require('@/assets/images/user_photo.jpg'), hobbies: ['Cooking', 'Yoga'] },
        { firstName: 'Bob', lastName: 'Brown', gender: 'Male', age: 30, position: 'Data Analyst', photo: require('@/assets/images/user_photo.jpg'), hobbies: ['Gaming', 'Hiking'] },
        { firstName: 'Emily', lastName: 'Davis', gender: 'Female', age: 28, position: 'Marketing Specialist', photo: require('@/assets/images/user_photo.jpg'), hobbies: ['Dancing', 'Photography'] },
        { firstName: 'Michael', lastName: 'Johnson', gender: 'Male', age: 32, position: 'CEO', photo: require('@/assets/images/user_photo.jpg'), hobbies: ['Reading', 'Swimming'] },
        { firstName: 'Sophia', lastName: 'Wilson', gender: 'Female', age: 17, position: 'Web Developer', photo: require('@/assets/images/user_photo.jpg'), hobbies: ['Blogging', 'Gardening'] },
        { firstName: 'Daniel', lastName: 'Taylor', gender: 'Male', age: 27, position: 'Network Engineer', photo: require('@/assets/images/user_photo.jpg'), hobbies: ['Cycling', 'Gaming'] },
        { firstName: 'Olivia', lastName: 'Anderson', gender: 'Female', age: 17, position: 'UX Designer', photo: require('@/assets/images/user_photo.jpg'), hobbies: ['Drawing', 'Traveling'] },
        { firstName: 'James', lastName: 'Martin', gender: 'Male', age: 31, position: 'Software Engineer', photo: require('@/assets/images/user_photo.jpg'), hobbies: ['Hiking', 'Cooking'] },
        ] as UserData[],
        filter: 'all'

     };
 },
 computed:{
    filteredUsers(): UserData[]{
        if (this.filter === 'male'){
            return this.users.filter(user => user.gender === 'Male');
        } else if (this.filter === 'female'){
            return this.users.filter(user => user.gender === 'Female');
        }
        return this.users;
    },
 },
 methods:{
    filterUsers(gender: string){
        this.filter = gender;
    }
 }
})
</script>

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  height: 40vh;
  padding: 1vw;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  overflow: hidden; 
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.general{
    text-align: left;
}
.user-card:hover {
  transform: scale(1.05); 
}
.card-adult{
    border: 2px solid green;
    background-color: #f0f0f0;
}
.card-minor{
    border: 2px solid orange;
    background-color: #f9f2eb;
}
.user-photo {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  object-fit: cover;
}
h2 {
  color: #333;
}
p {
  font-size: 12px;
  color: #666;
}
li{
    font-size: 12px;
    color: #666;
}
.toolbar {
  margin-bottom: 2vh;
}

.toolbar button {
  margin-right: 1vh;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toolbar button.active {
  background-color: #388E3C;
}

.user-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2vh;
}
</style>