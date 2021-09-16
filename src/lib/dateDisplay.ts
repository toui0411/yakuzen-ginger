export const zeroPadding=(num: number, len: number) : string=>{
  return (Array(len).join("0") + num).slice(-len);
}

export const dateDisplay=(date: Date | string) :string=>{
  if (typeof date === "string") {
    date = new Date(date);
  }
  return `${date.getFullYear()}.${zeroPadding(
    date.getMonth() + 1,
    2
  )}.${zeroPadding(date.getDate(), 2)}`;
}
