module.exports = {
  testCode: {},
  log() {
    console.log('hello from test code generator');
  },
  generateTestCode(filePath, componentName) {
    this.generateTestFile(filePath, componentName)



    // for (testId in testList) {
    //   testCode[testId] = {}
    //   console.log(testList[testId].testName);
    // }
  },
}
