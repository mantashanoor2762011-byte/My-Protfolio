import numpy as np
from PIL import Image, ImageFilter

def grade(im, strength=1.0):
    """Gentle 'premium' grade: neutral white balance, clean levels, soft contrast, richer colour, crisp detail."""
    a = np.asarray(im.convert('RGB')).astype(np.float32) / 255.0
    # 1) partial grey-world white balance (removes blue/green phone casts, keeps mood)
    means = a.reshape(-1, 3).mean(0) + 1e-6
    gain = np.clip((means.mean() / means) ** 0.45, 0.9, 1.12)
    a = a * gain
    # 2) levels from luminance percentiles (lifts dull, dark phone photos)
    lum = a @ np.array([0.2126, 0.7152, 0.0722], np.float32)
    lo, hi = np.percentile(lum, 0.7), np.percentile(lum, 99.3)
    hi = max(hi, lo + 0.25)
    a = (a - lo) / (hi - lo)
    a = np.clip(a, 0, 1)
    # 3) soft S-curve for depth
    s = a * a * (3 - 2 * a)
    a = a + (s - a) * 0.28 * strength
    # 4) richer but natural colour
    lum = (a @ np.array([0.2126, 0.7152, 0.0722], np.float32))[..., None]
    a = lum + (a - lum) * (1 + 0.12 * strength)
    # 5) a touch of warmth (rose-gold feel)
    a[..., 0] *= 1.02; a[..., 2] *= 0.985
    a = np.clip(a, 0, 1)
    out = Image.fromarray((a * 255 + 0.5).astype(np.uint8))
    return out.filter(ImageFilter.UnsharpMask(radius=1.6, percent=55, threshold=2))
