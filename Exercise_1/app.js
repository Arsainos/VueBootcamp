new Vue({
	el:'#exercise',
  data:{
  	name:'Artyem',
    age:27,
    img_link:'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'
  },
  methods:{
  	getRandom: function() {
    	return Math.random(0,1);
    }
  }
})