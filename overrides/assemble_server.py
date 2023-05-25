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

zip_path = r'"C:\Program Files\7-Zip\7z.exe"'
VERSION = '1.2.31'
OUT_DIR = 'Server-Files-' + VERSION
COPY_DIRS = [
    'config',
    'defaultconfigs',
    'kubejs',
    'mods'
]
ONLY_CLIENT_MODS = [
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


def modify_forge_version_in_file(file, forge_version):
    with open(os.path.join(OUT_DIR, file), 'r') as out_f:
        text = out_f.read()
    text = text.replace("{{forge_version}}", forge_version)
    with open(os.path.join(OUT_DIR, file), 'w') as out_f:
        out_f.write(text)


def main():
    os.system('taskkill /F /IM Overwolf.exe')
    time.sleep(1)
    os.system(f'rmdir {OUT_DIR} /s /q')
    os.system(fr'xcopy.exe .\Server-Files-Static\* .\{OUT_DIR}\ /e /Y')
    for file_name in os.listdir(os.path.join(OUT_DIR, 'mods')):
        extention = file_name.split('.')[-1]
        if extention == 'jarnot':
            os.system(
                fr'ren .\{OUT_DIR}\mods\{file_name} {file_name.replace(".jarnot", "")}.jar')
    for dir_name in COPY_DIRS:
        os.system(fr'xcopy.exe .\{dir_name}\* .\{OUT_DIR}\{dir_name}\ /e /Y')
    for file_name in os.listdir(os.path.join(OUT_DIR, 'mods')):
        for rem_mod_name in ONLY_CLIENT_MODS:
            if rem_mod_name in file_name:
                os.remove(os.path.join(OUT_DIR, 'mods', file_name))
    os.system(fr'ren .\{OUT_DIR}\startserverbat.txt startserver.bat')
    os.system(fr'ren .\{OUT_DIR}\startserversh.txt startserver.sh')
    with open('manifest.json', 'r') as in_f:
        manifest = json.loads(in_f.read())
    forge_version = manifest["minecraft"]["modLoaders"][0]["id"].split('-')[1]
    modify_forge_version_in_file('startserver.bat', forge_version)
    modify_forge_version_in_file('startserver.sh', forge_version)
    desktop = os.path.join(os.path.join(os.environ['USERPROFILE']), 'Desktop')
    out_file = os.path.join(desktop, OUT_DIR + '.zip')
    try:
        os.remove(out_file)
    except FileNotFoundError:
        pass
    os.system(f'{zip_path} a -tzip -mx5 -r0 {out_file} {OUT_DIR}')
    os.system(
        '"C:\Program Files (x86)\Overwolf\OverwolfLauncher.exe" -launchapp cchhcaiapeikjbdbpfplgmpobbcdkdaphclbmkbj -from-startmenu')


if __name__ == '__main__':
    main()
