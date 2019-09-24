import Vue from 'vue'

Vue.directive('demo', {
  bind: (el, binding, vnode) => {
    console.log('demo bound!')
    el.innerHTML =
      `name - ${binding.name} <br>
      expression - ${binding.expression} <br>
      modifiers - ${JSON.stringify(binding.modifiers)} <br>
      value - ${binding.value} <br>`
  }
})
