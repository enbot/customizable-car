import { setCssProperties } from '../providers.js'

export const setIsle = () => setCssProperties([
    { p: '--sea-border', v: 'solid 2px #661AFF' },
    { p: '--sky', v: 'linear-gradient(0deg, rgba(254, 107, 239, 1) 0%, rgba(254, 107, 239, 1) 11%, rgba(255, 88, 240, 1) 12%, rgba(255, 88, 240, 1) 24%, rgba(239, 66, 254, 1) 25%, rgba(239, 66, 254, 1) 36%, rgba(199, 66, 255, 1) 37%, rgba(199, 66, 255, 1) 49%, rgba(173, 50, 255, 1) 50%, rgba(173, 50, 255, 1) 61%, rgba(155, 33, 254, 1) 62%, rgba(155, 33, 254, 1) 74%, rgba(121, 33, 254, 1) 75%, rgba(121, 33, 254, 1) 86%, rgba(100, 0, 255, 1) 87%, rgba(100, 0, 255, 1) 100%)' },
    { p: '--sea', v: 'linear-gradient(180deg, rgb(120, 1, 255), rgb(0, 174, 255), rgb(12, 255, 133))' },
])

export const setForest = () => setCssProperties([
    { p: '--sea-border', v: 'solid 2px #1D4F11' },
    { p: '--sky', v: 'linear-gradient(45deg, rgb(29, 72, 210),rgb(29, 72, 210),rgb(0, 174, 255))' },
    { p: '--sea', v: 'linear-gradient(180deg, rgb(29, 63, 175), rgb(11, 96, 255), rgb(12, 178, 255))' },
])

export const setIcy = () => setCssProperties([
    { p: '--sea-border', v: 'solid 4px #4B4C4D' },
    { p: '--sky', v: 'linear-gradient(45deg, #8DD6DE, #C2ECE5, #8DD6DE )' },
    { p: '--sea', v: 'linear-gradient(180deg, rgb(137, 212, 255), rgb(88, 194, 255))' }
])

export const setNight = () => setCssProperties([
    { p: '--sea-border', v: 'solid 2px rgb(0, 32, 83)' },
    { p: '--sky', v: 'linear-gradient(315deg, rgb(7, 7, 7),rgb(24, 24, 24), rgb(36, 36, 36) )' },
    { p: '--sea', v: 'linear-gradient(180deg, rgb(8, 27, 92), rgb(12, 60, 148), rgb(7, 81, 116))' }
])