export default class CPF {
  constructor(public number: any) {
    if (!number || !number.length) throw new Error('A number must be given')
    let cpf = number
    cpf = this.removeCharactersFromCPF(number)
    const sameDigits = this.hasEveryDigitEqual(cpf)
    if (sameDigits) {
      throw new Error ('A number must not repeat it self')
    }
    this.number = cpf
  }

  removeCharactersFromCPF(cpf: any) {
    return cpf
      .replace('.','')
      .replace('.','')
      .replace('-','')
      .replace(" ","");
  }

  verifyDigits() {
    try{
      let d1, d2;  
      let dg1, dg2, rest;  
      let digito;  
      let nDigResult;  
      d1 = d2 = 0;  
      dg1 = dg2 = rest = 0;  
          
      for (let nCount = 1; nCount < this.number.length -1; nCount++) {  
      digito = parseInt(this.number.substring(nCount -1, nCount));  							
      d1 = d1 + ( 11 - nCount ) * digito;  
      d2 = d2 + ( 12 - nCount ) * digito;  
      };  
          
      rest = (d1 % 11);  
  
      dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;  
      d2 += 2 * dg1;  
      rest = (d2 % 11);  
      if (rest < 2) {
        dg2 = 0;
      } else {
        dg2 = 11 - rest;
      }
      let nDigVerific = this.number.substring(this.number.length-2, this.number.length);  
      nDigResult = "" + dg1 + "" + dg2;  
      return nDigVerific == nDigResult;
    }catch (e){
      console.error("Erro !"+e);
      return false;  
    }
  }

  hasEveryDigitEqual(cpf: any) {
    return cpf.split("").every((c: any) => c === cpf[0])
  }

  isValid() {
    const validCPF = this.verifyDigits()
    if (!validCPF) {
      throw new Error('Not a valid CPF')
    }
    return validCPF
  }
}