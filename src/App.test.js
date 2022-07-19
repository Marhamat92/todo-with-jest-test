import React from 'react'
import {render,fireEvent} from '@testing-library/react-native'
import App from './App'

test('should match with snapshot',()=>{
    const comp = render(<App/>)
    expect(comp).toMatchSnapshot()
})


test('should add a task',()=>{
    const comp = render(<App/>)
    const input = comp.getByTestId('input-area')
    fireEvent.changeText(input,'test element')


    const submitButton = comp.getByTestId('button-touchable')
    fireEvent.press(submitButton)

    const flatlist = comp.getByTestId('flatlist')
    expect(flatlist.children).toHaveLength(1)
})

test('should add tasks for multiple times',()=>{
    const comp = render(<App/>)
    const input = comp.getByTestId('input-area')
    fireEvent.changeText(input,'test element')

    const submitButton = comp.getByTestId('button-touchable')
    fireEvent.press(submitButton)
    fireEvent.press(submitButton)
    fireEvent.press(submitButton)
    fireEvent.press(submitButton)

    const flatlist = comp.getByTestId('flatlist')
    expect(flatlist.data.length).toBe(4)

})

test('should not add task if input area is empty',()=>{
    const comp = render(<App/>)
    const input = comp.getByTestId('input-area')
    fireEvent.changeText(input,'')

    const submitButton = comp.getByTestId('button-touchable')
    fireEvent.press(submitButton)

    const flatlist = comp.getByTestId('flatlist')
    expect(flatlist.data.length).toBe(0)
})

//npm run test
//npm test -- -u
//npm test -- -u --watch
//npm test -- -u --watchAll
//npm test -- -u --watchAll --verbose
//npm test -- -u --watchAll --verbose --color
//npm test -- -u --watchAll --verbose --color --verbose
//npm test --coverage