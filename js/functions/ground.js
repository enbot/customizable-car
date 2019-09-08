export function setForestGround() {
    document.documentElement.style.setProperty('--ground-color', '#1D4F11');
    document.documentElement.style.setProperty('--ground', 'linear-gradient(45deg, #1D4F11 25%, transparent 25%, transparent 75%, #1D4F11 75%, #1D4F11),linear-gradient(-45deg, #1D4F11 25%, #1b4c10 25%, #1b4c10 77%, #1D4F11 77%, #1D4F11)');
}

export function setIcyGround() {
    document.documentElement.style.setProperty('--ground-color', '#fafafa');
    document.documentElement.style.setProperty('--ground', 'linear-gradient(45deg, #fafafa 25%, transparent 25%, transparent 75%, #fafafa 75%, #fafafa), linear-gradient(-45deg, #fafafa 25%, #f2efef 25%, #f2efef 77%, #fafafa 77%, #fafafa)');
}

export function setDesertGround() {
    document.documentElement.style.setProperty('--ground-color', '#e0a03e');
    document.documentElement.style.setProperty('--ground', 'linear-gradient(45deg, #e0a03e 25%, transparent 25%, transparent 75%, #e0a03e 75%, #e0a03e), linear-gradient(-45deg, #e0a03e 25%, #db9c3d 25%, #db9c3d 77%, #e0a03e 77%, #e0a03e)');
}
