<template>
    <div>
      <h1>{{ game.name }}</h1>
      <img :src="game.image" alt="" class="game-image" />
      <p>{{ game.description }}</p>
      <el-button @click="goBack">返回</el-button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GameDetails',
    data() {
      return {
        game: {},
      };
    },
    created() {
      const gameId = this.$route.params.id;
      const games = [
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
      ];
      this.game = games.find((game) => game.id === parseInt(gameId));
    },
    methods: {
      goBack() {
        this.$router.push('/games');
      },
    },
  };
  </script>
  
  <style scoped>
  .game-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  </style>
  