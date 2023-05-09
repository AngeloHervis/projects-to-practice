from datetime import date
ano = int(input('Ano de Nascimento:'))
data = date.today().year
idade = data - ano
print('O Atleta tem {} anos' .format(idade))
if idade <= 9:
    print('Classificação: MIRIM')
elif idade <=14:
    print('Classificação: INFANTIL')
elif idade <= 19:
    print ('Classificação: JUNIOR')
elif idade <= 25:
    print('Classificação: SÊNIOR')
else:
    print('Classificação: MASTER')
