# todo-with-jest-test

//npm run test for running
//npm test -- -u for update
//npm test -- -u --watch to watch test
//npm test -- -u --watchAll to watch all
//npm test -- -u --watchAll --verbose
//npm test -- -u --watchAll --verbose --color
//npm test -- -u --watchAll --verbose --color --verbose
//npm test --coverage to get final test list file 



# **Unit Testing with Jest?**

Using tools are below:

[https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started)

[https://testing-library.com/docs/](https://testing-library.com/docs/)

[https://callstack.github.io/react-native-testing-library/docs/getting-started](https://callstack.github.io/react-native-testing-library/docs/getting-started)

For example , lets create snapshot test for our Button.js component. Before that we create Button folder and add inside 

Button.js,

Button.test.js

inside Button.test.js we use function of jest.js like below:

```jsx
import React from 'react'
import {render} from '@testing-library/react-native'
import Button from './Button'

test('should match with snapshot', () => { 
    const comp = render(<Button />)
    expect(comp).toMatchSnapshot()
})
```

Then if we have expo project, we should install jest with expo and then add some lines to our 

package.json 

```jsx
"scripts": {
  ...
  "test": "jest"
},
"jest": {
  "preset": "jest-expo"
}
```

and use npm run test command to test your component.
