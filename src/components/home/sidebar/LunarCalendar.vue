<template>
  <div class="lunar-calendar flex">
    <span :type="type">
      <i class="el-icon-date"></i>
      {{display}}
    </span>
    <el-button
      type="primary"
      size="mini"
      round
      @click="$refs.calendar.setToday()"
      class="back-today"
    >返回今天</el-button>
    <calendar ref="calendar" :lunar="calendar.lunar" :value="calendar.value"></calendar>
  </div>
</template>

<script>
import Calendar from '../../../lib/calendar'

export default {
  components: {
    Calendar
  },
  data () {
    return {
      type: 'hidden',
      display: '',
      calendar: {
        value: [], // 默认日期
        lunar: true // 显示农历
      }
    }
  },
  created () {
    // 获取当前时间
    const date = new Date()
    this.calendar.value.push(date.getFullYear())
    this.calendar.value.push(date.getMonth() + 1)
    this.calendar.value.push(date.getDate())

    this.display = this.calendar.value.join('/')
    this.type = 'text'
  }
}
</script>

<style>
.lunar-calendar {
  width: 96%;
  margin: 5px auto;
}

.flex {
  box-sizing: border-box;
  display: -webkit-box;
  -webkit-box-pack: start;
  -webkit-box-align: start;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  -webkit-align-items: top;
  display: flex;
  justify-content: space-between;
  align-items: top;
  flex-flow: row wrap;
  margin-top: 20px;
  border: 1px solid #dcdee2;
  border-color: #e8eaec;
}

.flex > div {
  width: 25%;
  border: 1px solid #eee;
  border-radius: 2px;
  position: relative;
}

.flex > span {
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #dedede;
  padding: 2px 5px;
  font-size: 16px;
  color: #666;
}

.back-today {
  margin: 2px;
}
</style>
