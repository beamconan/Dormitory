new Vue({
  el: "#vue-app",
  data: {
    listpackageNo: [{No:"12345678912th",date:"2018-8-12"},{No:"12345677912th",date:"2018-8-12"}],
    packageNo: [],
    merge: ""
  },
  methods: {
    moveOnMax: function(field, nextField) {
      var char = document.getElementById(field).value;
      pattern = /[A-Za-z0-9]/;
      if (char.length == 1 && pattern.test(char)) {
        document.getElementById(nextField).focus();
      }
    },
    checkPattern:function(){
      var check=false;
      pattern = /[A-Za-z0-9]/;
      if(pattern.test(this.merge)){
        check=true
      }
      return check
    },
    mergePackageNo: function() {
      this.merge =
        this.packageNo[0] +
        this.packageNo[1] +
        this.packageNo[2] +
        this.packageNo[3] +
        this.packageNo[4] +
        this.packageNo[5] +
        this.packageNo[6] +
        this.packageNo[7] +
        this.packageNo[8] +
        this.packageNo[9] +
        this.packageNo[10] +
        this.packageNo[11] +
        this.packageNo[12];
    },
    clear: function() {
      this.packageNo = [];
      this.merge = "";
    },
    checkObj: function() {
      var i;
      var isTrue = false;

      for (i = 0; i < this.listpackageNo.length; i++) {
        if (this.merge.toUpperCase() == this.listpackageNo[i].No.toUpperCase()) {
          isTrue = true;
        }
      }
      return isTrue;
    },
    setCenter: function(id) {
      const fix_bottom = document.getElementById("nav-bar");
      const fix_center = document.getElementById(id);
      // console.log(window.innerHeight - fix_bottom.getBoundingClientRect().bottom)
      // console.log(fix_center.getBoundingClientRect().bottom - fix_center.getBoundingClientRect().top);
      var center =
        (window.innerHeight -
          fix_bottom.getBoundingClientRect().bottom -
          (fix_center.getBoundingClientRect().bottom -
            fix_center.getBoundingClientRect().top)) /
        2;
      if (center > 0) {
        fix_center.style.marginTop = center + "px";
        fix_center.style.marginBottom = center + "px";
      }
      // console.log(center);
    },
    openform: function() {
      if (this.merge.length == 13 && this.packageNo.length == 13) {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        console.log("open");
        window.onclick = event => {
          if (event.target == modal) {
            this.clear();
            console.log("close");
            modal.style.display = "none";
          }
          this.clear;
        };
      } else {
        var mo = document.getElementById("no");
        mo.style.display = "block";
        console.log("open");
        window.onclick = (event) => {
          if (event.target == mo) {

            console.log("close");
            mo.style.display = "none";
          }
        };
      }
    }
  },
  mounted() {
          // axios.get('/yay').then(res => {
    //   console.log(res.data)
    //   this.listpackageNo=res.data
    // })
    this.setCenter("top");
    window.addEventListener("resize", () => {
        this.setCenter("top");
      })
  }
});
