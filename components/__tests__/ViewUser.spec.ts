import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { User } from '~/api/user'
import ViewUser from '../ViewUser.vue'

const TEST_VALUES = {
  name: 'name',
  type: 'type',
  email: 'email',
}

describe('[Component Test]: ViewUser.vue', () => {
  test('mounted test', () => {
    const user: User = {
      name: 'からころ',
      email: 'abcdef@gmail.com',
      id: 'abcdef',
      provider: 'twitter',
      type: 'admin',
    }
    const mountedViewUser = mount(ViewUser, {
      props: {
        user,
      },
    })
    expect(mountedViewUser.find(`[data-test="${TEST_VALUES.name}"`)?.element?.textContent).toContain(user.name)
    expect(mountedViewUser.find(`[data-test="${TEST_VALUES.type}"`)?.element?.textContent).toContain(`${user.type}`)
    expect(mountedViewUser.find(`[data-test="${TEST_VALUES.email}"`)?.element?.textContent).toContain(`${user.email}`)
  })
})
