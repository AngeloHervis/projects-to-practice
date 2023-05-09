from random import randint
venceu = 0
while True:
    computador = randint(0,1)
    jogador1 = str(input('Você quer par ou impar? ').strip() .upper())
    jogador2 = int(input('Escolha um número: '))
    resultado = jogador2 + computador
    print(f'O computador escolheu o número {computador}')
    if jogador1 == "PAR":
        if resultado % 2 == 0:
            print('\033[1;32m Parabéns, você venceu!! \033[0;0m')
            venceu += 1
        else:
            print('\033[1;31m Você perdeu!! \033[0;0m')
            break
    if jogador1 == "IMPAR":
        if resultado % 2 == 0:
            print('\033[1;31m Você perdeu!! \033[0;0m')
            break
        else:
            print('\033[1;32m Parabéns, você venceu!! \033[0;0m')
            venceu += 1
print(f'\033[1;32m Você venceu {venceu} vezes!! \033[0;0m')