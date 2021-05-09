import Item from '@/components/Item.vue'
import ItemList from '@/components/ItemList.vue'
import { shallowMount } from '@vue/test-utils'

describe('ItemList.vue', () => {
  test('renders an Item.vue with data for each item in window.items', () => {
    window.items = [{}, {}, {}]
    const wrapper = shallowMount(ItemList)
    const items = wrapper.findAllComponents(Item)
    expect(items).toHaveLength(window.items.length)
    
    items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().item).toBe(window.items[i])
    })

  })
})