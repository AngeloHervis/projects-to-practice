from time import sleep
n1 = int(input('Primeiro valor: '))
n2 = int(input('Segundo valor: ')) 
opção = 0
while opção!= 5:
    print('''
    [ 1 ] SOMAR
    [ 2 ] MULTIPLICAR
    [ 3 ] MAIOR
    [ 4 ] NOVOS NÚMEROS
    [ 5 ] SAIR DO PROGRAMA
=-=-=-=-=-=-=-=-=-=-=-=-=-=
    ''')
    opção = int(input('Qual é sua opção? '))
    if opção == 1:
        print('A soma de {} + {} é {}' .format(n1,n2,n1+n2))
    elif opção == 2:
        print('A multiplicação de {} X {} é {}' .format(n1,n2,n1*n2))
    elif opção == 3:
        if n1 > n2:
            print('O maior número é {}' .format(n1))
        else:
            print('O maior número é {}' .format(n2))
    elif opção == 4:
        n1 = int(input('Primeiro valor: '))
        n2 = int(input('Segundo valor: ')) 
    elif opção == 5:
        print('FINALIZANDO...')
    else:
        print('OPÇÃO INVÁLIDA, TENTE NOVAMENTE!!!')
    sleep(1.5)
print('PROGRAMA ENCERRADO!!')