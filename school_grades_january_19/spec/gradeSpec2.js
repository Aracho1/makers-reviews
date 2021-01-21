describe('Grade', () => {

  it("should output a string", () => {
    var grade = new Grade();
    expect(typeof grade.count("Red")).toEqual("string")
  })
  it('should raise an error if the input is empty', () => {
    var grade = new Grade();
    expect(function() {grade.count("")}).toThrowError("no grades found")
  })

  it("should count 1 grade correctly", () => {
    var grade = new Grade();
    expect(grade.count("Red")).toEqual("Red: 1");
  })

  it("should count 2 grades of the same kind correctly", () => {
    var grade = new Grade();
    expect(grade.count("Red,Red")).toEqual("Red: 2")
  })

  it("should count 2 grades of different kinds correctly", () => {
    var grade = new Grade();
    expect(grade.count("Green,Red")).toEqual("Green: 1\nRed: 1");
  })

  it("should count the number of greens", () => {
    var grade = new Grade();
    expect(grade.count("Green,Green")).toEqual("Green: 2");
  })

  it("should put the numbers with a ':'", () => {
    var grade = new Grade();
    expect(grade.count("Green,Green,Green")).toEqual("Green: 3");
  })

  it("should count multiple colors and return in a format", () => {
    var grade = new Grade();
    expect(grade.count("Red,Red,Green,Green,Green")).toEqual("Green: 3\nRed: 2");
  })

  it("should return all colors", () => {
    var grade = new Grade();
    expect(grade.count("Red,Red,Green,Green,Amber")).toEqual("Green: 2\nAmber: 1\nRed: 2");
  })

  it("should return all colors", () => {
    var grade = new Grade();
    expect(grade.count("Red,Red,Green,Green")).toEqual("Green: 2\nRed: 2");
  })

  
})