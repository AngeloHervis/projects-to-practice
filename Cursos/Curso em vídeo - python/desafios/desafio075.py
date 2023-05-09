from tkinter import N


números = (int(input('Digite um número: ')),
int(input('Digite outro número: ')),
int(input('Digite mais um número: ')),
int(input('Digite o último número: ')))
print(f'você digitou os valores {números}')
print(f'O valor 9 foi digitado {números.count(9)} vezes')
if 3 in números:
    print(f'O valor 3 apareceu na {números.index(3)+1}° posição')
else:
    print('O valor 3 não foi encontrado!!')
print('Os valores pares encontrados foram', end=' ')
for n in números:
    if n % 2 == 0:
        print (n, end=' ')
