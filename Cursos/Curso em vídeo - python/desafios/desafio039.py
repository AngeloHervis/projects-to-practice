ano = int(input('Ano de nascimento: '))
idade = 2022 - ano
alistar = ano + 18
if idade == 18:
    print('Você tem que se alistar IMEDIATAMENTE')
elif idade > 18:
    print ('''Você já deveria ter se alistado à {} anos.
    Seu alistamento foi em {}''' .format (idade - 18, alistar))
elif idade < 18:
    print ('''Ainda faltam {} anos para o seu alistamento.
    Seu alistamento será em {}''' .format(18 - idade, alistar))