import { cx } from '@ui/utils'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}
export const CheckIcon = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    {...props}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    className={cx('h-[1em] w-[1em]', props.className)}
    aria-labelledby={titleId}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
)
