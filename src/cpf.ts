import CPF from "./cpf.entity"

// @ts-nocheck
export function validate (cpf: any) {
	if (!cpf) return false
	if (!cpf.length) return false
	
	const cpfEntity = new CPF(cpf)

	cpfEntity.removeCharactersFromCPF()

	if (cpfEntity.hasEveryDigitEqual()) return false

	const validCPF = cpfEntity.verifyDigits()
	return validCPF
}
