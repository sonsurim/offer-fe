import type { ModalProps, IconType } from '@offer-ui/react'

type Evaluate = Extract<IconType, 'smile' | 'meh' | 'sad'>

export type EvaluateState = Evaluate | null

export type ReviewModalProps = Pick<
  ModalProps,
  'isOpen' | 'onClose' | 'children'
> & {
  nickName: string
  productName: string
  isReadMode?: boolean
  score: Evaluate
  content?: string
  onClick(): void
}

export type SCORE = {
  state: Evaluate
  text: string
}[]

export type ReviewState = {
  inputLength: number
  reviewEvaluate: EvaluateState
  reviewText: string
}

export type StyledReviewIconProps = {
  isFill: boolean
  isGood: boolean
}

export type StyledReviewTextProps = {
  isFill: boolean
}
