<script setup>
import HeroPage from "../components/HeroPage.vue";
import SelectWork from "../components/SelectWork.vue";
import ProWork from "../components/ProWork.vue";
import ReView from "../components/ReView.vue";
import AboutPage from '../components/AboutPage.vue';
// import LetTalk from '../components/LetTalk.vue';
</script>

<template>
  <main class="main-content">
    <HeroPage />
    <SelectWork />
    <ProWork />
    <ReView />
    <AboutPage />
    <!-- <LetTalk /> -->
  </main>
</template>

<style scoped>
.main-content {
  flex: 1;
  margin-top: 80px;
}
</style> 