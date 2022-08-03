import CPF from "../src/cpf.entity"

test('should return true with a valid CPF with commas', () => {
  const cpf = new CPF('409.595.180-02')
  expect(cpf.number).toBe('40959518002')
})

test('should return true with a valid CPF without commas', () => {
  const cpf = new CPF('40959518002')
  expect(cpf.number).toBe('40959518002')
})

test('should throw error invalid CPF', () => {
  expect(() => new CPF('1000')).toThrow("Not a valid CPF")
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
  expect(() => new CPF('389212758')).toThrow("Not a valid CPF")
})

test('should not with obj input', () => {
  expect(() => new CPF({})).toThrow("A number must be given")
})

test('should not with mixed input', () => {
  expect(() => new CPF('34095951800293')).toThrow("Not a valid CPF")
})