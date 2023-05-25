const $FTBChunksAPI = Java.loadClass('dev.ftb.mods.ftbchunks.data.FTBChunksAPI')
const $ChunkDimPos = Java.loadClass('dev.ftb.mods.ftblibrary.math.ChunkDimPos')
const $ChunkPos = Java.loadClass('net.minecraft.world.level.ChunkPos')
const $BlockPos = Java.loadClass('net.minecraft.core.BlockPos')

let vines = ['minecraft:vine', 'minecraft:glow_lichen', 'projectvibrantjourneys:light_brown_bark_mushroom', 'projectvibrantjourneys:bark_mushroom', 'projectvibrantjourneys:orange_bark_mushroom', 'projectvibrantjourneys:glowing_blue_fungus']
let con_be_replaced_id = ['biomesoplenty:huge_clover_petal', 'biomesoplenty:clover', "minecraft:grass", "minecraft:fern", "minecraft:air", "minecraft:dead_bush", "minecraft:snow", "minecraft:large_fern", 'biomesoplenty:dune_grass', 'biomesoplenty:desert_grass', "projectvibrantjourneys:twigs", "projectvibrantjourneys:fallen_leaves", "projectvibrantjourneys:rocks", "projectvibrantjourneys:mossy_rocks", "projectvibrantjourneys:sandstone_rocks", "projectvibrantjourneys:red_sandstone_rocks", "projectvibrantjourneys:ice_chunks", "projectvibrantjourneys:bones", "projectvibrantjourneys:charred_bones", "projectvibrantjourneys:pinecones", "projectvibrantjourneys:seashells"]
con_be_replaced_id += vines
let delay_torch_list = []


function del_one_elem(username) {
    let count = delay_torch_list.filter((el) => el === username);
    delay_torch_list = delay_torch_list.filter((el) => el !== username);
    for (let i = 0; i < count - 1; i++) {
        delay_torch_list.push(username)
    }
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
        let ray = event.player.rayTrace(16)
        let block = ray.block
        let facing = String(ray.facing)

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
        if (vines.includes(String(block.id))) {
            event.server.runCommandSilent(`/execute at ${event.player.username} run setblock ${x} ${y} ${z} air`)
        } else if (con_be_replaced_id.includes(String(block.id))) {
            facing = "up"
            event.server.runCommandSilent(`/execute at ${event.player.username} run setblock ${x} ${y} ${z} air`)
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
        if (con_be_replaced_id.includes(String(event.level.getBlock(x, y, z).id))) {
            event.server.runCommandSilent(`/execute at ${event.player.username} run setblock ${x} ${y} ${z} air`)
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
            }
            event.server.runCommandSilent(`/execute at ${event.player.username} if block ${x} ${y} ${z} air run setblock ${x} ${y} ${z} ${facing_string}`)
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