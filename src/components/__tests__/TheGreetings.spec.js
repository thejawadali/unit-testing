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

// testing computed properties
describe("testing computed properties", () => {
  it("renders the formatted name correctly", () => {
    const wrapper = shallowMount(TheGreetings, {
      props: {
        greeting: "Hello World",
        ha: true
      }
    })
    // The vm (Vue Model) contains the component's state, methods, and computed properties.
    const formattedName = wrapper.vm.formattedName
    expect(formattedName).toBe("John Doe")
  })
})