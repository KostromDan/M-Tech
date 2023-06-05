const $TEAM_EVENTS = Java.loadClass('dev.ftb.mods.ftbteams.event.TeamEvent');
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $FTBChunks = Java.loadClass('dev.ftb.mods.ftbchunks.FTBChunks')
const $BooleanProperty = Java.loadClass('dev.ftb.mods.ftbteams.property.BooleanProperty')

ArchEvents.registry(event => {
    event.register('ftb.teams.created', $TEAM_EVENTS, 'CREATED');
});

ArchEvents.handle('ftb.teams.created', e => {
    let event = e.args[0];
    let team = event.team;
    let property = $BooleanProperty(new $ResourceLocation($FTBChunks.MOD_ID, "allow_fake_players"), true)
    team.setProperty(property, true)
});