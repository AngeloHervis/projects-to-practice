casa = float(input('Valor da casa: '))
salário = float(input('Salário do comprador: '))
ano = int(input('Quantos anos de financiamento? '))
prestação = casa / (ano*12)
if salário * 30 / 100 > prestação:
    print ('Para pagar uma casa de R${} em {} anos, a prestação será de R${}' .format (casa,ano,prestação))
    print ('Empréstimo pode ser CONCEDIDO')
else:
    print ('Para pagar uma casa de R${} em {} anos, a prestação será de R${}' .format (casa,ano,prestação))
    print ('Empréstimo NEGADO')

