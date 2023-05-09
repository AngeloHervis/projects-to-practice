cores = { 'limpa':'\033[m',
          'azul':'\033[34m',
          'amarelo' : '\033[33m',
          'pretoebranco' : '\033[7;30m'}

p1 = float(input('Primeiro valor:'))
p2 = float(input('Segundo valor:'))
p3 = float(input('Terceiro valor:'))
menor = p1
if p2 < p1 and p2 < p3:
    menor = p2
if p3 < p2 and p3 < p1:
    menor = p3
    #
    maior = p1
if p2 > p1 and p2 > p3:
    maior = p2
if p3 > p2 and p3 > p1:
    maior = p3
print ('O menor valor é {}{}{}' .format(cores['amarelo'],menor, cores['limpa']))
print ('O maior valor é {}{}{}' .format(cores['pretoebranco'],maior, cores['limpa']))