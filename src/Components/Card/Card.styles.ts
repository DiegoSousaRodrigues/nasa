import { tv } from 'tailwind-variants'

export const Wrapper = tv({
  base: 'flex flex-col w    -[280px] transform transition-transform duration-300 hover:scale-110',
})

export const WrapperTitle = tv({
  base: 'flex flex-col items-center py-2 rounded-t-2xl bg-white',
})

export const WrapperContent = tv({
  base: 'flex flex-col items-center justify-center py-4 px-4 bg-white flex-1',
})

export const Title = tv({
  base: 'text-xl font-semibold',
})

export const Footer = tv({
  base: 'flex justify-center w-full rounded-b-2xl py-4 px-4 bg-white',
})

export const Button = tv({
  base: 'border-2 py-1 px-4 rounded-full font-semibold cursor-pointer',
})
