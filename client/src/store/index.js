import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EAB130',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './bacc_b.png',
    fullDecal: './bacc_b.png',
});

export default state;