<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)

const banners = [
  {
    image: '/front-image-simple/user-index-image-lunbo1.png',
    tag: 'INTELLIGENT ROBOT',
    title: '探索智能机器人的未来',
    description:
      '新一代智能机器人产品，为生活、商业与工业场景提供更加智能的解决方案。'
  },
  {
    image: '/front-image-simple/user-index-image-lunbo2.png',
    tag: 'SMART SERVICE',
    title: '让机器人服务每一个场景',
    description:
      '从餐饮服务到智能巡检，让机器人帮助企业提升效率，创造更多可能。'
  },
  {
    image: '/front-image-simple/user-index-lunbo3.jpeg',
    tag: 'ROBOT TECHNOLOGY',
    title: '科技，让未来触手可及',
    description:
      '融合人工智能、智能感知与自主导航技术，打造更加智能的机器人产品。'
  }
]

let timer = null

function nextSlide() {
  currentIndex.value =
    (currentIndex.value + 1) % banners.length
}

function prevSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + banners.length) % banners.length
}

function goToSlide(index) {
  currentIndex.value = index
}

function startAutoPlay() {
  timer = setInterval(() => {
    nextSlide()
  }, 5000)
}

function stopAutoPlay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>

  <section
    class="hero"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >

    <!-- 轮播图片 -->
    <div
      v-for="(banner, index) in banners"
      :key="index"
      class="hero-slide"
      :class="{ active: currentIndex === index }"
      :style="{
        backgroundImage: `url(${banner.image})`
      }"
    >

      <!-- 黑色渐变遮罩 -->
      <div class="hero-overlay"></div>

      <!-- 内容 -->
      <div class="hero-content">

        <div class="hero-tag">
          {{ banner.tag }}
        </div>

        <h1>
          {{ banner.title }}
        </h1>

        <p>
          {{ banner.description }}
        </p>

        <div class="hero-buttons">

          <button class="primary-btn">
            立即选购
            <span>→</span>
          </button>

          <button class="secondary-btn">
            了解更多
          </button>

        </div>

      </div>

    </div>

    <!-- 左箭头 -->
    <button
      class="hero-arrow hero-arrow-left"
      @click="prevSlide"
    >
      ‹
    </button>

    <!-- 右箭头 -->
    <button
      class="hero-arrow hero-arrow-right"
      @click="nextSlide"
    >
      ›
    </button>

    <!-- 底部指示器 -->
    <div class="hero-indicators">

      <button
        v-for="(banner, index) in banners"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
      ></button>

    </div>

    <!-- 向下滚动 -->
    <div class="scroll-down">
      <span>SCROLL DOWN</span>
      <div class="scroll-line"></div>
    </div>

  </section>

</template>