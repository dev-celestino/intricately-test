<template >
  <div>
    <IntHeader />
    <main id="main">
      <router-view></router-view>
    </main>
    <IntFooter />
  </div>
</template>

<script>
import IntHeader from "@/components/organisms/IntHeader";
import IntFooter from "@/components/organisms/IntFooter";
export default {
  components: {
    IntHeader,
    IntFooter
  }
};
</script>

<style lang="scss">
</style>