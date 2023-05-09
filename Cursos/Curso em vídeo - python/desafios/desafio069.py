adultos = homens = mulheres = 0
while True:
    sexo = ' '
    seguir = ' '
    idade = int(input('Digite A IDADE da pessoa que você quer cadastrar!! '))
    while sexo not in 'MF':
        sexo = str(input('Digite O SEXO da pessoa que você quer cadastrar!![M/F] ')) .strip() .upper()[0]
    while seguir not in 'SN':
        seguir = str(input('Deseja cadastrar outra pessoa? [S/N] ')) .strip() .upper()[0]
    if idade >= 18:
        adultos+=1
    if sexo in 'Mm':
        homens+=1
    if sexo in 'Ff' and idade < 20:
        mulheres+=1
    if seguir in 'Nn':
        break
print(f'''
O total de pessoas maiores de 18 anos cadastradas foi {adultos}.
O total de homens cadastrados foi {homens}.
O total de mulheres menores de 20 anos cadastradas foi {mulheres}.
''')