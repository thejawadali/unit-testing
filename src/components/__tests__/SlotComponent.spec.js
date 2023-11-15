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
    expect( wrapper.find( "p" ).text() ).toBe( "Welcome!" )
  } )
} )


// testing named slots
describe( "testing named slots", () => {
  it( "mounts the component", () => {
    expect( SlotComponent ).toBeTruthy()
  } )

  it( "renders the header slot", () => {
    const wrapper = shallowMount( SlotComponent, {
      slots: {
        header: "<h1>Header Slot</h1>",
        default: "<p>Welcome!</p>",
        footer: "<footer>Footer Slot</footer>",
      },
    } )
    // test header slot's value
    expect( wrapper.find( "h1" ).text() ).toBe( "Header Slot" )
  } )

  it( "renders the default slot", () => {
    const wrapper = shallowMount( SlotComponent, {
      slots: {
        default: "<p>Welcome!</p>",
      },
    } )
    // test default slot's value
    expect( wrapper.find( "p" ).text() ).toBe( "Welcome!" )
  } )

  it( "renders the footer slot", () => {
    const wrapper = shallowMount( SlotComponent, {
      slots: {
        footer: "<footer>Footer Slot</footer>",
      },
    } )
    // test footer slot's value
    expect( wrapper.find( "footer" ).text() ).toBe( "Footer Slot" )
  } )
} )

// testing scoped slots
describe( "testing scoped slots", () => {
  it( "mounts the component", () => {
    expect( SlotComponent ).toBeTruthy()
  } )

  it( "renders the scoped slot", () => {
    const wrapper = shallowMount( SlotComponent, {
      slots: {
        scoped: `
        <template #scoped="slotProps">
          <p>{{slotProps.msg}}</p>
        </template>
        `,
      }
    })
    // test scoped slot's value
    expect( wrapper.find( "p" ).text() ).toBe( "this is a custom messages from scoped slot" )
  })

} )
