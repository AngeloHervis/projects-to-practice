dias = float(input("Quantos dias alugados?"))
km = float(input('Quantos km rodados?'))
totalkm = km*0.15
totaldias = dias*60
total = totaldias+totalkm
print('O total a pagar é R$ {}' .format(total))