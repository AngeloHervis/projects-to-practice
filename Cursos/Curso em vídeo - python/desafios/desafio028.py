import random
n1 = random.randrange(0,5)
print ('Estou pensando em um número entre 0 e 5, tente adivinhar qual é...')
n2 = int(input('em que número eu pensei? '))
print('Processando...')
if n1 == n2:
    print('PARABÉNS!, Você conseguiu me vencer!')
else:
    print('GANHEI! Eu pensei no número {} e não no {}' .format(n1,n2))