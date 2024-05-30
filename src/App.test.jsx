

  import { describe, it, expect } from 'vitest'

describe('simple tests', () => {
  it('should add numbers correctly', () => {
    const add = (a, b) => a + b
    expect(add(1, 2)).toBe(3)
  })

  it('should subtract numbers correctly', () => {
    const subtract = (a, b) => a - b
    expect(subtract(5, 3)).toBe(2)
  })
})