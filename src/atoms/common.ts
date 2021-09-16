import { atom, atomFamily, selector } from "recoil";
import { BlogType } from "src/types/common";

export const textState = atomFamily({
  key: 'textState',
  default: (userID: string) => {
    return ''
  },
});

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState(''));
    return text.length;
  },
});


export const shareInfoState = atom({
  key: 'shareInfoState',
  default: {
    shareImage: 0,
    shareTags: [] as string[],
  },
});

export const blogState = atom({
  key: 'blogState',
  default: [] as BlogType[]
});

export const shareURLState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const shareState = get(shareInfoState);
    const tweet =
      "https://twitter.com/intent/tweet?url=" +
      encodeURIComponent(
        `https://govote.jp/image${shareState.shareImage
        }`
      ) +
      "&text=" + encodeURIComponent(`${shareState.shareTags.map(tag => `#${tag} `).join(' ')} 
`);
    console.log(tweet)
    return tweet;
  },
});

