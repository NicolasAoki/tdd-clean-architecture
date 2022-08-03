import CPF from "../src/cpf.entity"

test('should return true with a valid CPF with commas', () => {
  const cpf = new CPF('389.212.758-19')
  const isValidCpf = cpf.isValid()
  expect(isValidCpf).toBe(true)
})

test('should return true with a valid CPF without commas', () => {
  const cpf = new CPF('38921275819')
  const isValidCpf = cpf.isValid()
  expect(isValidCpf).toBe(true)
})

test('should throw error invalid CPF', () => {
  const cpf = new CPF('1000')
  expect(() => cpf.isValid()).toThrow("Not a valid CPF")
})

test('should not work with null input', () => {
  expect(() => new CPF(null)).toThrow("A number must be given")
})

test('should not work with undefined input', () => {
  expect(() => new CPF(undefined)).toThrow("A number must be given")
})

test('should not work with equal digits', () => {
  expect(() => new CPF('11')).toThrow("A number must not repeat it self")
})

test('should return not a valid cpf', () => {
  const cpf = new CPF('389212758')
  expect(() => cpf.isValid()).toThrow("Not a valid CPF")
})

test('should not with obj input', () => {
  expect(() => new CPF({})).toThrow("A number must be given")
})

test('should not with mixed input', () => {
  const cpf = new CPF('3892127581993')
  expect(() => cpf.isValid()).toThrow("Not a valid CPF")
})