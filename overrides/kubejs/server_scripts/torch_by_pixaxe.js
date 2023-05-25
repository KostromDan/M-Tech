const $FTBChunksAPI = Java.loadClass('dev.ftb.mods.ftbchunks.data.FTBChunksAPI')
const $ChunkDimPos = Java.loadClass('dev.ftb.mods.ftblibrary.math.ChunkDimPos')
const $ChunkPos = Java.loadClass('net.minecraft.world.level.ChunkPos')
const $BlockPos = Java.loadClass('net.minecraft.core.BlockPos')

let vines = ['minecraft:sculk_vein', 'minecraft:vine', 'minecraft:glow_lichen', 'projectvibrantjourneys:light_brown_bark_mushroom', 'projectvibrantjourneys:bark_mushroom', 'projectvibrantjourneys:orange_bark_mushroom', 'projectvibrantjourneys:glowing_blue_fungus']
let con_be_replaced_id = ['minecraft:red_mushroom','minecraft:brown_mushroom','projectvibrantjourneys:dead_fallen_leaves','biomesoplenty:dead_grass','biomesoplenty:bush','minecraft:sweet_berry_bush','minecraft:tall_grass', 'minecraft:moss_carpet', 'biomesoplenty:huge_clover_petal', 'biomesoplenty:clover', "minecraft:grass", "minecraft:fern", "minecraft:air", "minecraft:dead_bush", "minecraft:snow", "minecraft:large_fern", 'biomesoplenty:dune_grass', 'biomesoplenty:desert_grass', "projectvibrantjourneys:twigs", "projectvibrantjourneys:fallen_leaves", "projectvibrantjourneys:rocks", "projectvibrantjourneys:mossy_rocks", "projectvibrantjourneys:sandstone_rocks", "projectvibrantjourneys:red_sandstone_rocks", "projectvibrantjourneys:ice_chunks", "projectvibrantjourneys:bones", "projectvibrantjourneys:charred_bones", "projectvibrantjourneys:pinecones", "projectvibrantjourneys:seashells"]
con_be_replaced_id += vines
let can_be_replaced_tags = ['minecraft:flowers']
let delay_torch_list = []


function del_one_elem(username) {
    let count = delay_torch_list.filter((el) => el === username);
    delay_torch_list = delay_torch_list.filter((el) => el !== username);
    for (let i = 0; i < count - 1; i++) {
        delay_torch_list.push(username)
    }
}

function check_item_can_be_replaced(item) {
    if (con_be_replaced_id.includes(String(item.id))) {
        return true
    }
    let fl = false
    can_be_replaced_tags.forEach(tagKey => {
        if (String(item.getTags()).includes(tagKey)) {
            fl = true
        }
    })
    if (fl) {
        return true
    }
    return false
}

ItemEvents.rightClicked(event => {
    if (event.hand == 'main_hand' && (event.player.mainHandItem.hasTag('forge:tools/paxels') || event.player.mainHandItem.hasTag('forge:tools/pickaxes')) &&
        (event.player.inventory.count('minecraft:torch') >= 2 || (event.player.offHandItem != "minecraft:torch" && event.player.inventory.count('minecraft:torch') >= 1))) {
        if (delay_torch_list.includes(event.player.username)) {
            return;
        }
        delay_torch_list.push(event.player.username)
        event.server.scheduleInTicks(5, callback => {
            del_one_elem(event.player.username)
        })
        let ray = event.player.rayTrace(24)
        let block = ray.block
        let facing = String(ray.facing)
        if (block == null) {
            return;
        }
        let x = ray.block.x
        let y = ray.block.y
        let z = ray.block.z

        let claimedChunksManager = $FTBChunksAPI.manager
        let block_pos = new $BlockPos(x, y, z)
        let chunk = new $ChunkPos(block_pos)
        let player_ftb_chunk = new $ChunkDimPos(event.player)
        let block_ftb_chunk = player_ftb_chunk.offset(chunk.x - player_ftb_chunk.x, chunk.z - player_ftb_chunk.z)
        let claimedChunk = claimedChunksManager.getChunk(block_ftb_chunk)
        if (claimedChunk != null &&
            (!claimedChunk.teamData.isTeamMember(event.player.uuid)) &&
            (!claimedChunk.teamData.isAlly(event.player.uuid))) {
            return;
        }
        let additional_check = false
        if (vines.includes(String(block.id))) {
            additional_check = true
        } else if (check_item_can_be_replaced(block)) {
            additional_check = true
            facing = "up"
            if (event.level.getBlock(x, y - 1, z).id == 'minecraft:tall_grass' ||event.level.getBlock(x, y - 1, z).id == 'minecraft:large_fern' || String(event.level.getBlock(x, y - 1, z).getTags()).includes('minecraft:tall_flowers')) {
                y -= 1
            }
        } else if (!block.blockState.isFaceSturdy(event.player.level, block.pos, facing)) {
            return;
        } else {
            switch (facing) {
                case 'east':
                    x += 1
                    break;
                case 'south':
                    z += 1
                    break;
                case 'north':
                    z -= 1
                    break;
                case 'west':
                    x -= 1
                    break;
                case 'up':
                    y += 1
                    break;
                default:

                    return;
            }
        }
        if (additional_check) {
            let tmp_x = x
            let tmp_y = y
            let tmp_z = z
            switch (facing) {
                case 'east':
                    tmp_x -= 1
                    break;
                case 'south':
                    tmp_z -= 1
                    break;
                case 'north':
                    tmp_z += 1
                    break;
                case 'west':
                    tmp_x += 1
                    break;
                case 'up':
                    tmp_y -= 1
                    break;
                default:
                    return;
            }
            event.server.runCommandSilent(`/execute at ${event.player.username} run setblock ${x} ${y} ${z} air destroy`)
            if (event.level.getBlock(tmp_x, tmp_y, tmp_z).id == 'minecraft:air') {
                return;
            }
        }
        if (check_item_can_be_replaced(event.level.getBlock(x, y, z))) {
            event.server.runCommandSilent(`/execute at ${event.player.username} run setblock ${x} ${y} ${z} air destroy`)
        } else {
            return;
        }
        let facing_string = `minecraft:wall_torch[facing=${facing}]`
        if (facing == 'up') {
            facing_string = `minecraft:torch`
        }
        event.player.inventory.extractItem(event.player.inventory.find('minecraft:torch'), 1, false)
        event.server.scheduleInTicks(3, callback => {
            if (!(event.level.getBlock(x, y, z).id == 'minecraft:air')) {
                event.player.give(`minecraft:torch`)
            } else {
                event.server.runCommandSilent(`/execute at ${event.player.username} run setblock ${x} ${y} ${z} ${facing_string}`)
            }
        })

    }
})

BlockEvents.rightClicked(event => {
    if (event.hand == 'main_hand' && (event.player.mainHandItem.hasTag('forge:tools/paxels') || event.player.mainHandItem.hasTag('forge:tools/pickaxes')) &&
        (event.player.inventory.count('minecraft:torch') >= 2 || (event.player.offHandItem != "minecraft:torch" && event.player.inventory.count('minecraft:torch') >= 1))) {
        if (!event.player.stages.has('notified_about_torch') && event.player.offHandItem == "minecraft:torch") {
            event.player.stages.add('notified_about_torch')
            event.player.tell("In this modpack you don't need to hold torch in off hand with pickaxe in main hand to place torch! You can place torches directly from inventory!")
        }
    }
})