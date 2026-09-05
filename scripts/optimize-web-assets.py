from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]


def webp(relative_path: str, *, quality: int, max_side: int | None = None) -> None:
    source = ROOT / relative_path
    output = source.with_suffix(".webp")
    image = Image.open(source)
    if max_side and max(image.size) > max_side:
        image.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    # 大きな透過画像でもメモリを使い切らない範囲で十分な圧縮を行う。
    method = 4 if image.width * image.height > 3_000_000 else 6
    image.save(output, "WEBP", quality=quality, method=method, exact=True)
    print(f"{source.relative_to(ROOT)} -> {output.relative_to(ROOT)} ({output.stat().st_size / 1024:.1f} KB)")


for frame in range(1, 8):
    webp(f"src/assets/logo/煙{frame}.png", quality=90)

webp("src/assets/logo/煙8-下部背景付き-v2.png", quality=90)
webp("src/assets/logo/ランプ.png", quality=92, max_side=1024)

for filename, quality, max_side in (
    ("e6c136ba7e16974cb9b54225078026295647ba89.png", 88, 1600),
    ("3231ca4a209615e16870d257b55d609595b1c0ac.png", 92, 1254),
    ("903602c17e66886ba85a516cd4e558e1b25e0dc7.png", 88, 2048),
    ("2c47d36d4cbf9106105be9c15f8e09b16e955d8e.png", 95, 500),
):
    webp(f"src/imports/AnitSummerLive2026WebsiteMockup/{filename}", quality=quality, max_side=max_side)

for image_path in (ROOT / "src/assets/bands").iterdir():
    if image_path.suffix.lower() in {".jpg", ".jpeg", ".png"}:
        webp(str(image_path.relative_to(ROOT)), quality=82, max_side=1600)


def optimized_png(relative_path: str, max_side: int) -> None:
    source = ROOT / relative_path
    output = source.with_name(f"{source.stem}-web{source.suffix}")
    image = Image.open(source).convert("RGBA")
    image.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    image.save(output, optimize=True)
    print(f"{source.relative_to(ROOT)} -> {output.relative_to(ROOT)} ({output.stat().st_size / 1024:.1f} KB)")


optimized_png("src/assets/logo/サマライロゴ(背景透過ver.).png", 512)
optimized_png("src/assets/social/x-white.png", 128)
