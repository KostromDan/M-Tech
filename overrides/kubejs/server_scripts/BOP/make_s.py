s = """[1 air, 1 air, 1 air, 1 air, 1 air, 1 air, 1 air, 1 air, 1 air, 1 fir_sapling, 1 redwood_sapling, 1 mahogany_sapling, 1 palm_sapling, 1 willow_sapling, 1 dead_sapling, 1 umbran_sapling, 1 flowering_oak_sapling, 1 hellbark_sapling, 1 spruce_sapling, 1 spruce_sapling, 1 jungle_sapling, 1 jungle_sapling, 1 dark_oak_sapling, 1 oak_sapling, 1 birch_sapling, 1 oak_sapling, 1 dark_oak_sapling, 1 gray_dye, 1 red_dye, 1 pink_dye, 1 orange_dye, 1 green_dye, 1 black_dye, 1 black_dye, 1 azure_bluet, 1 black_dye]"""
s = s.replace('1 air, ', '').replace('1 ', '').replace('[', '').replace(']',
                                                                        '').split(
    ', ')
print(s)
for i in range(9):
    output = 'biomesoplenty:' + s[i]
    sapling = 'minecraft:' + s[i + 9]
    addition = 'minecraft:' + s[i + 18]
    print(f"""    make_sapling(
        '{output}',
        '{sapling}',
        '{addition}'
    )""")
