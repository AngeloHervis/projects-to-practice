import random
n1 = random.randint(0,10)
print('''Sou seu computador...
Acabei de pensar em um número entre 0 e 10.
Será que você consegue adivinhar qual número foi?''')
acertou = False
palpites = 0
while not acertou:
    palpite = int(input('Qual é seu palpite?? '))
    palpites += 1
    if palpite == n1:
        acertou = True
    else:
        if palpite < n1:
            print('Mais... tente mais uma vez!')
        elif palpite > n1:
            print('Menos... tente mais uma vez!')
print('Acertou com {} palpites' .format(palpites))