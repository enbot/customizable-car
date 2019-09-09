export function setIsle() {
    document.documentElement.style.setProperty('--sea-border', 'solid 2px #661AFF');
    document.documentElement.style.setProperty('--sky', 'linear-gradient(0deg, rgba(254, 107, 239, 1) 0%, rgba(254, 107, 239, 1) 11%, rgba(255, 88, 240, 1) 12%, rgba(255, 88, 240, 1) 24%, rgba(239, 66, 254, 1) 25%, rgba(239, 66, 254, 1) 36%, rgba(199, 66, 255, 1) 37%, rgba(199, 66, 255, 1) 49%, rgba(173, 50, 255, 1) 50%, rgba(173, 50, 255, 1) 61%, rgba(155, 33, 254, 1) 62%, rgba(155, 33, 254, 1) 74%, rgba(121, 33, 254, 1) 75%, rgba(121, 33, 254, 1) 86%, rgba(100, 0, 255, 1) 87%, rgba(100, 0, 255, 1) 100%)');
    document.documentElement.style.setProperty('--sea', 'linear-gradient(180deg, rgb(120, 1, 255), rgb(0, 174, 255), rgb(12, 255, 133))');
}

export function setForest() {
    document.documentElement.style.setProperty('--sea-border', 'solid 2px #1D4F11');
    document.documentElement.style.setProperty('--sky', 'linear-gradient(45deg, rgb(29, 72, 210),rgb(29, 72, 210),rgb(0, 174, 255))');
    document.documentElement.style.setProperty('--sea', 'linear-gradient(180deg, rgb(29, 63, 175), rgb(11, 96, 255), rgb(12, 178, 255))');
}

export function setIcy() {
    document.documentElement.style.setProperty('--sea-border', 'solid 4px #4B4C4D');
    document.documentElement.style.setProperty('--sky', 'linear-gradient(45deg, #8DD6DE, #C2ECE5, #8DD6DE )');
    document.documentElement.style.setProperty('--sea', 'linear-gradient(180deg, rgb(137, 212, 255), rgb(88, 194, 255))');
}

export function setNight() {
    document.documentElement.style.setProperty('--sea-border', 'solid 2px rgb(0, 32, 83)');
    document.documentElement.style.setProperty('--sky', 'linear-gradient(315deg, rgb(7, 7, 7),rgb(24, 24, 24), rgb(36, 36, 36) )');
    document.documentElement.style.setProperty('--sea', 'linear-gradient(180deg, rgb(8, 27, 92), rgb(12, 60, 148), rgb(7, 81, 116))');
}