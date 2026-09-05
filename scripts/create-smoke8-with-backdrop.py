from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "src" / "assets" / "logo"
SOURCE = ASSET_DIR / "煙8.png"
OUTPUT = ASSET_DIR / "煙8-下部背景付き-v2.png"
EXTENSION_HEIGHT = 2160
BACKDROP_START = 840
BACKGROUND = (6, 7, 19, 255)

smoke = Image.open(SOURCE).convert("RGBA")
canvas = Image.new(
    "RGBA",
    (smoke.width, smoke.height + EXTENSION_HEIGHT),
    (0, 0, 0, 0),
)
# 煙が画面幅を覆っている最後の高さから下を背景色で満たす。
# 開始境界は不透明な煙の背後に隠れるため、直線として見えない。
backdrop = Image.new(
    "RGBA",
    (smoke.width, canvas.height - BACKDROP_START),
    BACKGROUND,
)
canvas.alpha_composite(backdrop, (0, BACKDROP_START))
canvas.alpha_composite(smoke, (0, 0))
canvas.save(OUTPUT, optimize=True)

print(f"created: {OUTPUT}")
print(
    f"canvas: {canvas.size}, backdrop: y={BACKDROP_START}..{canvas.height}, "
    f"extension: {EXTENSION_HEIGHT}px"
)
