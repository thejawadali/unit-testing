import { shallowMount } from "@vue/test-utils"
import { expect, it } from "vitest"
import BaseCounter from "../BaseCounter.vue"


describe( 'BaseCounter.vue', () => {
  const wrapper = shallowMount( BaseCounter )
  it( "Should render correctly", () => {
    expect( wrapper.text() ).toMatch( "0" )
  } )

  it( "Increment btn should increment counter", async () => {
    const incrementButton = wrapper.find( '#inc' )
    // Assert that count is initially 0
    expect( wrapper.text() ).toContain( '0' )

    // Simulate a click on the increment button
    await incrementButton.trigger( 'click' )

    // Assert that count has incremented to 1
    expect( wrapper.text() ).toContain( '1' )
    // Simulate a click on the increment button
    await incrementButton.trigger( 'click' )

    // Assert that count has incremented to 1
    expect( wrapper.text() ).toContain( '2' )
  } )

  it( "Decremnt Btn should decrement counter", async () => {
    const descrementButton = wrapper.find( '#dec' )
    // Assert that count is initially 0
    expect( wrapper.text() ).toContain( '2' )

    // Simulate a click on the increment button
    await descrementButton.trigger( 'click' )

    // Assert that count has incremented to 1
    expect( wrapper.text() ).toContain( '1' )
    expect( wrapper ).toMatchSnapshot()
  } )
} )