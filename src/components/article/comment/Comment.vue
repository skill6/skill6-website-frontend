<!--评论模块-->
<template>
  <div class="comment-container">
    <div class="comment" v-for="item in comments" :key="item.commentId">
      <div class="info">
        <img class="avatar" :src="item.commentUserHeadUrl" width="36" height="36">
        <div class="right">
          <div class="name">{{item.commentUserNickName}}</div>
          <div class="date">{{item.commentTime}}</div>
        </div>
      </div>
      <div class="content">{{item.commentContent}}</div>
      <div class="control">
        <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <i class="iconfont icon-like"></i>
          <span class="like-num">{{item.commentThumbsUpCount > 0 ? item.commentThumbsUpCount + '人赞' : '赞'}}</span>
        </span>
        <span class="comment-reply" @click="showCommentInput(item)">
          <i class="iconfont icon-comment"></i>
          <span>回复</span>
        </span>
      </div>
      <div class="reply">
        <div class="item" v-for="reply in item.articleCommentReplyVos" :key="reply.replyId">
          <div class="reply-content">
            <span class="from-name">{{reply.replyUserNickName}}</span>
            <span>:</span>
            <span class="to-name">@{{reply.replyToUserNickName}}</span>
            <span>{{reply.replyContent}}</span>
          </div>
          <div class="reply-bottom">
            <span>{{reply.replyTime}}</span>
            <span class="reply-text" @click="showCommentInput(item, reply)">
              <i class="el-icon-chat-square"></i>
              <span>回复</span>
            </span>
          </div>
        </div>
        <div class="write-reply" v-if="item.articleCommentReplyVos.length > 0" v-on:click="showCommentInput(item)">
          <i class="el-icon-edit"></i>
          <span class="add-comment">添加新评论</span>
        </div>
        <transition name="fade">
          <div class="input-wrapper" v-if="showItemId === item.commentId">
            <el-input
              class="gray-bg-input"
              v-model="inputComment"
              type="textarea"
              :rows="3"
              autofocus
              maxlength="10"
              placeholder="写下你的评论"
            ></el-input>
            <div class="btn-control">
              <span class="cancel" v-on:click="cancel">取消</span>
              <el-button class="btn" type="success" round v-on:click="commitComment">确定</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  components: {},
  data () {
    return {
      inputComment: '',
      showItemId: ''
    }
  },
  computed: {},
  methods: {
    /**
     * 点赞
     */
    likeClick (item) {
      if (item.isLike === null) {
        Vue.$set(item, 'isLike', true)
        item.commentThumbsUpCount++
      } else {
        if (item.isLike) {
          item.commentThumbsUpCount--
        } else {
          item.commentThumbsUpCount++
        }
        item.isLike = !item.isLike
      }
    },
    /**
     * 点击取消按钮
     */
    cancel () {
      this.showItemId = ''
    },
    /**
     * 提交评论
     */
    commitComment () {
      this.showItemId = ''
      this.$emit('updateComment', this.inputComment)
    },
    /**
     * 点击评论按钮显示输入框
     * item: 当前大评论
     * reply: 当前回复的评论
     */
    showCommentInput (item, reply) {
      if (reply) {
        this.inputComment = '@' + reply.commentUserNickName + ' '
      } else {
        this.inputComment = ''
      }
      this.showItemId = item.commentId
    }
  },
  created () {
  }
}
</script>

<style scoped>
.comment-container {
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 50px;
}

.comment {
  display: flex;
  flex-direction: column;
  padding: 20px 0 30px;
  border-top: 1px solid #f0f0f0;
}

.info {
  display: flex;
  align-items: center;
}

.avatar {
  border-radius: 50%;
}

.right {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.name {
  font-size: 16px;
  color: #303133;
  margin-bottom: 5px;
  font-weight: 500;
}

.date {
  font-size: 12px;
  color: #909399;
}

.content {
  font-size: 16px;
  color: #303133;
  line-height: 20px;
  padding: 10px 0;
}

.control {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #909399;
}

.like {
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}

.iconfont {
  font-size: 14px;
  margin-right: 5px;
}

.comment-reply {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.iconfont {
  font-size: 16px;
  margin-right: 5px;
}

.reply {
  margin: 10px 0;
  border-left: 1px solid;
}

.item {
  margin: 0 10px;
  padding: 10px 0;
  border-bottom: 1px dashed #ebeef5;
}

.reply-content {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #303133;
}

.from-name {
  color: #409eff;
}

.from-name:hover {
  color: #333;
}

.to-name {
  color: #409eff;
  margin-left: 5px;
  margin-right: 5px;
}

.to-name:hover {
  color: #333;
}

.reply-bottom {
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-size: 12px;
  color: #909399;
}

.reply-text {
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
}

.reply-text:hover {
  color: #333;
}

.icon-comment {
  margin-right: 5px;
}

.write-reply {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #909399;
  padding: 10px;
  cursor: pointer;
}

.comment-reply:hover {
  color: #333;
}

.el-icon-edit {
  margin-right: 5px;
}

.fade-enter-active,
fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.input-wrapper {
  padding: 10px;
}

.gray-bg-input,
.btn-control {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
}

.cancel {
  font-size: 16px;
  color: #606266;
  margin-right: 20px;
  cursor: pointer;
}

.confirm {
  font-size: 16px;
}
</style>
