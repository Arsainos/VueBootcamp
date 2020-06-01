new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods:{
        showAlert: function(event) {
          alert('alert');
      },
      changeKeyDownInput: function(event) {
          this.value = event.target.value;
      }
    }
});