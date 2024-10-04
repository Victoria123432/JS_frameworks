<template>
    <div class="user-card">
        <img src="userData.photo" alt="User Photo" class="user-photo">
        <h2>{{ userData.firstName }} {{ userData.lastName }}</h2>
        <p><strong>Gender:</strong>{{ userData.gender }}</p>
        <p><strong>Age:</strong> {{ userData.age }}</p>
        <p><strong>Position:</strong>{{ userData.position }}</p>
        <p><strong>Hobbies:</strong>{{ userData.hobbies.join(', ') }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


interface UserData{
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    position: string;
    photo: string;
    hobbies:string[];
}

export default defineComponent({
    name: 'UserCard',
    data(){
        return{
            userData:{
                firstName: 'John',
                lastName: 'Doe',
                gender: 'Male',
                age: 30,
                position: 'Software Developer',
                photo: '',
                hobbies:['Reading', 'Cycling', 'Gaming']
            } as UserData
        };
    }
});
</script>

<style scoped>
.user-card{
 width: 20vw;
 border: 1px solid #ccc;
 border-radius: 10%;
 text-align: center;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.user-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
h2 {
  font-size: 24px;
  color: #333;
}
p {
  font-size: 16px;
  color: #666;
}
</style>