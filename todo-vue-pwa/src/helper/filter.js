import Vue from 'vue'
import * as moment from 'moment'

Vue.filter('capitalize', function (value) {
  return value.replace(/\b\w/g, l => l.toUpperCase())
})

Vue.filter('takeImage', function (value) {
  return process.env.SERVER_IP + value
})

Vue.filter('convertTime', function (date) {
  return moment(date, 'MM-DD-YYYY').format('MMMM Do YYYY, h:mm:ss a')
})
