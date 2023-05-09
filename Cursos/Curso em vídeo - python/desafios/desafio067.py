tabuada = 0
while True:
    número = int (input('Digite o número que você quer ver a tabuada!! (PARA ENCERRAR O PROGRAMA DIGITE UM NÚMERO NEGATIVO): '))
    if número <0:
        break
    for c in range(1,11):
        print(f'{número} X {c} = {número*c}')
print('TABUADA ENCERRADA, VOLTE SEMPRE!!')