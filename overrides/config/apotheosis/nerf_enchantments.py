from pprint import pprint

out = []
ench_dict = {}
stage = 0
with open('enchantments.cfg', 'r') as in_f:
    for line in in_f.readlines():
        if '{' in line:
            ench_name = line.split('"')[1]
            ench_dict[ench_name] = {}
        if 'Tradeable=' in line:
            if 'false' in line:
                ench_dict.pop(ench_name)
        originally = line.split(
            "    # The max level of this enchantment - originally ")
        if stage == 0 and len(originally) >= 2:
            stage = 1
            level = int(originally[1].split('.')[0])
            ench_dict[ench_name] = level
        elif stage == 1 and "Max Level" in line:
            stage = 0
            line = f'    I:"Max Level"={level}\n'
        out.append(line)

with open('enchantments.cfg', 'w') as out_f:
    out_f.write(''.join(out))


def gen_recipe(ench, lvl, em_count, maxUses=100000):
    recipe = r"""{buyB:{id:"minecraft:book",Count:1b},buy:{id:"minecraft:emerald",Count:COUNTb},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{lvl:LVLs,id:"ENCH"}]}}}"""
    recipe = recipe.replace("MAX_USES", str(maxUses))
    recipe = recipe.replace("LVL", str(lvl))
    recipe = recipe.replace("COUNT", str(em_count))
    recipe = recipe.replace("ENCH", ench)
    return recipe


cmd = r"""summon minecraft:villager ~ ~ ~ {Brain:{memories:{}},HurtByTimestamp:0,ForgeData:{},Attributes:[{Base:0.0d,Name:"forge:step_height_addition"},{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.5d,Name:"minecraft:generic.movement_speed"},{Base:48.0d,Modifiers:[{Amount:-0.014894148336887635d,Operation:1,UUID:[I;559209834,1471301591,-1758031218,-1340322021],Name:"Randomspawnbonus"}],Name:"minecraft:generic.follow_range"}],FoodLevel:0b,Invulnerable:0b,FallFlying:0b,ForcedAge:0,Gossips:[{Target:[I;-1573020407,237324131,-1441531928,-395225070],Type:"trading",Value:2}],PortalCooldown:0,AbsorptionAmount:0.0f,LastRestock:0L,FallDistance:0.0f,CanUpdate:1b,DeathTime:0s,Xp:1,LastGossipDecay:20202L,ForgeCaps:{"mekanism:radiation":{radiation:1.0E-7d}},HandDropChances:[0.085f,0.085f],PersistenceRequired:0b,Age:0,Motion:[0.0d,-0.0784000015258789d,0.0d],Health:20.0f,LeftHanded:0b,Air:300s,OnGround:1b,CitadelData:{},Offers:{Recipes:[RECIPE_LIST],"morejs$disabled":[0b,0b]},Rotation:[91.66468f,-12.89912f],HandItems:[{},{}],RestocksToday:0,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],Fire:-1s,ArmorItems:[{},{},{},{}],CanPickUpLoot:1b,VillagerData:{profession:"minecraft:librarian",level:1,type:"minecraft:plains"},HurtTime:0s,Inventory:[]}"""
mod_list = sorted(list(set(x.split(':')[0] for x in ench_dict.keys())))
print(mod_list)
pprint(ench_dict)
for mod in mod_list:
    recipe_list = []
    for ench, lvl in sorted(list(ench_dict.items()),
                            key=lambda x: x[0].split(':')[1]):
        if mod not in ench:
            continue
        for cur_lvl in range(1, lvl + 1):
            mnoz = cur_lvl / lvl
            recipe_list.append(gen_recipe(ench, cur_lvl, int(64 * mnoz)))
    command = cmd.replace("RECIPE_LIST", " ,".join(recipe_list))
    print(mod, ' ', len(command), '\n', command, sep='')
