<template>
  <el-container class="chat-container">
    <el-header class="chat-header">聊天室</el-header>
    <el-main class="chat-main">
      <el-scrollbar class="chat-messages">
        <div v-for="(message, index) in messages" :key="index" class="chat-message">
          <strong>{{ message.user }}:</strong>
          {{ message.text }}
        </div>
      </el-scrollbar>
    </el-main>
    <el-footer class="chat-footer">
      <el-input
        v-model="newMessage"
        placeholder="输入消息..."
        @keyup.enter="sendMessage"
        class="chat-input"
      ></el-input>
      <el-button type="primary" @click="sendMessage" class="chat-send-button">发送</el-button>
    </el-footer>
  </el-container>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ChatRoom",
  setup() {
    const messages = ref([
      { user: "Alice", text: "Hi there!" },
      { user: "Bob", text: "Hello!" }
    ]);
    const newMessage = ref("");

    const sendMessage = () => {
      if (newMessage.value.trim() !== "") {
        messages.value.push({ user: "You", text: newMessage.value });
        newMessage.value = "";
      }
    };

    return {
      messages,
      newMessage,
      sendMessage
    };
  }
};
</script>

<style scoped>
.chat-container {
  margin-top: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background-color: #409eff;
  color: white;
  text-align: center;
  line-height: 60px;
}

.chat-main {
  flex: 1;
  overflow: hidden;
}

.chat-messages {
  height: calc(100% - 60px);
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 16px;
}

.chat-message {
  margin-bottom: 10px;
}

.chat-footer {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
}

.chat-input {
  flex: 1;
  margin-right: 10px;
}

.chat-send-button {
  flex-shrink: 0;
}
</style>
