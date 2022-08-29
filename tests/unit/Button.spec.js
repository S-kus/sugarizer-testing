import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('renders props.msg when passed', () => {
    const text = 'Button 1'
    const wrapper = mount(Button, {
    })
    expect(wrapper.html()).toMatch(text)
  })
})