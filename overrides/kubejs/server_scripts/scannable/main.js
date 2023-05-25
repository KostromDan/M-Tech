ServerEvents.recipes(event => {
    event.remove({
        output: 'scannable:scanner',
    })
    event.shaped('scannable:scanner', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'ae2:quantum_link',
        B: 'immersiveengineering:tesla_coil',
        C: 'immersiveengineering:capacitor_hv',
        D: 'immersiveengineering:thermoelectric_generator',
        E: 'ae2:spatial_anchor'
    })
})