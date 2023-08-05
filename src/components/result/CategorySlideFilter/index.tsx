import { useMedia } from '@offer-ui/react'
import { useRef, useState, useCallback, useEffect } from 'react'
import type { ReactElement, TouchEventHandler } from 'react'
import { Styled } from './styled'
import type { CategorySlideFilterProps } from './types'

const CategorySlideFilter = ({
  cateGoryList,
  onCategoryClick
}: CategorySlideFilterProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDrag, setIsDrag] = useState(false)
  const [startX, setStartX] = useState<number>(0)
  const { desktop } = useMedia()
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLast, setIsLast] = useState<boolean>(false)
  const [moveDistanceFromArrow, setMoveDistanceFromArrow] = useState<number>(0)
  const isFirstCategory = containerRef.current?.scrollLeft === 0

  const handleCategoryClick = (name: string): void => {
    onCategoryClick(name)
  }
  useEffect(() => {
    if (desktop) setIsDesktop(true)
    else {
      setIsDesktop(false)
    }
  }, [desktop])
  const onDragStart: TouchEventHandler<HTMLDivElement> = e => {
    if (!containerRef || !containerRef.current || isDesktop) {
      return
    }
    setIsDrag(true)
    setStartX(e.touches[0].clientX + containerRef.current.scrollLeft)
  }

  const onDragEnd = useCallback((): void => {
    setIsDrag(false)
  }, [])

  const handleLeftArrowClick = useCallback((): void => {
    if (!containerRef || !containerRef.current || isDrag) {
      return
    }
    containerRef.current.scrollLeft = 0
    setMoveDistanceFromArrow(containerRef.current.scrollLeft)
    setIsLast(false)
  }, [isDrag])

  const handleRightArrowClick = useCallback((): void => {
    if (!containerRef || !containerRef.current || isDrag) {
      return
    }
    containerRef.current.scrollLeft += 200
    setMoveDistanceFromArrow(containerRef.current.scrollLeft)
    setIsLast(true)
  }, [isDrag])

  const onDragMove: TouchEventHandler<HTMLDivElement> = useCallback(
    e => {
      if (!containerRef || !containerRef.current) {
        return
      }
      if (isDrag) {
        const { scrollWidth, clientWidth, scrollLeft } = containerRef.current
        containerRef.current.scrollLeft = startX - e.touches[0].clientX
        if (scrollLeft === 0) {
          setStartX(e.touches[0].clientX)
        } else if (scrollWidth <= clientWidth + scrollLeft) {
          setStartX(e.touches[0].clientX + scrollLeft)
        }
      }
    },
    [isDrag, startX]
  )
  return (
    <>
      <Styled.CateGoryBoxWrapper>
        <Styled.CateGoryBox
          ref={containerRef}
          onMouseUp={onDragEnd}
          onTouchEnd={onDragEnd}
          onTouchMove={isDrag ? onDragMove : undefined}
          onTouchStart={onDragStart}>
          {isFirstCategory ? (
            <div />
          ) : (
            <Styled.LeftArrowWrapper>
              <Styled.LeftArrow
                color="black"
                icon="arrowLeft"
                size={16}
                onClick={handleLeftArrowClick}
              />
            </Styled.LeftArrowWrapper>
          )}
          {isLast ? (
            <div />
          ) : (
            <Styled.RightArrowWrapper>
              <Styled.RightArrow
                color="black"
                icon="arrowLeft"
                size={16}
                onClick={handleRightArrowClick}
              />
            </Styled.RightArrowWrapper>
          )}
          <Styled.CateGoryItemWrapper
            moveDistanceFromArrow={moveDistanceFromArrow}>
            {cateGoryList.map(cateGory => (
              <Styled.CategoryItem
                key={cateGory.name}
                selected={cateGory.selected}
                onClick={(): void => {
                  handleCategoryClick(cateGory.name)
                }}>
                <Styled.CateGoryName selected={cateGory.selected}>
                  {cateGory.name}
                </Styled.CateGoryName>
              </Styled.CategoryItem>
            ))}
          </Styled.CateGoryItemWrapper>
        </Styled.CateGoryBox>
      </Styled.CateGoryBoxWrapper>
    </>
  )
}
export { CategorySlideFilter, CategorySlideFilterProps }