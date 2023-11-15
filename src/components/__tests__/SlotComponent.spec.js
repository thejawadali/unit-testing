import { shallowMount } from "@vue/test-utils"
import SlotComponent from "../SlotComponent.vue"

// testing default slots
describe( "testing slot component", () => {
  it( "mount component", () => {
    expect( SlotComponent ).toBeTruthy()
  } )
  it( "with default slot", () => {
    const wrapper = shallowMount( SlotComponent, {
      slots: {
        default: "<p>Welcome!</p>"
      }
    } )
    // test slot's value
    expect( wrapper.find("p").text() ).toBe( "Welcome!" )
  } )
} )