import { validate } from "../src/cpf"

test('should return true with a valid CPF with commas', () => {
  const cpf = '389.212.758-19'
  const result = validate(cpf)
  expect(result).toBe(true)
})

test('should return true with a valid CPF without commas', () => {
  const cpf = '38921275819'
  const result = validate(cpf)
  expect(result).toBe(true)
})

test('should return false with a valid CPF', () => {
  const cpf = '1000'
  const result = validate(cpf)
  expect(result).toBe(false)
})

test('should not work with null input', () => {
  const cpf = null
  const result = validate(cpf)
  expect(result).toBe(false)
})

test('should not work with undefined input', () => {
  const cpf = undefined
  const result = validate(cpf)
  expect(result).toBe(false)
})

test('should not work with equal digits', () => {
  const cpf = '11'
  const result = validate(cpf)
  expect(result).toBe(false)
})

test('should enter dig < 2', () => {
  const cpf = '389212758'
  const result = validate(cpf)
  expect(result).toBe(false)
})

test('should not with obj input', () => {
  const cpf = {}
  const result = validate(cpf)
  expect(result).toBe(false)
})

test('should not with mixed input', () => {
  const cpf = '3892127581993'
  const result = validate(cpf)
  expect(result).toBe(false)
})