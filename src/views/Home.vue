
<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Vaccination center
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <div class="q-pa-md q-gutter-sm">
        <q-tree
          default-expand-all
          :nodes="tree"
          node-key="label"
        />
      </div>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" show-if-above side="right" bordered>
      <user-information :user-data="selectedUser"/>
    </q-drawer>

    <q-page-container>
      <div 
        v-for="(user, idx) in userStore.usersData"
        :key="idx"
        style="padding-bottom: 10px"
        class="fit row wrap items-start justify-center content-start">
        <q-card    
          class="main-card--blue col-8"
        >
          <q-card-section>
            <div class="text-h6">{{ `${user.first_name} ${user.last_name}` }}</div>
            <div class="text-subtitle2">by {{ user.vaccine_type }}</div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat @click="showUser(user)">Vaccination info</q-btn>
            <q-btn flat>Register</q-btn>
          </q-card-actions>
      </q-card>
      </div>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Copyright @ Patrik Racsko</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useUsers } from '@/store/User';
  import UserInformation from '@/components/UserInformation.vue';

  // definitions
  const userStore = useUsers()
  const selectedUser = ref(null)
  const leftDrawerOpen = ref(false)
  const rightDrawerOpen = ref(false)
  const tree = [
        {
          label: 'Centers',
          children: [
            {
              label: 'Group users by centers'
            },
            {
              label: 'List centers'
            }
          ]
        },
        {
          label: 'Patients',
          children: [
            {
              label: 'Group centers by users'
            },
            {
              label: 'List users'
            }
          ]
        }]

  // methods
  function toggleRightDrawer () {
    rightDrawerOpen.value = !rightDrawerOpen.value
  }

  function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }

  function showUser (user: any) {
    console.log(user);
    selectedUser.value = user
  }

  // function calls
  userStore.getUserData()

</script>

<style>
.main-card--blue {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  color: white;
}

</style>