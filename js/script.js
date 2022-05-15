const app = new Vue(
    {
        el: "#root",
        data: {
            emailListArray: []
        },
        methods: {
            generateEmail() {
                this.emailListArray = [];
                for (let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((resp) => {
                        let rndEmail = resp.data.response;
                        this.emailListArray.push(rndEmail);
                    });
                }
                console.log(this.emailListArray);
            }
        },

    }
) 

