<template>
  <div class="home">
    <eleButton>默认按钮</eleButton>
    <eleButton type="primary"  >成功按钮</eleButton>
    <eleButton type="danger" >危险按钮</eleButton>
    <eleButton type="warning" >警告按钮</eleButton>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      flag: false
    }
  },
  components: {
    eleButton: () => import('../components/button/index.vue')
  },
  methods: {
    handleSubmit () {
      this.flag = true
      setTimeout(() => {
        console.log('123')
        this.flag = false
      }, 3000)
    }
  }
}
</script>
