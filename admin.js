new Vue({
  el: "#vue-app",
  data: {
    checkOpen: false,
    textData: "",
    customer: [
      // {
      //   building: "A",
      //   room: "101",
      //   hiringStatus: "เช่าแล้ว",
      //   customerFirst: {
      //     firstname: "สมศรี",
      //     lastname: "มีหวัง",
      //     tel: "0235647420",
      //     id: "134567890123"
      //   },
      //   customerSecond: {
      //     firstname: "สมหวัง",
      //     lastname: "มีหวัง",
      //     tel: "0123456789",
      //     id: "9874563210123"
      //   },
      //   request: {
      //     annoy: {
      //       building: "",
      //       room: "101",
      //       message: "นาฬิกาปลุก"
      //     },
      //     repair: {
      //       electricity: false,
      //       water: false,
      //       airConditioner: false,
      //       door: false,
      //       other: ""
      //     },
      //     clean: {
      //       room: false,
      //       toilet: false,
      //       airConditioner: false
      //     }
      //   },
      //   paymentStatus: false,
      //   rent: {
      //     rates: 5000,
      //     elecStart: 1328,
      //     elecEnd: 1420,
      //     waterStart: 62,
      //     waterEnd: 71,
      //     otherBill: 0
      //   },
      //   obj: ["12345678912TH", "12344678912TH", "12345677912TH"]
      // },
      // {
      //   building: "A",
      //   room: "101",
      //   hiringStatus: "เช่าแล้ว",
      //   customerFirst: {
      //     firstname: "สมศรี",
      //     lastname: "มีหวัง",
      //     tel: "0235647420",
      //     id: "134567890123"
      //   },
      //   customerSecond: {
      //     firstname: "สมหวัง",
      //     lastname: "มีหวัง",
      //     tel: "0123456789",
      //     id: "9874563210123"
      //   },
      //   request: {
      //     annoy: {
      //       building: "A",
      //       room: "101",
      //       message: "นาฬิกาปลุก"
      //     },
      //     repair: {
      //       electricity: false,
      //       water: true,
      //       airConditioner: false,
      //       door: false,
      //       other: ""
      //     },
      //     clean: {
      //       room: true,
      //       toilet: true,
      //       airConditioner: false
      //     }
      //   },
      //   paymentStatus: false,
      //   rent: {
      //     rates: 5000,
      //     elecStart: 1328,
      //     elecEnd: 1420,
      //     waterStart: 62,
      //     waterEnd: 71,
      //     otherBill: 0
      //   },
      //   obj: ["12345678912TH", "12344678912TH", "12345677912TH"]
      // },
      // {
      //   building: "A",
      //   room: "101",
      //   hiringStatus: "เช่าแล้ว",
      //   customerFirst: {
      //     firstname: "สมศรี",
      //     lastname: "มีหวัง",
      //     tel: "0235647420",
      //     id: "134567890123"
      //   },
      //   customerSecond: {
      //     firstname: "สมหวัง",
      //     lastname: "มีหวัง",
      //     tel: "0123456789",
      //     id: "9874563210123"
      //   },
      //   request: {
      //     annoy: {
      //       building: "",
      //       room: "101",
      //       message: "นาฬิกาปลุก"
      //     },
      //     repair: {
      //       electricity: false,
      //       water: false,
      //       airConditioner: false,
      //       door: false,
      //       other: ""
      //     },
      //     clean: {
      //       room: false,
      //       toilet: false,
      //       airConditioner: false
      //     }
      //   },
      //   paymentStatus: false,
      //   rent: {
      //     rates: 5000,
      //     elecStart: 1328,
      //     elecEnd: 1420,
      //     waterStart: 62,
      //     waterEnd: 71,
      //     otherBill: 0
      //   },
      //   obj: ["12345678912TH", "12344678912TH", "12345677912TH"]
      // }
    ],
    selectedCus: {
      building: "",
      room: "",
      hiringStatus: "",
      customerFirst: {
        firstname: "",
        lastname: "",
        tel: "",
        id: ""
      },
      customerSecond: {
        firstname: "",
        lastname: "",
        tel: "",
        id: ""
      },
      request: {
        annoy: {
          building: "",
          room: "",
          message: ""
        },
        repair: {
          electricity: false,
          water: false,
          airConditioner: false,
          door: false,
          other: ""
        },
        clean: {
          room: false,
          toilet: false,
          airConditioner: false
        }
      },
      paymentStatus: false,
      rent: {
        rates: 0,
        elecStart: 0,
        elecEnd: 0,
        waterStart: 0,
        waterEnd: 0,
        otherBill: 0
      },
      obj: []
    },
    CusEmpty: {
      building: "",
      room: "",
      hiringStatus: "ว่าง",
      customerFirst: {
        firstname: "-",
        lastname: "",
        tel: "",
        id: ""
      },
      customerSecond: {
        firstname: "-",
        lastname: "",
        tel: "",
        id: ""
      },
      request: {
        annoy: {
          building: "",
          room: "",
          message: ""
        },
        repair: {
          electricity: false,
          water: false,
          airConditioner: false,
          door: false,
          other: ""
        },
        clean: {
          room: false,
          toilet: false,
          airConditioner: false
        }
      },
      paymentStatus: false,
      rent: {
        rates: 0,
        elecStart: 0,
        elecEnd: 0,
        waterStart: 0,
        waterEnd: 0,
        otherBill: 0
      },
      obj: []
    },
    selectedIndex: -1,
    dataSetCus: [
      {
        iduser: 1,
        username: "userA101_1",
        hash: null,
        firstname: "สมศร",
        lastname: "มี",
        tel: "0235647420",
        id: "134567890123",
        roomse: "1",
        roomnum: "101",
        building: "A"
      },
      {
        iduser: 2,
        username: "userA101_2",
        hash: null,
        firstname: "สมหวัง",
        lastname: "มีหวส",
        tel: "0123456789",
        id: "9874563210123",
        roomse: "2",
        roomnum: "101",
        building: "A"
      },
      {
        iduser: 3,
        username: "userA102_1",
        hash: null,
        firstname: "มีสุข",
        lastname: "ดีจัง",
        tel: "0834816469",
        id: "1206156084536",
        roomse: "1",
        roomnum: "102",
        building: "A"
      },
      {
        iduser: 4,
        username: "userA102_2",
        hash: null,
        firstname: "อยากได้",
        lastname: "เอจัง",
        tel: "0859336074",
        id: "1001212564523",
        roomse: "2",
        roomnum: "102",
        building: "A"
      }
    ],
    dataSetRoom: [
      {
        idroom: 1,
        building: "A",
        roomnumber: "101",
        user1: "1",
        user2: "2",
        hiringStatus: "เช่าแล้ว",
        elecStart: 0,
        elecEndL: 500,
        electbill: 1000,
        waterStart: 0,
        waterEnd: 0,
        waterbill: 1000,
        alert: "102012",
        account: "10212210",
        accountname: "ศิริพล",
        money: "01",
        rate: 20,
        otherCost: 2000,
        paymentStatus: "yes",
        obj: []
      },
      {
        idroom: 2,
        building: "A",
        roomnumber: "102",
        user1: "1",
        user2: "2",
        hiringStatus: "เช่าแล้ว",
        elecStart: 0,
        elecEndL: 500,
        electbill: 1000,
        waterStart: 0,
        waterEnd: 0,
        waterbill: 1000,
        alert: "102012",
        account: "10212210",
        accountname: "ศิริพล",
        money: "01",
        rate: 20,
        otherCost: 3000,
        paymentStatus: "yes",
        obj: []
      }
    ],
    dataNotify: [
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
        otherdate: null,
        alertBuilding: "A",
        alertRoom: "201",
        alertMessage: "นาฬิกาปลุก"
      }
    ]
  },
  methods: {
    fullName: function(cusName) {
      return cusName.firstname + " " + cusName.lastname;
    },
    CalculateRent: function(rent) {
      return (
        Number(rent.rates) +
        this.CalculateElec(rent) +
        this.CalculateWater(rent) +
        Number(rent.otherBill)
      );
    },
    CalculateElec: function(rent) {
      return Number(rent.elecEnd - rent.elecStart) * 8;
    },
    CalculateWater: function(rent) {
      return Number(rent.waterEnd - rent.waterStart) * 18;
    },
    fixedSizeTBody: function() {
      const fix_head = document.getElementById("fix_head");
      console.log(window.innerHeight - fix_head.getBoundingClientRect().top);
      fix_head.style.height =
        window.innerHeight - fix_head.getBoundingClientRect().top + "px";
    },
    openform: function(form, cus) {
      if (this.checkOpen == false) {
        document.getElementById(form).style.display = "block";
        this.selectedIndex = cus;
        console.log(this.customer[cus]);
        // this.$set(this.selectedCus,cus,this.customer[cus]);
        this.selectedCus = JSON.parse(JSON.stringify(this.customer[cus]));
        console.log(this.selectedCus);

        this.checkOpen = true;
      }
      console.log(this.checkOpen);
    },
    closeForm: function(form) {
      document.getElementById(form).style.display = "none";
      this.checkOpen = false;
      console.log(this.checkOpen);
    },
    sentHiringStatusToJson: function(cus) {
      this.selectedIndex = cus;
      this.$forceUpdate();
      if (this.customer[this.selectedIndex].hiringStatus == "ว่าง") {
        this.CusEmpty.building = this.customer[this.selectedIndex].building;
        this.CusEmpty.room = this.customer[this.selectedIndex].room;
        this.customer[this.selectedIndex] = this.CusEmpty;
      }
      var myObj = {
        customer: this.customer[this.selectedIndex]
        // building: this.customer[this.selectedIndex].building,
        // room: this.customer[this.selectedIndex].room,
        // hiringStatus: this.customer[this.selectedIndex].hiringStatus
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
    },
    sentInformationFirstToJson: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        roomnum: this.customer[this.selectedIndex].room,
        roomse: "1",
        firstname: this.customer[this.selectedIndex].customerFirst.firstname,
        lastname: this.customer[this.selectedIndex].customerFirst.lastname,
        tel: this.customer[this.selectedIndex].customerFirst.tel,
        id: this.customer[this.selectedIndex].customerFirst.id
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentInformationSecondToJson: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        roomnum: this.customer[this.selectedIndex].room,
        roomse: "2",
        firstname: this.customer[this.selectedIndex].customerSecond.firstname,
        lastname: this.customer[this.selectedIndex].customerSecond.lastname,
        tel: this.customer[this.selectedIndex].customerSecond.tel,
        id: this.customer[this.selectedIndex].customerSecond.id
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentRentToJson: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        roomnumber: this.customer[this.selectedIndex].room,
        rent: this.CalculateRent(this.customer[this.selectedIndex].rent),
        rates: Number(this.customer[this.selectedIndex].rent.rates),
        elecStart: Number(this.customer[this.selectedIndex].rent.elecStart),
        elecEnd: Number(this.customer[this.selectedIndex].rent.elecEnd),
        electbill: this.CalculateElec(this.customer[this.selectedIndex].rent),
        waterStart: Number(this.customer[this.selectedIndex].rent.waterStart),
        waterEnd: Number(this.customer[this.selectedIndex].rent.waterEnd),
        waterbill: this.CalculateWater(this.customer[this.selectedIndex].rent),
        otherBill: Number(this.customer[this.selectedIndex].rent.otherBill)
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentHaveObjToJson: function(form) {
      this.customer[this.selectedIndex].obj.push(this.textData);
      console.log(this.customer[this.selectedIndex].obj);
      document.getElementById(form).style.display = "none";
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        roomnumber: this.customer[this.selectedIndex].room,
        obj: this.customer[this.selectedIndex].obj
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
      this.textData = "";
      this.checkOpen = false;
    },
    sentReceiveToJson: function(cus) {
      if (this.checkOpen == false) {
        this.selectedIndex = cus;
        if (this.customer[this.selectedIndex].obj.length == 0) {
          alert("ไม่มีพัสดุ");
        } else {
          alert("รับพัสดุเรียบร้อย");
        }
        this.customer[this.selectedIndex].obj = [];
        console.log(this.customer[this.selectedIndex].obj);
        this.$forceUpdate();
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          roomnumber: this.customer[this.selectedIndex].room,
          obj: this.customer[this.selectedIndex].obj
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
        this.selectedIndex = -1;
      }
      console.log(this.checkOpen);
    },
    sentConnectToJson: function(form) {
      document.getElementById(form).style.display = "none";
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        roomnumber: this.customer[this.selectedIndex].room,
        message: this.textData
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
      this.textData = "";
      this.checkOpen = false;
    },
    changeData1: function() {
      console.log("hellloooo1");
      var i;
      for (i = 0; i < this.dataSetRoom.length; i++) {
        this.selectedCus.building = this.dataSetRoom[i].building;
        this.selectedCus.room = this.dataSetRoom[i].roomnumber;
        this.selectedCus.hiringStatus = this.dataSetRoom[i].hiringStatus;
        this.selectedCus.paymentStatus = this.dataSetRoom[i].paymentStatus;
        this.selectedCus.rent.otherBill = this.dataSetRoom[i].otherCost;
        this.selectedCus.obj= this.dataSetRoom[i].obj;
        this.customer.push(this.selectedCus);
        console.log(this.customer);
        this.selectedCus = this.CusEmpty;
      }
    },
    changeData2: function() {
      console.log("hellloooo2");
      var i;
      for (i = 0; i < this.customer.length; i++) {
        for (let j = 0; j < this.dataSetCus.length; j++) {
          if (
            this.customer[i].building == this.dataSetCus[j].building &&
            this.customer[i].room == this.dataSetCus[j].roomnum
          ) {
            if (this.dataSetCus[j].roomse == "2") {
              this.customer[i].customerSecond.firstname = JSON.parse(
                JSON.stringify(this.dataSetCus[j].firstname)
              );
              this.customer[i].customerSecond.lastname = JSON.parse(
                JSON.stringify(this.dataSetCus[j].lastname)
              );
              this.customer[i].customerSecond.tel = JSON.parse(
                JSON.stringify(this.dataSetCus[j].tel)
              );
              this.customer[i].customerSecond.id = JSON.parse(
                JSON.stringify(this.dataSetCus[j].id)
              );
            } else {
              this.customer[i].customerFirst.firstname = JSON.parse(
                JSON.stringify(this.dataSetCus[j].firstname)
              );
              this.customer[i].customerFirst.lastname = JSON.parse(
                JSON.stringify(this.dataSetCus[j].lastname)
              );
              this.customer[i].customerFirst.tel = JSON.parse(
                JSON.stringify(this.dataSetCus[j].tel)
              );
              this.customer[i].customerFirst.id = JSON.parse(
                JSON.stringify(this.dataSetCus[j].id)
              );
            }
          }
        }
      }
    },
    changeData3: function() {
      console.log("hellloooo2");
      var i;
      for (i = 0; i < this.customer.length; i++) {
        for (j = 0; j < this.dataNotify.length; j++) {
          if (
            this.customer[i].building == this.dataSetCus[j].building &&
            this.customer[i].room == this.dataSetCus[j].roomnum
          ){
            if (this.dataNotify[j].bedroom == "true") {
              this.customer[i].request.clean.room = true;
            }
          if (this.dataNotify[j].toilet == "true") {
            this.customer[i].request.clean.toilet = true;
          }
          if (this.dataNotify[j].airConditioner == "true") {
            this.customer[i].request.clean.airConditioner = true;
          }
          if (this.dataNotify[j].electricity == "true") {
            this.customer[i].request.repair.electricity = true;
          }
          if (this.dataNotify[j].water == "true") {
            this.customer[i].request.repair.water = true;
          }
          if (this.dataNotify[j].airconditionerRe == "true") {
            this.customer[i].request.repair.airConditioner = true;
          }
          if (this.dataNotify[j].door == "true") {
            this.customer[i].request.repair.door = true;
          }
          if (this.dataNotify[j].other !== null) {
            this.customer[i].request.repair.other = this.dataNotify[j].other;
          }
          if (this.dataNotify[j].alertBuilding !== null) {
            this.customer[i].request.annoy.building = this.dataNotify[
              j
            ].alertBuilding;
            this.customer[i].request.annoy.room = this.dataNotify[j].alertRoom;
            this.customer[i].request.annoy.message = this.dataNotify[
              j
            ].alertMessage;
          }
          
          }
        }
      }
    }
  },
  mounted() {
    // axios.get('/yay').then(res => {
    //   console.log(res.data)
    //   this.customer=res.data
    // })
    this.changeData1();
    this.changeData2();
    this.changeData3();
    this.fixedSizeTBody();
    window.addEventListener("resize", () => {
      this.fixedSizeTBody();
    });
  }
});
