from pprint import pprint

import toml

minY = - 63
depth = 320


def get_y(y, type):
    if type == 'ABSOLUTE':
        return y
    elif type == 'ABOVE_BOTTOM':
        return minY + y
    elif type == 'BELOW_TOP':
        return depth - 1 + minY - y


with open('world.toml', 'r') as in_f:
    world = toml.loads(in_f.read())
ores = world['world_generation']
ores.pop('userWorldGenVersion')
ores.pop('enableRegeneration')
ores.pop('salt')
out_ores = {}
for ore, gen_type in ores.items():
    gen_type.pop('shouldGenerate')
    for params in gen_type.values():
        params.pop('discardChanceOnAirExposure')
        params.pop('shouldGenerate')
        params.pop('plateau')
        min_y = get_y(params['minInclusive']['value'],
                      params['minInclusive']['type'])
        max_y = get_y(params['maxInclusive']['value'],
                      params['maxInclusive']['type'])
        params.pop('minInclusive')
        params.pop('maxInclusive')
        params['min']= min_y
        params['max']= max_y
        dec =  max_y - min_y
        params['range'] = dec//2
        params['midY'] = min_y + dec//2

pprint(ores)
