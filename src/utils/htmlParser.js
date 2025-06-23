export function encodeHtmlForJsonSingleLine(html) {
  const cleaned = html.replace(/\s*\n\s*/g, ' ').trim().replace(/>\s+</g, '><');
  return JSON.stringify(cleaned);
}

export function concatenateHtmlContent(sections = {}, wrapConfig = {}) {
  return Object.entries(sections)
    .map(([key, value]) => {
      if (!value) return '';
      const tags = Array.isArray(wrapConfig[key])
        ? wrapConfig[key]
        : wrapConfig[key]
          ? [wrapConfig[key]]
          : [];
      return tags.reduceRight((acc, tag) => `<${tag}>${acc}</${tag}>`, value);
    })
    .join('')
    .trim();
}

function findSentenceEndNear(text, threshold = 100) {
  const sentenceEndRegex = /([.!?])\s/g;
  const matches = [...text.matchAll(sentenceEndRegex)];

  for (const match of matches) {
    if (match.index >= threshold) {
      return match.index + 1;
    }
  }

  if (matches.length > 0) {
    return matches[matches.length - 1].index + 1;
  }

  return Math.min(threshold, text.length);
}

export function processHtmlContent(
  html,
  styles = {},
  splitMarker = '<!-- __SPLIT__ -->',
  charThreshold = 100,
  closingTag = '</p>'
) {
  if (!html || typeof html !== 'string') {
    return { show: '', hide: '' };
  }

  // Inject CSS module classes
  const htmlWithScopedClasses = html.replace(/class="([^"]+)"/g, (_, classNames) => {
    const scoped = classNames
      .split(/\s+/)
      .map(name => styles[name] || name)
      .join(' ');
    return `class="${scoped}"`;
  });

  let show = '';
  let hide = '';

  if (splitMarker && htmlWithScopedClasses.includes(splitMarker)) {
    const splitIndex = htmlWithScopedClasses.indexOf(splitMarker) + splitMarker.length;
    show = htmlWithScopedClasses.slice(0, splitIndex);
    hide = htmlWithScopedClasses.slice(splitIndex);
  } else {
    const closingTagIndex = htmlWithScopedClasses.indexOf(closingTag);
    if (closingTagIndex !== -1) {
      const splitIndex = closingTagIndex + closingTag.length;
      show = htmlWithScopedClasses.slice(0, splitIndex);
      hide = htmlWithScopedClasses.slice(splitIndex);
    } else {
      const fallbackIndex = findSentenceEndNear(htmlWithScopedClasses, charThreshold);
      show = htmlWithScopedClasses.slice(0, fallbackIndex);
      hide = htmlWithScopedClasses.slice(fallbackIndex);
    }
  }

  return {
    show: show.trim(),
    hide: hide.trim()
  };
}
