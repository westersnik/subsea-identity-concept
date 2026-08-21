from collections import deque
from pathlib import Path

from PIL import Image


SOURCE = Path('/home/ubuntu/webdev-static-assets')
OUTPUT = SOURCE / 'partner-logo-crops'
LOGOS = [
    'orlen-logo.png',
    'cooper8-logo.png',
    'eqhub-logo.png',
    'informatiq-official-logo.png',
    'invig-logo.png',
    'offshore-norge-logo.png',
    'gs1-norway-logo.png',
]


def clear_border_background(image: Image.Image) -> Image.Image:
    """Make near-white border-connected background transparent, preserving white inside colored marks."""
    rgba = image.convert('RGBA')
    width, height = rgba.size
    pixels = rgba.load()
    seen = set()
    queue = deque()

    def is_near_white(x: int, y: int) -> bool:
        r, g, b, a = pixels[x, y]
        return a > 0 and r > 238 and g > 238 and b > 238

    for x in range(width):
        queue.extend(((x, 0), (x, height - 1)))
    for y in range(height):
        queue.extend(((0, y), (width - 1, y)))

    while queue:
        x, y = queue.popleft()
        if (x, y) in seen or not (0 <= x < width and 0 <= y < height) or not is_near_white(x, y):
            continue
        seen.add((x, y))
        pixels[x, y] = (255, 255, 255, 0)
        queue.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))
    return rgba


def crop_logo(path: Path) -> None:
    image = clear_border_background(Image.open(path))
    bbox = image.getchannel('A').getbbox()
    if not bbox:
        raise ValueError(f'No visible logo pixels found in {path.name}')
    left, top, right, bottom = bbox
    pad = max(8, round(max(right - left, bottom - top) * 0.08))
    left, top = max(0, left - pad), max(0, top - pad)
    right, bottom = min(image.width, right + pad), min(image.height, bottom + pad)
    cropped = image.crop((left, top, right, bottom))
    cropped.thumbnail((720, 260), Image.Resampling.LANCZOS)
    OUTPUT.mkdir(parents=True, exist_ok=True)
    cropped.save(OUTPUT / path.name, optimize=True)


for logo in LOGOS:
    crop_logo(SOURCE / logo)

print(f'Prepared {len(LOGOS)} partner logos in {OUTPUT}')
