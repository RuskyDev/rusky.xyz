import os
import re

# Folder containing your images
folder_path = "./"  # Change to your folder if needed

# Allowed extensions
extensions = (".jpg", ".png")

# Get all image files
files = [f for f in os.listdir(folder_path) if f.lower().endswith(extensions)]

# Natural sort by number after last underscore
def extract_number(filename):
    match = re.search(r'_(\d+)\.[a-zA-Z]+$', filename)
    return int(match.group(1)) if match else -1

files.sort(key=extract_number)

# Rename each file
for i, filename in enumerate(files):
    # Extract extension
    ext = os.path.splitext(filename)[1]
    # Replace last number with new number
    new_name = re.sub(r'_(\d+)(\.[a-zA-Z]+)$', f'_{i:04d}{ext}', filename)
    # Paths
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_name)
    # Rename
    os.rename(old_path, new_path)
    print(f"Renamed: {filename} -> {new_name}")

print("All files renamed in sequence.")
