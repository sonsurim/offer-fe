import type {
  SORT_OPTIONS,
  TRADE_ACTIVITY_TYPES,
  SORT_TYPES,
  TRADE_TYPES,
  TRADE_STATUS,
  PRODUCT_CONDITIONS,
  CATEGORIES,
  MESSAGE_SORT_OPTIONS,
  VALID_NICKNAME_MESSAGE,
  SCORE
} from '@constants'

/** 정렬 옵션  */
export type SortOptions = typeof SORT_OPTIONS
export type SortOption = ValueOf<SortOptions>
export type SortOptionCodes = SortOption['code']
export type SortOptionNames = SortOption['name']

/** 정렬 타입 */
export type SortTypes = typeof SORT_TYPES
export type SortType = ValueOf<SortTypes>
export type SortTypeCodes = SortType['code']
export type SortTypeNames = SortType['name']

/** 정렬 타입 - 메세지 */
export type MessageSortTypes = typeof MESSAGE_SORT_OPTIONS
export type MessageSortType = ValueOf<MessageSortTypes>
export type MessageSortTypeCodes = MessageSortType['code']
export type MessageSortTypeNames = MessageSortType['name']

/** 거래 방식  */
export type TradeTypes = typeof TRADE_TYPES
export type TradeType = ValueOf<TradeTypes>
export type TradeTypeCodes = TradeType['code']
export type TradeTypeNames = TradeType['name']

/** 거래 상태  */
export type TradeStatus = typeof TRADE_STATUS
export type TradeStatusType = ValueOf<TradeStatus>
export type TradeStatusCodes = TradeStatusType['code']
export type TradeStatusNames = TradeStatusType['name']

/** 상품 상태 */
export type ProductConditions = typeof PRODUCT_CONDITIONS
export type ProductCondition = ValueOf<ProductConditions>
export type ProductConditionCodes = ProductCondition['code']
export type ProductConditionNames = ProductCondition['name']

/** 카테고리목록 */
export type Categories = typeof CATEGORIES
export type CategoryType = ValueOf<Categories>
export type CategoryCodes = CategoryType['code']
export type CategoryNames = CategoryType['name']

/** 나의 거래 활동 */
export type TradeActivityTypes = typeof TRADE_ACTIVITY_TYPES
export type TradeActivityCodes = KeyOf<TradeActivityTypes>
export type TradeActivityNames = '판매' | '구매' | '후기'

/** 나의 거래 활동 - 판매 */
export type TradeSaleActivityCodes = KeyOf<TradeActivityTypes['sale']>
export type TradeSaleActivityNames = ValueOf<TradeActivityTypes['sale']>

/** 나의 거래 활동 - 구매 */
export type TradeBuyActivityCodes = KeyOf<TradeActivityTypes['buy']>
export type TradeBuyActivityNames = ValueOf<TradeActivityTypes['buy']>

/** 나의 거래 활동 - 리뷰 */
export type TradeReviewActivityCodes = KeyOf<TradeActivityTypes['review']>
export type TradeReviewActivityNames = ValueOf<TradeActivityTypes['review']>

/** 유효성 검사 메시지 */
export type ValidNicknameMessages = ValueOf<typeof VALID_NICKNAME_MESSAGE>

/** 리뷰 */
export type Score = typeof SCORE
export type ScoreNames = KeyOf<Score>
export type ScoreCodes = ValueOf<Score>
