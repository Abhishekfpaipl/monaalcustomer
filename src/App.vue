<template>
  <TopNav v-if="!hide"/>
  <router-view />
  <bottom-nav v-if="!hide" style="position: fixed; bottom: 0px; width: 100%;" />
</template>
<script>
import BottomNav from '@/components/navbar/BottomNav.vue'
import TopNav from '@/components/navbar/TopNav.vue'
export default {
  components: { BottomNav, TopNav },
  computed: {
    hide() {
      const hiddenPage = ['RootPage'];
      return hiddenPage.includes(this.$route.name)
    }
  }
}
</script>