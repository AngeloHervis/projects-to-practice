n = cont = 0
while True:
    numeros = int(input('Digite um número: [999 para parar] '))
    if numeros == 999:
            break
    cont += 1
    n = n + numeros
print(f'Foram digitados {cont} números e a soma entre eles foi {n}')