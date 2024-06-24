import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

export const gh = (file: string) => `${base}/${file}` ; 

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);


export const ProfilePics=[
	// gh('pp1.png'),
	// gh('pp2.png'),
	gh('pp3.png'),
	// gh('pp4.png')
]
let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
