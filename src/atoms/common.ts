import { atom, atomFamily, selector } from "recoil";

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
