<template>
    <div>
      <h1>小游戏列表</h1>
      <el-row :gutter="20">
        <el-col :span="8" v-for="game in games" :key="game.id">
          <el-card class="game-card" @click="goToDetails(game.id)">
            <img :src="game.image" alt="" class="game-image" />
            <h2>{{ game.name }}</h2>
            <p>{{ game.description }}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GameList',
    data() {
      return {
        games: [
          {
            id: 1,
            name: '你画我猜',
            description: '一个有趣的绘画和猜谜游戏。',
            image: 'path/to/image1.jpg',
          },
          {
            id: 2,
            name: '狼人杀',
            description: '一款多人参与的角色扮演游戏。',
            image: 'path/to/image2.jpg',
          },
          // 继续添加其他游戏
        ],
      };
    },
    methods: {
      goToDetails(id) {
        this.$router.push(`/games/${id}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .game-card {
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .game-card:hover {
    transform: scale(1.05);
  }
  
  .game-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  </style>
  