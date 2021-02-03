const app = {
    data() {
        return {
            firstname: 'Pacharaporn',
            lastname:'Kamsanong',
            img: './images/mii.JPG',
            follower: '1.6K',
            likes: '401',
            post: '135',
            career: 'Personal Blog',
            bio: 'You can click the button below to see my instagram :)',
            
        }
    }
}

var mountedApp = Vue.createApp(app).mount('#app')