import ThePosts from "../ThePosts.vue"
import axios from "axios"
import { flushPromises, shallowMount } from "@vue/test-utils"
import { describe, expect } from "vitest"

const mockPostList = [
  {
    userId: 1,
    id: 1,
    title: "title 1",
    body: "body 1"
  },
  {
    userId: 2,
    id: 2,
    title: "title 2",
    body: "body 2"
  },
  {
    userId: 3,
    id: 3,
    title: "title 3",
    body: "body 3"
  }
]

// vi.spyOn( axios, 'get' ).mockResolvedValue( { data: mockPostList } )

// describe( "testing posts component (with spyOn)", () => {
//   it( "mount component", () => {
//     expect( ThePosts ).toBeTruthy()
//   } )
//   it( "fetch posts", async () => {
//     const wrapper = shallowMount( ThePosts )
//     await wrapper.get( "button" ).trigger( "click" )
//     expect( axios.get ).toHaveBeenCalledTimes( 1 )
//     expect( axios.get ).toHaveBeenCalledWith( 'https://jsonplaceholder.typicode.com/posts?_limit=5' )
//     // wait until all promises are settled and DOM updates
//     await flushPromises()
//     // find li of posts
//     const posts = wrapper.findAll( "li" )
//     expect( posts ).toHaveLength( 3 )

//     expect( wrapper.vm.posts ).toEqual( mockPostList )
//   } )
// } )




// Mock the axios library
vi.mock( "axios", () => {
  return {
    default: {
      get: vi.fn(),
    },
  }
} )

describe( "testing posts component (with mock)", () => {
  let wrapper = null
  beforeEach( () => {
    wrapper = shallowMount( ThePosts )
    // Set the mock call to GET to return a successful GET response
    axios.get.mockResolvedValue( { data: mockPostList } )
  } )
  it( "should load the posts", async () => {
    await wrapper.get( "button" ).trigger( "click" )
    await flushPromises()
    expect( axios.get ).toHaveBeenCalledTimes( 1 )
    expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts?_limit=5")
    expect( wrapper.vm.posts ).toEqual( mockPostList )
  } )
} )