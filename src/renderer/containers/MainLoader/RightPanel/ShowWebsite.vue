<template>
  <div class = "showWeb">
    <iframe :src='url' width="100%" height="100%" scrolling="auto"/></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: this.$store.getters.getUrl
    };
  },
  created() {
    this.$eventHub.$on("website-content-set", this.websiteContentChange);
  },
  beforeDestroy() {
    this.$eventHub.$off("website-content-set");
  },
  methods: {
    websiteContentChange() {
      this.url = this.$store.getters.getUrl;
    }
  }
};
</script>

<style>
.showWeb {
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  overflow-y: scroll;
  background: white;
}
</style>
