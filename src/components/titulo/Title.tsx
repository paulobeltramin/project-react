import { TitlePrimary } from './styles'

export type titleProps = {
  children: string
  fontSize?: number
}

export const Title = (titulo: titleProps) => {
  return (
    <>
      <TitlePrimary fontSize={20}>{titulo.children}</TitlePrimary>
    </>
  )
}
