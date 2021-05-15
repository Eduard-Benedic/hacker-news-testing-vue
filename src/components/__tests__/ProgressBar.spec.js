import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

beforeEach(() => {
  jest.useFakeTimers()
})

describe('ProgressBar.vue', () => {
  test('is hidden on initial render', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden')
  })

  test('initializes with 0% width and height', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.element.style.width).toBe('0%')
  })

  test('displays the bar when start is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden')
    await wrapper.vm.start()
    expect(wrapper.classes()).not.toContain('hidden')
  })

  test('sets the bar to 100% width when .finish() is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    await wrapper.vm.start()
    await wrapper.vm.finish()
    expect(wrapper.element.style.width).toBe('100%')
  })

  test('hides the bar when finish is called',async () => {
    const wrapper = shallowMount(ProgressBar)
    await wrapper.vm.start()
    await wrapper.vm.finish()
    expect(wrapper.classes()).toContain('hidden')
  })

  test('resets to 0% when start is called',async () => {
    const wrapper = shallowMount(ProgressBar)
    await wrapper.vm.finish()
    await wrapper.vm.start()
    expect(wrapper.element.style.width).toBe('0%')
  })

  test('increases width by 1% every 100 ms after start call', async () => {
    const wrapper = shallowMount(ProgressBar)

    wrapper.vm.start()

    jest.advanceTimersByTime(100)
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.element.style.width).toBe('1%')
    })
   
    jest.advanceTimersByTime(900)
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.element.style.width).toBe('10%')
    })

    jest.advanceTimersByTime(8000)
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.element.style.width).toBe('90%')
    })
  })

  test('clears timer when finish is caleld', () => {
    jest.spyOn(window, 'clearInterval')
    setInterval.mockReturnValue('id')
  
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()

    expect(window.clearInterval).toHaveBeenCalledWith('id')

  })


})