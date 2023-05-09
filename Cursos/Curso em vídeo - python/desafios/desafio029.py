velo = int(input('Qual a velocidade atual do carro?'))
multa = (velo-80) * 7
if velo > 80:
    print('MULTADO, Você passou a {} KM/h, excedendo o limite de 80KM/h' .format(velo))
    print('Você deve pagar uma multa de R$ {}' .format(multa))
print ('Tenha um Bom Dia e dirija com segurança!')