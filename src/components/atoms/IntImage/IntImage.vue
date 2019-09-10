<template >
  <figure>
    <img :src="src" :alt="alt" :srcset="srcset" />
  </figure>
</template>
<script>
export default {
  props: {
    src: {
      required: true,
      type: String
    },
    alt: {
      required: true,
      type: String
    }
  },
  computed: {
    srcset() {
      const timesResponsive = ["", 2, 3];
      return timesResponsive
        .map((time, index) => {
          const hasAt = index > 0;
          const newSrc = this.src.split(/[\w-]+.(jpg|png|txt)/g);
          console.log(newSrc);

          return hasAt ? `${newSrc[0]}@${time}${newSrc[1]}` : this.src;
        })
        .join(",");
    }
  }
};
</script>