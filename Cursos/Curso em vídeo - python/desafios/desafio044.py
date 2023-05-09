print ('{:=^40}' .format(' LOJAS HERVIS '))
preço = float(input('Preço das compras: R$'))
print('''FORMAS DE PAGAMENTO
[ 1 ] à vista dinheiro/cheque
[ 2 ] à vista cartão
[ 3 ] 2x no cartão
[ 4 ] 3x ou mais no cartão
''')
opção = int(input('Qual é a opção?'))
if opção == 1:
    total = preço - (preço*10/100)
    print('Sua compra de R${} vai custar R${} no final.' .format(preço,total))
elif opção == 2:
    total = preço - (preço*5/100)
    print ('Sua compra de R${} vai custar R${} no final.' .format(preço,total)) 
elif opção == 3:
    print ('Sua compra vai custar R${}' .format(preço))
elif opção == 4:
    total = preço + (preço*20/100)
    parcela = int(input('Quantas parcelas?'))
    print ('''Sua compra será parcelada em {}x de R${} COM JUROS
Sua compra de R${} vai custar R${} no final. ''' .format(parcela,total/parcela,preço,total))
else:
    print('Opção inválida, tente novamente!!')