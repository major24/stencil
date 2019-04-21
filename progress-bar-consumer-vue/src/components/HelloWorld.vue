<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <hr />

    <!-- value is required -->
    <mn-progress-bar
      id="mnp"
      ref="mnp"
      :value="initValue">
    </mn-progress-bar>
    <hr />
    <button @click="increment">Test progess bar (increment on each click)</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      initValue: 0
    }
  },
  methods: {
    increment() {
      console.log('increment value...')
      let el = this.$refs.mnp  // element selected
      console.log(this.initValue)
      if (this.initValue === 100) {
        console.log('maximum reached.')
        return
      } else {
        this.initValue = this.initValue + 10
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
