import { shallowMount, createLocalVue } from "@vue/test-utils"
import Vuex from 'vuex'
import flushPromises from "flush-promises"
import ItemList from '../ItemList.vue'
import Item from '../Item.vue'

import { merge, mergeWith } from "lodash"

function customizer(objValue, srcValue) {
  if (Array.isArray(srcValue)) {
    return srcValue
  }
  if (srcValue instanceof Object &&
    Object.keys(srcValue).length === 0) {
      return srcValue
  }
}

const localVue = createLocalVue()

localVue.use(Vuex)



describe('ItemList.vue', () => {

  function createStore (overrides) {
    const defaultStoreConfig = {
      getters: {
        displayItems: jest.fn()
      },
      actions: {
        fetchListData: jest.fn(() => Promise.resolve())
      }
    }
    return new Vuex.Store(mergeWith(defaultStoreConfig, overrides, customizer))
  }

  function createWrapper(overrides) {
    const defaultMountingOptions = {
      mocks: {
        $bar: {
          start: jest.fn(),
          finish: jest.fn(),
          fail: jest.fn()
        }
      },
      localVue,
      store: createStore()
    }
    return shallowMount(ItemList, mergeWith(defaultMountingOptions, overrides, customizer))
  }

  test('renders an Item with data for each item in displayItems', () => {
    const items = [{}, {}, {}]
    const store = createStore({
      getters: {
        displayItems: () => items
      }
    })
    const wrapper = createWrapper({ store })
    const Items = wrapper.findAllComponents(Item)
    expect(Items).toHaveLength(items.length)
    Items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.vm.item).toBe(items[i])
    })
  })

  test('calls $bar start on render', () => {
    const mocks = {
      $bar: {
        start: jest.fn()
      }
    }
    createWrapper({ mocks })
    expect(mocks.$bar.start).toHaveBeenCalled()
  })

  test('calls $bar finish when load successful', async () => {
    const mocks = {
      $bar: {
        finish: jest.fn()
      }
    }
    createWrapper({ mocks })
    await flushPromises()
    expect(mocks.$bar.finish).toHaveBeenCalled( )
  })

  test('dispatches fetchListData with top', async () => {
    const store = createStore()
    store.dispatch = jest.fn(() => Promise.resolve())
    createWrapper({ store })
    await flushPromises()
    expect(store.dispatch).toHaveBeenCalledWith('fetchListData', {
      type: 'top'
    })
  })

})

// import Item from '@/components/Item.vue'
// import ItemList from '@/components/ItemList.vue'
// import { shallowMount } from '@vue/test-utils'
// import { fetchListData } from '../../api/api'
// import flushPromises from 'flush-promises'

// jest.mock('../../api/api.js')

// beforeEach(() => {
//   fetchListData.mockReset()
// })

// describe('ItemList.vue', () => {
//   test('renders an Item with data for each item', async () => {
//     const $bar = {
//       start: () => { },
//       finish: () => {}
//     }
//     const items = [{ id: 1 }, { id: 2 }, { id: 3 }]
//     fetchListData.mockResolvedValueOnce(items)
//     const wrapper = shallowMount(ItemList, {
//       mocks: { $bar }
//     })
//     await flushPromises()
//     const Items = wrapper.findAllComponents(Item)

//     expect(Items).toHaveLength(items.length)

//     Items.wrappers.forEach((wrapper, i) => {
//       expect(wrapper.vm.item).toBe(items[i])
//     })
//     expect.assertions(4)
//   })

//   test('calls $bar start on load', async () => {
//     const $bar = {
//       start: jest.fn(),
//       finish: () => {}
//     }
//     await flushPromises()
//     fetchListData.mockResolvedValueOnce([])
//     shallowMount(ItemList, {
//       mocks: { $bar }
//     })
//     expect($bar.start).toHaveBeenCalledTimes(1)
//   })

//   test('calls $bar.finish when load is successful', async () => {
//     const $bar = {
//       start: () => { },
//       finish: jest.fn()
//     }
//     fetchListData.mockResolvedValueOnce([])
//     shallowMount(ItemList, {
//       mocks: {
//         $bar
//       }
//     })
//     await flushPromises()
//     expect($bar.finish).toHaveBeenCalled()
//   })

//   test('calls $bar.fail when load unsuccessful', async () => {
//     expect.assertions(1)
//     const $bar = {
//       start: () => { },
//       fail: jest.fn()
//     }
//     fetchListData.mockRejectedValueOnce()
//     shallowMount(ItemList, {
//       mocks: {
//         $bar
//       }
//     })
//     await flushPromises()
//     expect($bar.fail).toHaveBeenCalled()
//   })
// })

