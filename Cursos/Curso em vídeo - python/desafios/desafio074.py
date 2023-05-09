from random import randint

números = (randint(1,10),randint(1,10),randint(1,10),randint(1,10),randint(1,10))
print(f'os números sorteados foram {números}')
print(f'o maior valor sorteado foi {max(números)}')
print(f'o menor valor sorteado foi {min(números)}')