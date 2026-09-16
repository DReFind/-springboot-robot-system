<script setup>

defineProps({
  robot: {
    type: Object,
    required: true
  }
})

</script>

<template>

  <article class="robot-card">

    <!-- 图片 -->
    <div class="robot-image">

      <img
        :src="robot.image"
        :alt="robot.name"
      />

      <span class="robot-tag">
        {{ robot.type }}
      </span>

      <button class="heart-btn">
        ♡
      </button>

    </div>

    <!-- 内容 -->
    <div class="robot-content">

      <h3>
        {{ robot.name }}
      </h3>

      <p>
        {{ robot.description }}
      </p>

      <div class="robot-bottom">

        <div class="price">
          {{ robot.price }}
        </div>

        <button class="detail-btn">
          查看详情
          <span>→</span>
        </button>

      </div>

    </div>

  </article>

</template>