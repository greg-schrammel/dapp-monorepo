import { cx } from '@ui/utils'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}
export const WalletIcon = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    className={cx('h-[1em] w-[1em]', props.className)}
    aria-labelledby={titleId}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M19.5 6.75H4.5C3.25736 6.75 2.25 7.75736 2.25 9V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M19.2825 6.74998V5.34373C19.2824 4.99883 19.2062 4.6582 19.0592 4.34615C18.9123 4.0341 18.6984 3.75832 18.4326 3.53849C18.1668 3.31866 17.8558 3.16019 17.5217 3.0744C17.1877 2.98861 16.8388 2.9776 16.5 3.04217L4.155 5.1492C3.6189 5.25136 3.13526 5.53741 2.78749 5.958C2.43972 6.37859 2.24963 6.90736 2.25 7.4531V9.74998"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M17.25 15C16.9533 15 16.6633 14.912 16.4166 14.7472C16.17 14.5824 15.9777 14.3481 15.8642 14.074C15.7506 13.7999 15.7209 13.4983 15.7788 13.2074C15.8367 12.9164 15.9796 12.6491 16.1893 12.4393C16.3991 12.2296 16.6664 12.0867 16.9574 12.0288C17.2483 11.9709 17.5499 12.0006 17.824 12.1142C18.0981 12.2277 18.3324 12.42 18.4972 12.6666C18.662 12.9133 18.75 13.2033 18.75 13.5C18.75 13.8978 18.592 14.2794 18.3107 14.5607C18.0294 14.842 17.6478 15 17.25 15Z"
      fill="currentColor"
    />
  </svg>
)
