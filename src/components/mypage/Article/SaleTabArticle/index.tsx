import type { SelectOnChangeHandler } from '@offer-ui/react'
import { Icon, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { SaleTabArticleProps } from './types'
import { TRADE_STATUS } from '@constants'
import type { TradeStatus } from '@types'
import { toLocaleCurrency } from '@utils'

export const SaleTabArticle = (props: SaleTabArticleProps): ReactElement => {
  const {
    className,
    id,
    mainImageUrl,
    title,
    price,
    tradeStatus,
    modifiedDate,
    likeCount,
    hasToken,
    isReviewed,
    onChangeTradeStatus
  } = props
  const isSoldOut = tradeStatus.code === 8

  const handleChangeTradeStatus: SelectOnChangeHandler<TradeStatus> = item => {
    onChangeTradeStatus?.(id, item)
  }

  return (
    <Styled.Container className={className}>
      <Styled.ProductWrapper hasToken={hasToken}>
        <Styled.ProductImg alt={`product${id}-img`} src={mainImageUrl} />
        {hasToken ? (
          <Styled.SelectBox
            items={TRADE_STATUS}
            value={tradeStatus.code}
            onChange={handleChangeTradeStatus}
          />
        ) : (
          <Styled.FavoriteWrapper isOnlyOther>
            <Icon color="grayScale50" size={14} type="heart" />
            <Text styleType="body02R">{likeCount}</Text>
          </Styled.FavoriteWrapper>
        )}
        <Styled.ProductMetaWrapper>
          <Styled.ProductName styleType="body02M">{title}</Styled.ProductName>
          <Styled.ProductInfoWrapper>
            <Styled.Price>시작가: {toLocaleCurrency(price)}원</Styled.Price>
            <Styled.FavoriteWrapper isOnlyOther={false}>
              <Icon color="grayScale50" size={14} type="heart" />
              <Text styleType="body02R">{likeCount}</Text>
            </Styled.FavoriteWrapper>
            <Styled.Date hasToken={hasToken} styleType="body02R">
              {modifiedDate}
            </Styled.Date>
          </Styled.ProductInfoWrapper>
        </Styled.ProductMetaWrapper>
      </Styled.ProductWrapper>
      {hasToken && isSoldOut && (
        <Styled.ReviewButtonWrapper>
          <Styled.ReviewButton
            isReviewed={isReviewed}
            size="small"
            styleType="outline">
            {isReviewed ? '보낸 후기 보기' : '후기 보내기'}
          </Styled.ReviewButton>
        </Styled.ReviewButtonWrapper>
      )}
    </Styled.Container>
  )
}
