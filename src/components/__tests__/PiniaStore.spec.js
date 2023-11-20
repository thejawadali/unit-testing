import { expect } from "vitest"
import { useCounterStore } from "../../store/counter"
import { setActivePinia, createPinia } from 'pinia'

describe( "testing pinia store", () => {
  let counterStore
  beforeEach( () => {
    setActivePinia(createPinia())
    counterStore = useCounterStore()
  } )
  it('default state', () => {
    expect(counterStore.count).toBe(0)
  } )
  
  it('increments', () => {
    counterStore.incrementCount()
    expect(counterStore.count).toBe(1)
  })
} )