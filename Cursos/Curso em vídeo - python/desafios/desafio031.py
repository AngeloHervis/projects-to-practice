km = float(input('Coloque a distância da sua viagem em KM: '))
print ('Você está prester a começar uma viagem de {} KM' .format(km))
if km > 200:
    print ('O preço da sua passagem será de R$ {}' .format(km * 0.45))
else:
    print ('O preço da sua passagem será de R$ {}' .format(km * 0.50))