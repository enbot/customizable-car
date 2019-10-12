import { setCssProperties } from '../providers.js'

export const setForestGround = () => setCssProperties([
    { p: '--ground-color', v: '#1D4F11' },
    { p: '--ground', v: 'linear-gradient( 45deg, #1D4F11 25%, transparent 25%, transparent 75%, #1D4F11 75%, #1D4F11 ), linear-gradient(-45deg, #1D4F11 25%, #1b4c10 25%, #1b4c10 77%, #1D4F11 77%, #1D4F11)' }
])

export const setIcyGround = () => setCssProperties([
    { p: '--ground-color', v: '#fafafa' },
    { p: '--ground', v: 'linear-gradient(45deg, #fafafa 25%, transparent 25%, transparent 75%, #fafafa 75%, #fafafa), linear-gradient(-45deg, #fafafa 25%, #f2efef 25%, #f2efef 77%, #fafafa 77%, #fafafa)' }
])

export const setDesertGround = () => setCssProperties([
    { p: '--ground-color', v: '#e0a03e' },
    { p: '--ground', v: 'linear-gradient(45deg, #e0a03e 25%, transparent 25%, transparent 75%, #e0a03e 75%, #e0a03e), linear-gradient(-45deg, #e0a03e 25%, #db9c3d 25%, #db9c3d 77%, #e0a03e 77%, #e0a03e)' }
])