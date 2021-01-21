class Grade {
  constructor() {
    this.red = 0;
    this.green = 0;
    this.amber = 0;
  }


  count(grades) {
    if (grades === "") {
      throw new Error("no grades found");
    }

    let grade_array = grades.split(",");

    for (var i = 0; i < grade_array.length; i++) {
      if (grade_array[i] === "Red") {
        this.red++;
      } else if (grade_array[i] === "Green") {
        this.green++;
      } else if (grade_array[i] === "Amber") {
        this.amber++;
      }
    }

  
    if (this.green > 0) {
      var greens = "Green: " + this.green;
    } else {
      var greens = ""
    }
    
    if (this.red > 0 && this.green > 0) {
      var reds = "\nRed: " + this.red;
    } else if (this.red >0 ){
      var reds = "Red: " + this.red;
    } else {
      var reds = ""
    }

    if (this.amber > 0 && this.red > 0) {
      var ambers = "\nAmber: " + this.amber;
    } else if (this.amber > 0) {
      var ambers = "Amber: " + this.amber;
    } else {
      var ambers = ""
    }
    
    return greens + ambers + reds
    
  }
}