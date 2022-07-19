import React from 'react'
import {render,fireEvent} from '@testing-library/react-native'
import Button from './Button'

test('should match with snapshot 1', () => { 
    const comp = render(<Button/>) 
    expect(comp).toMatchSnapshot() 
    // render the component
    // compare with snapshot,expect method is used to compare the component with snapshot
    //we can use different method instead of toMatchSnapshot
})

//below test is to check if button title is displayed correctly
test('button title should be correct',()=>{
   const testTitle = 'Button'
    const comp = render(<Button title={testTitle} />)
    const buttonText = comp.getByTestId('button-title').children[0]
    expect(buttonText).toBe(testTitle)
})

//below test is to check if button is clickable
test('should trigger onPress',()=>{
    const mockFunction = jest.fn()
    const comp  = render(<Button onClick={mockFunction} />)
    const buttonTouchable = comp.getByTestId('button-touchable')
    fireEvent.press(buttonTouchable,"press") //press is the event name,fireEvent is used to trigger the event by jest
    expect(mockFunction).toBeCalled();
})

//below test is o check button style
test('should have correct style',()=>{
    const comp = render(<Button />)
    const buttonContainerStyle = comp.getByTestId('button-touchable').props.style
    expect(buttonContainerStyle).toEqual({backgroundColor: '#00ff00'}) //we should write all css if we use tailwind otherwise,
    //we can use const to include all css or we can use vanilla css of react ,nake primary thme or secondary theme to check the style
}
)



//with this test we can see that the button is rendered correctly
//lets create example test again:

test('check number',()=>{   //this test will check if the number is equal to 10,if not it will fail
    expect (5 + 5).toBe(10)
})