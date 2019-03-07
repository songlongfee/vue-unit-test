import { expect } from 'chai'
import Counter from '@/components/Counter'
import { mount } from '@vue/test-utils'

describe('Counter.vue', () => {

  //生命周期
  before(() => {
    // 在本区块的所有测试用例之前执行
  });

  after(() => {
    // 在本区块的所有测试用例之后执行
  });

  beforeEach(() => {
    // 在本区块的每个测试用例之前执行
  });

  afterEach(() => {
    // 在本区块的每个测试用例之后执行
  });

  it('点击按钮后, count的值应该为1', () => {
    const wrapper = mount(Counter);
    wrapper.find('button').trigger('click');
    expect(Number(wrapper.find('.num').text())).to.equal(1);
  })

  it('h3的文字为：Counter.vue', () => {
    const wrapper = mount(Counter);
    expect(wrapper.find('h3').text()).to.equal('Counter.vue');
  })

  it('count异步更新, count的值应该为1', (done) => {
    const wrapper = mount(Counter);
    wrapper.findAll('button').at(1).trigger('click');
    setTimeout(() => {
      // 断言:count的值应该是数字1
      expect(Number(wrapper.find('.num').text())).to.equal(1);
      done();
    }, 1000);
  })

})