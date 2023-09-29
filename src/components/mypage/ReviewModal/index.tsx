import type { ChangeEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type {
  ReviewModalProps,
  EvaluateState,
  SCORE,
  ReviewState
} from './types'

const MOCK_SCORE: SCORE = [
  {
    state: 'smile',
    text: '좋아요'
  },
  {
    state: 'meh',
    text: '보통이에요'
  },
  {
    state: 'sad',
    text: '별로에요'
  }
]

const ReviewModal = ({
  isOpen = true,
  onClose,
  onClick,
  nickName = '닉네임',
  productName = '상품이름',
  isReadMode = false,
  score = 'smile',
  content = '리뷰'
}: ReviewModalProps): ReactElement => {
  const [isClickReviewIcon, setIsClickReViewIcon] = useState<boolean>(false)

  const [reviewState, setReviewState] = useState<ReviewState>({
    inputLength: 0,
    reviewEvaluate: null,
    reviewText: ''
  })

  const handleClickReviewIcon = (reviewEvaluate: EvaluateState): void => {
    setIsClickReViewIcon(true)
    setReviewState({ ...reviewState, reviewEvaluate })
  }

  const handleInput: ChangeEventHandler<HTMLTextAreaElement> = e => {
    setReviewState({
      ...reviewState,
      inputLength: e.target.value.length,
      reviewText: e.target.value
    })
  }

  const handleClickSendReview = (): void => {
    onClick()
  }

  return (
    <Styled.ReviewModal isOpen={isOpen} onClose={onClose}>
      <Styled.TitleContainer>
        <Styled.FirstSection>
          <Styled.NickName>{nickName}</Styled.NickName>
          <Styled.NormalText>님과</Styled.NormalText>
        </Styled.FirstSection>
        <Styled.NormalText>거래는 어땠나요?</Styled.NormalText>
        <Styled.ProductText>{productName}</Styled.ProductText>
      </Styled.TitleContainer>
      <Styled.ReviewIconContainer>
        {isReadMode ? (
          <Styled.ReviewState>
            <Styled.ReviewIcon
              isFill
              isGood={score === 'smile'}
              type={`${score}Fill`}></Styled.ReviewIcon>
            <Styled.ReviewText isFill>
              {MOCK_SCORE.find(evaluate => evaluate.state === score)?.text}
            </Styled.ReviewText>
          </Styled.ReviewState>
        ) : (
          <>
            {MOCK_SCORE.map(evaluate => {
              return (
                <Styled.ReviewState
                  key={evaluate.state}
                  onClick={(): void => handleClickReviewIcon(evaluate.state)}>
                  <Styled.ReviewIcon
                    isFill={reviewState.reviewEvaluate === evaluate.state}
                    isGood={evaluate.state === 'smile'}
                    type={
                      reviewState.reviewEvaluate === evaluate.state
                        ? `${evaluate.state}Fill`
                        : evaluate.state
                    }></Styled.ReviewIcon>
                  <Styled.ReviewText
                    isFill={reviewState.reviewEvaluate === evaluate.state}>
                    {evaluate.text}
                  </Styled.ReviewText>
                </Styled.ReviewState>
              )
            })}
          </>
        )}
      </Styled.ReviewIconContainer>

      {isReadMode ? (
        <Styled.ReadModeReviewContentArea>
          {content}
        </Styled.ReadModeReviewContentArea>
      ) : (
        <Styled.ReviewTextArea
          guideMessage={`${reviewState.inputLength}/100`}
          maxLength={100}
          onInput={handleInput}></Styled.ReviewTextArea>
      )}

      <Styled.ReviewSendButton
        disabled={isReadMode ? false : !isClickReviewIcon}
        styleType={
          isClickReviewIcon || isReadMode ? 'solidPrimary' : 'solidDisabled'
        }
        onClick={handleClickSendReview}>
        {isReadMode ? '확인' : '후기 보내기'}
      </Styled.ReviewSendButton>
    </Styled.ReviewModal>
  )
}

export { ReviewModal }
