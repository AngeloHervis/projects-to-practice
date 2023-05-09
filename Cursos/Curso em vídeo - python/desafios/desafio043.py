peso = float(input('Qual é o seu peso? (kg) '))
altura = float(input('Qual é sua altura? '))
imc = peso / (pow(altura,2))
print ('o IMC dessa pessoa é {:.1f}' .format(imc))
if imc <= 18.5:
    print ('Você está ABAISO DO PESO!')
elif imc <= 25:
    print ('Você está no PESO IDEAL!')
elif imc <= 30:
    print ('Você está com SOBREPESO!')
elif imc <= 40:
    print ('Você está com OBESIDADE!')
else:
    print ('Você está com OBESIDADE MÓRBIDA! Cuidado.')