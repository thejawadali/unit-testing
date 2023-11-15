import { describe, expect } from "vitest"
import SignUpForm from "../SignUpForm.vue"
import { shallowMount } from "@vue/test-utils"

describe( "testing signup form", () => {
  it( "renders the signup form", () => {
    expect( SignUpForm ).toBeTruthy()
  } )
  const wrapper = shallowMount( SignUpForm )
  it( "username field is binded", async () => {
    await wrapper.find( "#username" ).setValue( "John" )
    expect( wrapper.vm.username ).toBe( "John" )
  } )
  it( "password field is binded", async () => {
    await wrapper.find( "#password" ).setValue( "123123123" )
    expect( wrapper.vm.password ).toBe( "123123123" )
  } )

  it( "p is reflecting username", async () => {
    await wrapper.find( "#username" ).setValue( "John" )
    expect( wrapper.find( "p" ).text() ).toBe( "Thanks for submitting John" )
  } )
  /**
   * await wrapper.find('input[type=email]').setValue(email)
  await wrapper.find('textarea').setValue(description)
  await wrapper.find('select').setValue(city)
  await wrapper.find('input[type=checkbox]').setValue()
  await wrapper.find('input[type=radio][value=monthly]').setValue()
   */
} )