from datetime import date
atual = date.today().year
maiorid = 0
menorid = 0
for c in range (1,8):
    nasc = int(input('Em que ano a {} pessoa nasceu?' .format(c)))
    idade = atual - nasc
    if idade >= 18:
        maiorid = maiorid+ 1
    else:
        menorid = menorid+ 1
print('''Ao todo tivemos {} pessoas maiores de idade
e também tivemos {} pessoas menores de idade''' .format(maiorid,menorid))
