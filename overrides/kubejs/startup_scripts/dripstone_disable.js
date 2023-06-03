let m_tech_options = JsonIO.read('kubejs/m_tech_options.json')
if (m_tech_options == null || m_tech_options["pointed_dripstone_enabled"] == null || m_tech_options["pointed_dripstone_enabled"] == false) {
    BlockEvents.modification(event => {
        event.modify("pointed_dripstone", /** * @param {Internal.Block} block */block => {
            block.setIsRandomlyTicking(false)
        })
    })
}