const add = ( a, b ) => a + b

const mockAdd = vi.fn().mockImplementation(add )
test( "testing add function", () => {
  expect( mockAdd( 1, 2 ) ).toBe( 3 )
  expect( mockAdd ).toHaveBeenCalled()
  expect( mockAdd ).toHaveBeenCalledTimes( 1 )
  expect( mockAdd ).toHaveBeenCalledWith( 1, 2 )
} )