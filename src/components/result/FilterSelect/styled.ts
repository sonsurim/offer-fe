import styled from '@emotion/styled'
import { SelectBox } from '@offer-ui/react'

const SelectWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    margin-top: 25px;
    display: block;
    justify-content: none;
  }
`

const LeftSelectWrapper = styled.div`
  display: flex;
  gap: 8px;
`
const CategorySelect = styled(SelectBox)`
  div:nth-of-type(1) {
    span {
      ${({ theme }): string => theme.fonts.body02B};
    }
  }
`
const TradePeriodSelect = styled(SelectBox)`
  div:nth-of-type(1) {
    span {
      ${({ theme }): string => theme.fonts.body02B};
    }
  }
`

const RightSelectWrapper = styled.div`
  ${({ theme }): string => theme.mediaQuery.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
`
const PriceFilterSelect = styled(SelectBox)`
  div:nth-of-type(1) {
    span {
      ${({ theme }): string => theme.fonts.body02B};
    }
  }
`

const ProductCount = styled.div`
  margin-right: auto;
  ${({ theme }): string => theme.fonts.body01B}
`

export const Styled = {
  SelectWrapper,
  LeftSelectWrapper,
  CategorySelect,
  TradePeriodSelect,
  RightSelectWrapper,
  PriceFilterSelect,
  ProductCount
}
