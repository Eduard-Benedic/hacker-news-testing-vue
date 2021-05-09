import Item from '@/components/Item.vue'
import { shallowMount } from '@vue/test-utils'

describe('\nItem.vue', () => {
  test('renders item.url', () => {
    const item = {
      url: "www.google.com"
    }

    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    expect(wrapper.text()).toContain(item.url)
  })

  test('renders item.author', () => {
    const item = {
      author: 'Eduard Benedic'
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    expect(wrapper.text()).toContain(item.author)
  })

  test('renders item.score', () => {
    const item = {
      score: 10
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    expect(wrapper.text()).toContain(item.score)
  })

  test('renders a link to the item.url with the item.title as text', () => {
    const item = {
      title: 'Title of comp',
      url: 'www.google.com'
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    const a = wrapper.find('a')
    expect(a.text()).toBe(item.title)
    expect(a.attributes().href).toBe(item.url)
  })
  
})