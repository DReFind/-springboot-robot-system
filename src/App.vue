<script setup>
import Navbar from './components/Navbar.vue'
import HeroBanner from './components/HeroBanner.vue'
import RobotCard from './components/RobotCard.vue'

const robots = [
  {
    id: 1,
    image: '/front-image-simple/送餐机器人.png',
    name: '智能送餐机器人',
    type: '服务机器人',
    description: '适用于餐厅、酒店等场景，能够自主导航并完成送餐任务。',
    price: '¥12,800'
  },
  {
    id: 2,
    image: '/front-image-simple/清洁机器人.png',
    name: '智能清洁机器人',
    type: '清洁机器人',
    description: '自动完成地面清扫、吸尘与清洁，提高日常清洁效率。',
    price: '¥9,800'
  },
  {
    id: 3,
    image: '/front-image-simple/巡检机器人.png',
    name: '智能巡检机器人',
    type: '巡检机器人',
    description: '支持智能巡逻、环境检测和异常识别，适用于多种工业场景。',
    price: '¥28,800'
  },
  {
    id: 4,
    image: '/front-image-simple/迎宾机器人.jpeg',   
    name: '智能迎宾机器人',
    type: '迎宾机器人',
    description: '具备语音交互、人脸识别和智能导航功能，适用于酒店和展厅。',
    price: '¥16,800'
  },
  {
    id: 5,
    image: '/front-image-simple/教育机器人.png',
    name: '智能教育机器人',
    type: '教育机器人',
    description: '面向教育场景打造，支持语音互动、课程辅助和智能教学。',
    price: '¥8,800'
   
  },
  {
    id: 6,
    image: '/front-image-simple/工业机器人.png',
    name: '工业机械臂',
    type: '工业机器人',
    description: '高精度工业机械臂，可应用于装配、搬运、焊接等生产环节。',
    price: '¥36,800'
  
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
          <div class="contact-list">
            <a class="contact-item" href="https://github.com/DReFind" target="_blank" rel="noreferrer">
              <span class="contact-icon github-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.78-.25.78-.55v-2.14c-3.18.69-3.85-1.34-3.85-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.12 1.17a10.85 10.85 0 0 1 5.68 0c2.16-1.48 3.12-1.17 3.12-1.17.62 1.58.23 2.74.11 3.03.73.8 1.18 1.82 1.18 3.07 0 4.39-2.67 5.35-5.22 5.64.41.35.78 1.04.78 2.1v3.13c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
                </svg>
              </span>
              <span class="contact-copy"><small>GitHub</small><strong>DReFind</strong></span>
            </a>
            <div class="contact-item">
              <span class="contact-icon qq-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 2.2c-5.52 0-10 3.64-10 8.13 0 2.55 1.42 4.82 3.64 6.31-.16.56-.58 2-.67 2.31-.1.4.15.4.32.29l2.72-1.8c1.22.34 2.55.53 3.99.53 5.52 0 10-3.64 10-8.13S17.52 2.2 12 2.2Zm-3.35 8.71a1.17 1.17 0 1 1 0-2.34 1.17 1.17 0 0 1 0 2.34Zm6.7 0a1.17 1.17 0 1 1 0-2.34 1.17 1.17 0 0 1 0 2.34Z" />
                </svg>
              </span>
              <span class="contact-copy"><small>QQ</small><strong>2952235159</strong></span>
            </div>
          </div>
          <div class="copyright">
            © 2026 Robot Shop. 版权归作者所有！.
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>