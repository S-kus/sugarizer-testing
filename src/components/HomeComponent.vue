<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <input type="button" value="changeText" v-on:click="changeText()"/>
    <btn-component ref="btn"
			id="1"
			text="one"
		></btn-component>
		<btn-component ref="btn"
			id="2"
			text="two"
		></btn-component>
  </div>
</template>

<script>
import btnComponent from './Button.vue';
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  },
  components: {
    btnComponent,
  },
  methods: {
    changeText() {
      this.$refs.btn.idData="1";
      this.$refs.btn.textData="two";
    },
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
