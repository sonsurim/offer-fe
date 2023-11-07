import { Avatar, Image } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { MessagePreviewProps } from './types'
import { IMAGE } from '@constants'
import { toLocaleCurrency } from '@utils'

export const MessagePreview = ({
  id,
  userInfo,
  productInfo,
  latestTalk,
  isSelected = false,
  onClick
}: MessagePreviewProps): ReactElement => {
  const handleClickPreview = () => {
    onClick?.(id)
  }

  return (
    <Styled.Container
      isSelected={isSelected}
      role="button"
      onClick={handleClickPreview}>
      <Styled.AvatarWrapper>
        <Avatar
          alt="avatar"
          size="small"
          src={userInfo.profileImageUrl || ''}
        />
      </Styled.AvatarWrapper>
      <Styled.Content>
        <Styled.Nickname>{userInfo.nickname}</Styled.Nickname>
        <Styled.Time>{latestTalk.createdDate}</Styled.Time>
        <Styled.LastMessage>{latestTalk.content}</Styled.LastMessage>
      </Styled.Content>
      <Styled.SubContent>
        <Styled.AlertWrapper>
          <Styled.Alert>6</Styled.Alert>
        </Styled.AlertWrapper>
        <Styled.Price>{`${toLocaleCurrency(
          productInfo.price
        )}원`}</Styled.Price>
      </Styled.SubContent>
      <Styled.ImageWrapper>
        <Image
          alt="product"
          fallbackSrc={IMAGE.CHECKBOARD}
          height="40px"
          src={productInfo.productImageUrl || ''}
          width="40px"
        />
      </Styled.ImageWrapper>
    </Styled.Container>
  )
}