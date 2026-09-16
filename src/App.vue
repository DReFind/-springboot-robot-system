<script setup>
import Navbar from './components/Navbar.vue'
import HeroBanner from './components/HeroBanner.vue'
import RobotCard from './components/RobotCard.vue'

const robots = [
  {
    id: 1,
    name: '智能送餐机器人',
    type: '服务机器人',
    description: '适用于餐厅、酒店等场景，能够自主导航并完成送餐任务。',
    price: '¥12,800',
    image: '/images/robot1.jpg'
  },
  {
    id: 2,
    name: '智能清洁机器人',
    type: '清洁机器人',
    description: '自动完成地面清扫、吸尘与清洁，提高日常清洁效率。',
    price: '¥9,800',
    image: '/images/robot2.jpg'
  },
  {
    id: 3,
    name: '智能巡检机器人',
    type: '巡检机器人',
    description: '支持智能巡逻、环境检测和异常识别，适用于多种工业场景。',
    price: '¥28,800',
    image: '/images/robot3.jpg'
  },
  {
    id: 4,
    name: '智能迎宾机器人',
    type: '迎宾机器人',
    description: '具备语音交互、人脸识别和智能导航功能，适用于酒店和展厅。',
    price: '¥16,800',
    image: '/images/robot4.jpg'
  },
  {
    id: 5,
    name: '智能教育机器人',
    type: '教育机器人',
    description: '面向教育场景打造，支持语音互动、课程辅助和智能教学。',
    price: '¥8,800',
    image: '/images/robot5.jpg'
  },
  {
    id: 6,
    name: '工业机械臂',
    type: '工业机器人',
    description: '高精度工业机械臂，可应用于装配、搬运、焊接等生产环节。',
    price: '¥36,800',
    image: '/images/robot6.jpg'
  }
]
</script>

<template>
  <div class="page">

    <!-- 顶部导航 -->
    <Navbar />

    <!-- 第一屏：全屏轮播图 -->
    <HeroBanner />

    <!-- 机器人产品 -->
    <section class="robot-section">

      <div class="section-header">
        <div>
          <span class="section-small-title">ROBOT PRODUCTS</span>
          <h2>热门机器人产品</h2>
          <p>探索适用于不同应用场景的智能机器人</p>
        </div>

        <button class="more-btn">
          查看全部产品
          <span>→</span>
        </button>
      </div>

      <!-- 6个机器人：3 × 2 -->
      <div class="robot-grid">

        <RobotCard
          v-for="robot in robots"
          :key="robot.id"
          :robot="robot"
        />

      </div>

    </section>

    <!-- 底部 -->
    <footer class="footer">
      <div class="footer-content">
        <div>
          <h3>ROBOT<span>SHOP</span></h3>
          <p>智能机器人产品销售平台</p>
        </div>

        <div class="footer-right">
          © 2026 Robot Shop. All Rights Reserved.
        </div>
      </div>
    </footer>

  </div>
</template>