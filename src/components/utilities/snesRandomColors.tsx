const snesButtonColors = [
    'snes-button has-plumber-color',
    'snes-button has-sunshine-color',
    'snes-button has-ocean-color',
    'snes-button has-turquoise-color',
    'snes-button has-phantom-color',
    'snes-button has-rose-color',
    'snes-button has-galaxy-color',
    'snes-button has-ember-color',
    'snes-button '
];

export const getRandomSnesButtonColor = () => {
    return snesButtonColors[Math.floor(Math.random() * snesButtonColors.length)];
};

const snesLinkColors = [
    'snes-link text-ember-color',
    'snes-link text-galaxy-color',
    'snes-link text-rose-color',
    'snes-link text-phantom-color',
    'snes-link text-turquoise-color',
    'snes-link text-ocean-color',
    'snes-link text-sunshine-color',
    'snes-link text-plumber-color',
    'snes-link text-nature-color',
    'snes-link'
];

export const getRandomSnesLinkColor = () => {
    return snesLinkColors[Math.floor(Math.random() * snesLinkColors.length)];
};

const snesBlockquotesColors = [
    'snes-blockquote has-plumber-bg',
    'snes-blockquote has-phantom-bg',
    'snes-blockquote has-ember-bg',
    'snes-blockquote '];

export const getRandomBlockquotesColor = () => {
    return snesBlockquotesColors[Math.floor(Math.random() * snesBlockquotesColors.length)];
};