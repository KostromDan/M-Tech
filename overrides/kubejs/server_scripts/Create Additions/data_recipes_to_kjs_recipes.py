import os
for root, dirs, files in os.walk("."):
    path = root.split(os.sep)
    for file in files:
        if file.endswith('.json'):
            with open('/'.join([*path, file]), 'r') as f:
                out = (f"ServerEvents.recipes(event => {{"
                       f"event.custom({f.read()})"
                       f"}})")
            os.remove('/'.join([*path, file]))
            with open('/'.join([*path, file.replace('.json', '.js')]),
                      'w') as f:
                f.write(out)
