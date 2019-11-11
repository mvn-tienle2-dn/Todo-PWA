<template>
  <div class="page-profile">
    <Header/>
    <!-- <input type="file" @change="changeFile($event)">
    <img :src="avatarUrl" alt=""> -->
    <div class="container pd-0">
      <section class="profile-image">
        <!-- <div class="cover">
        </div> -->
        <div class="avatar">
          <img :src="avatarUrl" alt="Avatar" class="avatar">
          <div class="upload-avatar">
            <input type="file" @change="changeFile($event)" class="inp-upload-avatar">
            <button class="btn-no-style avatar-icon"><i class="fas fa-camera"></i></button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Header from '../components/shared/Header.vue';
  import { mapActions } from 'vuex';
  import firebase from 'firebase';

  export default Vue.extend({
    name: 'Profile',
    components: {
      Header,
    },
    data() {
      return {
        avatarUrl: null,
      };
    },
    methods: {
      ...mapActions(['changeAvatar']),
      changeFile(event) {
        const fileList = event.target.files;
        Array.from(Array(fileList.length).keys()).map(x => {
          console.log(fileList[x]);
          this.changeAvatar(fileList[x]);
        });
      },
      upload(file) {
        const storageRef = firebase.storage().ref();
        const upload = storageRef.child('avatars/').put(file).then((snapshot) => {
          console.log('Upload done');

        });
      }
    },
    mounted() {
      const storageRef = firebase.storage().ref();
      const childUrl = storageRef.child('avatars/' + localStorage.getItem('uid'));
      childUrl.getDownloadURL().then((url) => {
        this.avatarUrl = url || '';
        console.log('Get url completed', url);
      });
    }
  });
</script>
