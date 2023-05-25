"""This script will assemble server pack for this modpack automaticly.
This Python script automates the process of assembling a server pack for the
M-Tech modpack. Initially, the script closes the Overwolf application before
proceeding, otherwise, this application will break copying (I can't say exactly
why, but it will definitely happen if it's not done). It then imports necessary
modules, defines paths, and sets up the output directory. The script identifies
client-only mods and excludes them from the server pack. It proceeds to copy
the relevant directories to the output directory and removes client-only mods.
Afterward, the script compresses the final server pack as a .zip file, moves
the output .zip file to the user's desktop, and relaunches the
Overwolf application."""
import json
import os
import time
import tkinter as tk

zip_path = r'"C:\Program Files\7-Zip\7z.exe"'
VERSION = '1.3.7'
OUT_DIR = 'Server-Files-' + VERSION
COPY_DIRS = [
    'config',
    'defaultconfigs',
    'kubejs',
    'mods'
]
ONLY_CLIENT_MODS = [
    'canary',
    'DefaultSettings',
    'JCPlugin',
    'MyServerIsCompatible',
    'lightspeed',
    'yeetusexperimentus',
    'BetterAdvancements',
    'chat_heads',
    'Controlling',
    'defaultoptions',
    'DefaultWorldType',
    'difficultylock',
    'entityculling',
    'farsight',
    'FpsReducer',
    'HealthOverlay',
    'invhud.forge.1.19',
    'itemzoom',
    'jeimultiblocks',
    'JER',
    'JustEnoughProfessions',
    'justzoom_forge_1.0.1',
    'LegendaryTooltips',
    'modernworldcreation',
    'moreoverlays',
    'namepain',
    'NekosEnchantedBooks',
    'oculus',
    'Prism',
    'rubidium',
    'shutupexperimentalsettings',
    'simple-rpc',
    'StylishEffects',
]
raise_not_found = False


def create_window():
    global raise_not_found
    raise_not_found = False

    def raise_file_not_found_after_main_loop():
        global raise_not_found
        raise_not_found = True

    def button_click(cmd):
        window.destroy()
        if cmd:
            cmd()

    window = tk.Tk()
    window.title("Tkinter Window")

    button1 = tk.Button(window, text="KostromDan's Server",
                        command=lambda: button_click(None))
    button1.pack(padx=10, pady=10)

    button2 = tk.Button(window, text="CurseForge Release",
                        command=lambda: button_click(
                            raise_file_not_found_after_main_loop))
    button2.pack(padx=10, pady=10)

    window.mainloop()
    if raise_not_found: raise FileNotFoundError


def modify_bat_sh_file(file, custom_options):
    with open(os.path.join(OUT_DIR, file), 'r') as out_f:
        text = out_f.read()
    text = text.replace("{{forge_version}}", custom_options['forge_version'])
    text = text.replace("{{view-distance}}",
                        str(custom_options["server_cfg_view"]))
    text = text.replace("{{simulation-distance}}",
                        str(custom_options["server_cfg_simulation"]))
    text = text.replace("{{server_port}}",
                        str(custom_options["server_port"]))

    with open(os.path.join(OUT_DIR, file), 'w') as out_f:
        out_f.write(text)


def main():
    os.system('taskkill /F /IM Overwolf.exe')
    time.sleep(1)
    os.system(f'rmdir {OUT_DIR} /s /q')
    os.system(f'rmdir {os.path.join("config", "jei", "world")} /s /q')
    with open("config/bcc-common.toml", 'r') as in_f:
        bcc_conf = in_f.readlines()
    with open("config/bcc-common.toml", 'w') as out_f:
        for line in bcc_conf:
            if "modpackVersion" in line:
                line = f'	modpackVersion = "{VERSION}"\n'
            out_f.write(line)
    NOT_REMOVE = {
        'integrationHints',
        'inventoryprofiles.json'
    }
    for file_name in os.listdir(
            os.path.join("config", "inventoryprofilesnext")):
        if file_name not in NOT_REMOVE:
            os.system(
                f'rmdir "{os.path.join("config", "inventoryprofilesnext", file_name)}" /s /q')

    os.system(fr'xcopy.exe .\Server-Files-Static\* .\{OUT_DIR}\ /e /Y')

    for file_name in os.listdir(os.path.join(OUT_DIR, 'mods')):
        extention = file_name.split('.')[-1]
        if extention == 'serverjar':
            os.system(
                fr'ren .\{OUT_DIR}\mods\{file_name} {file_name.replace(".serverjar", "")}.jar')
    for dir_name in COPY_DIRS:
        os.system(fr'xcopy.exe .\{dir_name}\* .\{OUT_DIR}\{dir_name}\ /e /Y')
    for file_name in os.listdir(os.path.join(OUT_DIR, 'mods')):
        for rem_mod_name in ONLY_CLIENT_MODS:
            if rem_mod_name in file_name:
                os.remove(os.path.join(OUT_DIR, 'mods', file_name))
    os.system(fr'ren .\{OUT_DIR}\startserverbat.txt startserver.bat')
    os.system(fr'ren .\{OUT_DIR}\startserversh.txt startserver.sh')
    try:

        with open('custom_assemble_options.json', 'r') as in_f:
            custom_options = json.loads(in_f.read())
        create_window()
    except FileNotFoundError:
        with open(os.path.join("Server-Files-Static",
                               "custom_assemble_options.json"), 'r') as in_f:
            custom_options = json.loads(in_f.read())
    with open('manifest.json', 'r') as in_f:
        manifest = json.loads(in_f.read())
    forge_version = manifest["minecraft"]["modLoaders"][0]["id"].split('-')[1]
    custom_options["forge_version"] = forge_version
    modify_bat_sh_file('startserver.bat', custom_options)
    modify_bat_sh_file('startserver.sh', custom_options)
    os.remove(os.path.join(OUT_DIR, 'custom_assemble_options.json'))
    with open(os.path.join(OUT_DIR, 'user_jvm_args.txt'), 'r') as in_f:
        jmv_options = in_f.read()
    jmv_options = jmv_options.replace('{{max_memory_G}}',
                                      str(custom_options['max_memory_G']))
    with open(os.path.join(OUT_DIR, 'user_jvm_args.txt'), 'w') as out_f:
        out_f.write(jmv_options)

    desktop = os.path.join(os.path.join(os.environ['USERPROFILE']), 'Desktop')
    out_file = os.path.join(desktop, OUT_DIR + '.zip')
    try:
        os.remove(out_file)
    except FileNotFoundError:
        pass
    os.system(f'{zip_path} a -tzip -mx5 -r0 {out_file} {OUT_DIR}')
    os.system(
        '"C:\Program Files (x86)\Overwolf\OverwolfLauncher.exe" -launchapp cchhcaiapeikjbdbpfplgmpobbcdkdaphclbmkbj -from-startmenu')
    os.system(f'rmdir {OUT_DIR} /s /q')


if __name__ == '__main__':
    main()
