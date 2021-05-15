import Item from '@/components/Item.vue'
import ItemList from '@/components/ItemList.vue'
import { shallowMount } from '@vue/test-utils'
import { fetchListData } from '../../api/api'
import flushPromises from 'flush-promises'

jest.mock('../../api/api.js')

beforeEach(() => {
  fetchListData.mockReset()
})

describe('ItemList.vue', () => {
  test('renders an Item with data for each item', async () => {
    const $bar = {
      start: () => { },
      finish: () => {}
    }
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }]
    fetchListData.mockResolvedValueOnce(items)
    const wrapper = shallowMount(ItemList, {
      mocks: { $bar }
    })
    await flushPromises()
    const Items = wrapper.findAllComponents(Item)

    expect(Items).toHaveLength(items.length)

    Items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.vm.item).toBe(items[i])
    })
    expect.assertions(4)
  })

  test('calls $bar start on load', async () => {
    const $bar = {
      start: jest.fn(),
      finish: () => {}
    }
    await flushPromises()
    fetchListData.mockResolvedValueOnce([])
    shallowMount(ItemList, {
      mocks: { $bar }
    })
    expect($bar.start).toHaveBeenCalledTimes(1)
  })

  test('calls $bar.finish when load is successful', async () => {
    const $bar = {
      start: () => { },
      finish: jest.fn()
    }
    fetchListData.mockResolvedValueOnce([])
    shallowMount(ItemList, {
      mocks: {
        $bar
      }
    })
    await flushPromises()
    expect($bar.finish).toHaveBeenCalled()
  })

  test('calls $bar.fail when load unsuccessful', async () => {
    expect.assertions(1)
    const $bar = {
      start: () => { },
      fail: jest.fn()
    }
    fetchListData.mockRejectedValueOnce()
    shallowMount(ItemList, {
      mocks: {
        $bar
      }
    })
    await flushPromises()
    expect($bar.fail).toHaveBeenCalled()
  })
})