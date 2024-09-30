<script >
import LanguageSwitcher from "./public/components/language-switcher.component.vue";

export default {
  name: 'app',
  components: {LanguageSwitcher},
  title: 'pt1',
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Home', to: '/home'},
        { label: 'Examiner Performance Overview', to: '/nursing/examiner-performance-overview'}

      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
}

</script>

<template>

  <pv-toast/>
  <header>
    <pv-toolbar class="bg-primary">
      <template #start>
        <img src="https://hign.org/sites/default/files/2022-01/HIGN-logo-1200.png"  height="50px" width="200px" alt="image"/>

        <div class="flex-column text-center">
          <h1>{{ $t('name') }}</h1>
        </div>
      </template>
      <template #end>
        <div class="flex-column">
          <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text" @click="navigate">{{ item.label }}</pv-button>
          </router-link>
          <language-switcher/>
        </div>
      </template>


    </pv-toolbar>
    <pv-drawer v-model:visible="drawer"/>
  </header>
  <main>
    <router-view/>
  </main>

</template>

<style scoped>
h1{
  font-size: 20px;
  margin-right: 150px;
}
</style>
