import countryMeta from './countryMeta.json';

const modules = import.meta.glob('../content/*.html', { as: 'raw', eager: true });

export function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export const countryData = Object.entries(modules).reduce((acc, [path, html]) => {
  const match = path.match(/\/([\w-]+)\.html$/);
  if (match) {
    const country = match[1].toLowerCase();
    acc[country] = {
      country,
      html,
      ...countryMeta[country]
    };
  }
  return acc;
}, {});
