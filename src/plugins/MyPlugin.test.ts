import { MyPlugin } from './MyPlugin'

test('MyPlugin should initialize correctly', () => {
  const plugin = new MyPlugin()
  expect(plugin).toBeDefined()
})
