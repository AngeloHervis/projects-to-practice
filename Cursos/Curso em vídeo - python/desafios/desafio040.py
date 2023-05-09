nota1 = float(input('Primeira nota: '))
nota2 = float(input('Segunda nota: '))
média = (nota1 + nota2) / 2
print ('Tirando {} e {} a média do aluno é {}' .format(nota1,nota2,média))
if média >=7:
    print('O aluno está APROVADO!')
elif média <= 4.9:
    print('O aluno está REPROVADO!')
else:
    print('O aluno está de RECUPERAÇÃO!')