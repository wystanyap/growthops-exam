const app = Vue.createApp({

//maintain state
data(){
    return {
        infos: [],
        selected: "ALL",
        filteredInfos: [],
        currentDate: ""
    }
},

watch: {
    selected(val){
        //number 3
       if(val === "ALL"){
           //copy this infos to this.filteredinfos
           this.filteredInfos = JSON.parse(JSON.stringify(this.infos));
        }
        else if(val === "20_AND_BELOW"){
            this.filteredInfos = this.infos.filter(info => info.age < 20);
        }
        else if(val === "21_TO_39"){
            this.filteredInfos = this.infos.filter(info => info.age >= 21 && info.age <= 39);
        }
        else if(val === "40_AND_ABOVE"){
            this.filteredInfos = this.infos.filter(info => info.age >= 40);
        }
    }
},

methods: {
    //number 4
    convertDate(event){
        //regex for validation
        if(this.currentDate.match(/\d{2}\/\d{2}\/\d{4}/)){
            var arr = this.currentDate.split("/");
            alert(arr[2] + "-" + arr[1] + "-" + arr[0])
        }
        else{
            alert("Invalid Input!");
        }

    },

//number 5
    countMe(){
        for(i = 1;i <= 100;i++){
            if(i%3 === 0){
                console.log("Foo");
            }
            else if(i%5 === 0){
                console.log("Bar");
            }
            else{
                console.log(i);
            }
        }
    },
},

mounted(){
    //used axios for REST call
    setTimeout(()=>{
        axios.get("http://www.mocky.io/v2/5d73bf3d3300003733081869")
        .then(response=>{
            this.infos = response.data;
            this.filteredInfos = response.data;
        })
    },1500)
    this.countMe();
}


});

app.mount("#myApp");