import { mount } from '@vue/test-utils'
import { test, describe, expect } from 'vitest';
import TaskListVue from "../components/TaskList.vue";
import {todosFactory} from '../todosSetup';
import todosMock from '../mock/todos';

describe('HelloView.vue integration tests', ()=> {
  test('Title exists', () => {
    const wrapper = mount(TaskListVue);

    expect(wrapper.text()).toContain('Task List');
  });

  test('Todo is completable', async () => {
    const {update} = todosFactory();
    update(todosMock);

    const wrapper = mount(TaskListVue);

    expect(wrapper.text()).not.toContain('you have no tasks available');
    
    const uls = wrapper.findAll('ul');
    expect(uls[0].attributes().id).toContain('incompleted-tasks');
    expect(uls[0].text()).toContain('Aprender Vue3');

    expect(uls[1].attributes().id).toContain('completed-tasks');
    expect(uls[1].text()).toBe('');

    await wrapper.find('li').trigger('click');

    expect(uls[0].text()).not.toContain('Aprender Vue3');
    expect(uls[1].text()).toContain('Aprender Vue3');
  });
});