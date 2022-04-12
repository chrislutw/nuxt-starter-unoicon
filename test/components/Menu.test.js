import { mount } from '@vue/test-utils';
import Tutorial from '~/components/Tutorial.vue';
describe('Tutorial', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Tutorial);
    expect(wrapper.vm).toBeTruthy();
  });
  it('is a Vue instance', () => {
    const wrapper = mount(Tutorial);
    const barByName = wrapper.findComponent({ name: 'Menu' });
    expect(barByName.exists()).toBe(true);
  });
});
