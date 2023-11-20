import { mount } from '@vue/test-utils'
import { describe, vi, expect, it } from "vitest"
import LoginForm from '../LoginForm.vue'

describe( 'LoginForm', () => {
  const wrapper = mount( LoginForm )
  const emailInput = wrapper.find( 'input[type="email"]' )
  const passwordInput = wrapper.find( 'input[type="password"]' )
  const submitButton = wrapper.find( 'button[type="submit"]' )


  it( 'displays an error message when the form is submitted with empty fields', async () => {

    await emailInput.setValue( '' )
    await passwordInput.setValue( '' )
    expect( wrapper.vm.email ).toBe( '' )
    expect( wrapper.vm.password ).toBe( '' )
    await submitButton.trigger( 'submit' )
    expect( wrapper.find( '.error-message' ).exists() ).toBe( true )
  } )

  it( 'emits a "submit" event with the correct credentials when the form is submitted', async () => {
    const expectedData = { email: 'test@example.com', password: 'password123' }

    await emailInput.setValue( expectedData.email )
    await passwordInput.setValue( expectedData.password )

    // values in data function in login form
    expect( wrapper.vm.email ).toBe( expectedData.email )
    expect( wrapper.vm.password ).toBe( expectedData.password )

    // Create a spy for console.log()
    const logSpy = vi.spyOn( console, 'log' )


    await submitButton.trigger( 'submit' )
    expect( logSpy ).toHaveBeenCalledWith( expectedData )

    logSpy.mockRestore()
  } )
} )