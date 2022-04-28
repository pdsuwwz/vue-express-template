<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VS Code</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Documentation</a>
  </p>

  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <button
    @click="getImage()"
  >
    请求 API 获取图片
  </button>
  <div
    v-if="imageUrl"
  >
    <img
      :src="imageUrl"
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
import service from '@/utils/request'
defineProps({
  msg: {
    type: String,
    default: ''
  }
})

const count = ref(0)

const imageUrl = ref('')
const getImage = async () => {
  imageUrl.value = ''
  const res = await service({
    url: 'getImage',
    method: 'get',
    responseType: 'blob',
    params: {
      fileName: 'google-logo.png' // 测试图片
    }
  })
  const url = window.URL.createObjectURL(res.data)
  imageUrl.value = url
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
