new Vue({
  el: "#vue-app",
  data: {
    checkOpen: false,
    customer: [
      // {
      //   building: "A",
      //   room: "101",
      //   clean: {
      //     bedroom: {
      //       isTrue: false,
      //       time: "",
      //       date: ""
      //     },
      //     toilet: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     },
      //     airConditioner: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     }
      //   },
      //   repair: {
      //     electricity: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     },
      //     water: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     },
      //     airConditioner: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     },
      //     door: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     },
      //     other: {
      //       isOther: "พื้น",
      //       time: "",
      //       date: ""
      //     }
      //   }
      // }
    ],
    selectedCus: {
      building: "",
      room: "",
      clean: {
        bedroom: {
          isTrue: false,
          time: "",
          date: ""
        },
        toilet: {
          isTrue: false,
          time: "",
          date: ""
        },
        airConditioner: {
          isTrue: false,
          time: "",
          date: ""
        }
      },
      repair: {
        electricity: {
          isTrue: false,
          time: "",
          date: ""
        },
        water: {
          isTrue: false,
          time: "",
          date: ""
        },
        airConditioner: {
          isTrue: false,
          time: "",
          date: ""
        },
        door: {
          isTrue: false,
          time: "",
          date: ""
        },
        other: {
          isOther: "",
          time: "",
          date: ""
        }
      }
    },
    default_selectedCus: {
      building: "",
      room: "",
      clean: {
        bedroom: {
          isTrue: false,
          time: "",
          date: ""
        },
        toilet: {
          isTrue: false,
          time: "",
          date: ""
        },
        airConditioner: {
          isTrue: false,
          time: "",
          date: ""
        }
      },
      repair: {
        electricity: {
          isTrue: false,
          time: "",
          date: ""
        },
        water: {
          isTrue: false,
          time: "",
          date: ""
        },
        airConditioner: {
          isTrue: false,
          time: "",
          date: ""
        },
        door: {
          isTrue: false,
          time: "",
          date: ""
        },
        other: {
          isOther: "",
          time: "",
          date: ""
        }
      }
    },
    selectedIndex: -1,
    dataset: [
      {
        idnotify: 1,
        building: "A",
        room: "101",
        bedroom: "true",
        bedroomtime: null,
        bedroomdate: null,
        toilet: "true",
        toilettime: null,
        toiletdate: null,
        airconditioner: "false",
        airconditionertime: null,
        airconditionerdate: null,
        electricity: "true",
        electricitytime: null,
        electricitydate: null,
        water: null,
        watertime: null,
        waterdate: null,
        airconditionerRe: "true",
        airconditionerRetime: null,
        airconditionerRedate: null,
        door: "false",
        doortime: null,
        doordate: null,
        other: "พื้น",
        othertime: null,
        otherdate: null
      }
    ]
  },
  methods: {
    openform: function(form, key) {
      if (this.checkOpen == false) {
        document.getElementById(form).style.display = "block";
        this.selectedIndex = key;
        this.selectedCus = JSON.parse(JSON.stringify(this.customer[key]));
        this.checkOpen = true;
        console.log(this.checkOpen);
      }
    },
    closeForm: function(form) {
      document.getElementById(form).style.display = "none";
      this.checkOpen = false;
      console.log(this.checkOpen);
    },
    sentDateAndTimeCleanBedroom: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].clean.bedroom.date !== "" &&
        this.customer[this.selectedIndex].clean.bedroom.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "clean",
          part: "bedroom",
          date: this.customer[this.selectedIndex].clean.bedroom.date,
          time: this.customer[this.selectedIndex].clean.bedroom.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeCleanToilet: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].clean.toilet.date != "" &&
        this.customer[this.selectedIndex].clean.toilet.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "clean",
          part: "toilet",
          date: this.customer[this.selectedIndex].clean.toilet.date,
          time: this.customer[this.selectedIndex].clean.toilet.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeCleanAirConditioner: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].clean.airConditioner.date !== "" &&
        this.customer[this.selectedIndex].clean.airConditioner.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "clean",
          part: "airConditioner",
          date: this.customer[this.selectedIndex].clean.airConditioner.date,
          time: this.customer[this.selectedIndex].clean.airConditioner.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeRepairElectricity: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].repair.electricity.date !== "" &&
        this.customer[this.selectedIndex].repair.electricity.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "repair",
          part: "electricity",
          date: this.customer[this.selectedIndex].repair.electricity.date,
          time: this.customer[this.selectedIndex].repair.electricity.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeRepairWater: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].repair.water.date !== "" &&
        this.customer[this.selectedIndex].repair.water.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "repair",
          part: "water",
          date: this.customer[this.selectedIndex].repair.water.date,
          time: this.customer[this.selectedIndex].repair.water.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeRepairAirConditioner: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].repair.airConditioner.date !== "" &&
        this.customer[this.selectedIndex].repair.airConditioner.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "repair",
          part: "airConditioner",
          date: this.customer[this.selectedIndex].repair.airConditioner.date,
          time: this.customer[this.selectedIndex].repair.airConditioner.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeRepairDoor: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].repair.door.date !== "" &&
        this.customer[this.selectedIndex].repair.door.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "repair",
          part: "door",
          date: this.customer[this.selectedIndex].repair.door.date,
          time: this.customer[this.selectedIndex].repair.door.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeRepairOther: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].repair.other.date !== "" &&
        this.customer[this.selectedIndex].repair.other.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "repair",
          part: "other",
          date: this.customer[this.selectedIndex].repair.other.date,
          time: this.customer[this.selectedIndex].repair.other.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    fixedSizeTBody: function(id) {
      const fix_head = document.getElementById(id);
      console.log(window.innerHeight - fix_head.getBoundingClientRect().top);
      fix_head.style.height =
        window.innerHeight - (fix_head.getBoundingClientRect().top + 50) + "px";
    },
    nextSchedule: function() {
      window.location.href = "staff2.html";
    },
    nextSentDrinkingWater: function() {
      window.location.href = "staff3.html";
    },
    changeData: function() {
      console.log("hello");
      var i;
      for (i = 0; i < this.dataset.length; i++) {
        console.log(i);
        this.selectedCus.building = this.dataset[i].building;
        this.selectedCus.room = this.dataset[i].room;
        if (this.dataset[i].bedroom == "true") {
          console.log("clean");
          this.selectedCus.clean.bedroom.isTrue = true;
        }
        if(this.dataset[i].toilet == "true"){
          console.log("clean");
          this.selectedCus.clean.toilet.isTrue = true;
        }
        if(this.dataset[i].airconditioner== "true"){
          console.log("clean");
          this.selectedCus.clean.airConditioner.isTrue = true;
        }
        if(this.dataset[i].electricity== "true"){
          console.log("clean");
          this.selectedCus.repair.electricity.isTrue = true;
        }
        if(this.dataset[i].water== "true"){
          console.log("repair");
          this.selectedCus.repair.water.isTrue = true;
        }
        if(this.dataset[i].airconditionerRe== "true"){
          console.log("repair");
          this.selectedCus.repair.airConditioner.isTrue = true;
        }
        if(this.dataset[i].door== "true"){
          console.log("repair");
          this.selectedCus.repair.door.isTrue = true;
        }
        if(this.dataset[i].other!== null){
          console.log("repair");
          this.selectedCus.repair.other.isOther = this.dataset[i].other;
        }
        this.customer.push(this.selectedCus)
        console.log(this.selectedCus);
        
        this.selectedCus=this.default_selectedCus
      }
    }
  },
  mounted() {
    // axios.get('/yay').then(res => {
    //   console.log(res.data)
    //   this.dataset=res.data
    // })
    this.changeData();
    this.fixedSizeTBody("fix_head1");
    this.fixedSizeTBody("fix_head2");
    window.addEventListener("resize", () => {
      this.fixedSizeTBody("fix_head1");
      this.fixedSizeTBody("fix_head2");
    });
  }
});
