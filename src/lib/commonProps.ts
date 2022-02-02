export const absCover = {
  position: 'absolute' as 'absolute',
  w: "100%",
  h: "100%",
  left: 0,
  top: 0,
  objectFit: 'cover' as 'cover',
}
export const ryoutan = {
  "textAlign": "justify" as "justify"
}
export const headEn = {
  "fontFamily": "netflix",
  "fontWeight": 900,
  "letterSpacing": 0,
}

export const descStyle = {
  "fontSize": "3.4666666vw",
}

export const fontSizeChanger = (num: number) => {
  const ww = typeof window !== 'undefined' ? window.innerWidth : 375
  console.log('ww:', ww);
  console.log('num:', num);
  console.log('num * 100 / 750:', num * 100 / 750);
  console.log('ww < 767:', ww < 767);
  return ww < 767 ? `${num * 100 / 750}vw` : `${num / 16}rem`;
}

export const absCenter = {
  position: 'absolute' as 'absolute',
  transform: 'translate(-50%,-50%)',
  left: '50%',
  top: '50%',
}

export const closeLineStyle = {
  position: 'absolute' as 'absolute',
  bg: 'black',
  height: '1px',
  width: '100%',
  top: "50%",
  left: 0,
}

export const loadImage = (path: string): Promise<HTMLImageElement> => {
  return new Promise(resolve => {
    const img = new Image()
    img.src = path
    img.onload = () => { // 読み込み完了時に発火する関数
      resolve(img);
    }
  })
}

