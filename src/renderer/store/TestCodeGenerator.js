module.exports = {
  generateTestCode(componentName, testList) {
    let testFileContent =
    `import { render, fireEvent, cleanup } from '@testing-library/vue'\n
import ${componentName} from  ./${componentName}.vue\n\nafterEach(cleanup)\n\n`;

    for (let test in testList) {
      let currentTest = testList[test];

      testFileContent += `test('${currentTest['testName']}', async () => {\n`

      const searchQueryTypes = [];
      const testItems = [];
      for (let testItem in currentTest['testItems']) {
        let currentTestItem = currentTest['testItems'][testItem];

        let query = true;
        let str = '';
        if (currentTestItem['selectorName']) {
          searchQueryTypes.push(currentTestItem['queryVariant'] + currentTestItem['queryType']);

          if (query === false) {
            str += `\n`;
            query = true;
          }

          str += `\tconst ${currentTestItem['selectorName']} = ${currentTestItem['queryVariant']}${currentTestItem['queryType']}('${currentTestItem['textToMatch']}')\n`;
        } else {
          if (query === true) {
            str += `\n`;
            query = false;
          }

          str += `\tawait fireEvent.${currentTestItem['eventType']}(${currentTestItem['selectorType']})\n`;
        }

        testItems.push(str);
      }
      testFileContent += `\tconst { ${searchQueryTypes.join(", ")} } = render(Component)\n\n`;

      testItems.forEach(testItem => {
        testFileContent += testItem;
      });

      testFileContent += `})\n\n`
    }

    return testFileContent;
  }
}
