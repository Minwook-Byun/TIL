f  = open('club.txt', 'w')
while True:
    name = input('name:')
    if not name: break
    f.write(name + '\n')
f.close()