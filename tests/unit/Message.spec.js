import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Sugarizer vueJs UI'
    const wrapper = shallowMount(Message, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})