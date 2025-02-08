import { MyPluginA } from './MyPluginA'

test('MyPlugin should initialize correctly', () => {
  const plugin = new MyPluginA()
  expect(plugin).toBeDefined()
})
