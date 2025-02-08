import { MyPluginB } from './MyPluginB'

test('MyPlugin should initialize correctly', () => {
  const plugin = new MyPluginB()
  expect(plugin).toBeDefined()
})
