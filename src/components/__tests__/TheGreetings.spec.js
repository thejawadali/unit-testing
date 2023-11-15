import { mount, shallowMount } from '@vue/test-utils'
import TheGreetings from '../TheGreetings.vue'
import { describe, expect } from "vitest"




// testing props here
describe( 'testing props', async () => {
  it( "mount component", () => {
    expect( TheGreetings ).toBeTruthy()
  } )

  it( "displays good bye message", () => {
    const wrapper = shallowMount( TheGreetings, {
      props: {
        greeting: "Hello World",
        ha: false
      }
    } )
    const h1 = wrapper.find( "h1" )
    expect( h1.text() ).toBe( "good bye" )
  } )

  it( "displays Hello World message", () => {
    const greetMsg = "Hello World"
    const wrapper = shallowMount( TheGreetings, {
      props: {
        greeting: greetMsg,
        ha: true
      }
    } )
    const h1 = wrapper.find( "h1" )
    expect( h1.text() ).toBe( greetMsg )
  } )
} )