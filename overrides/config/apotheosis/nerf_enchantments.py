out = []
stage = 0
with open('enchantments.cfg','r') as in_f:
    for line in in_f.readlines():
        originally = line.split("    # The max level of this enchantment - originally ")
        if stage == 0 and len(originally)>=2:
            stage = 1
            level = int(originally[1].split('.')[0])
            print(level)
        elif stage == 1 and "Max Level" in line:
            stage = 0
            line = f'    I:"Max Level"={level}\n'
        out.append(line)
with open('enchantments.cfg','w') as out_f:
    out_f.write(''.join(out))
