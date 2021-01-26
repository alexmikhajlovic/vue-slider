var app = new Vue({

    el: '#app',
    data: {
        counter: 0,
        images: [
            'img/img1.jpg',
            'img/img2.jpg',
            'img/img3.jpg',
            'img/img4.jpg',
        ],
        interval: '',
    },
    created(){
        this.interval = setInterval(this.nextImg,3000);
    }, 
    methods: {
        nextImg(){
            (this.counter == this.images.length -1) ? this.counter = 0 :this.counter++;
        },
        prevImg(){
            (this.counter < 1) ? this.counter = (this.images.length -1) :this.counter--;
        },
        changeImg(i){
            this.counter = i;
            clearInterval(this.interval);
        },
    },
    
});