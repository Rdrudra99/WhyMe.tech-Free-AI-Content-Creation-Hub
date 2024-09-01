import React from "react";

const Example = () => {
  return (
    <header className="fixed bottom-0 w-full md:sticky md:top-0 z-[9999]">
      <div className="transition-all group hidden md:block">
        <div className="bg-ui-bg-subtle transition-all group-hover:bg-ui-bg-base group-hover:border-ui-border-base relative z-10 border-b border-transparent hidden md:block">
          <div className="max-w-content px-6 md:px-9 mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="hidden">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.9831 12.5499L38.9403 5.04596C34.6728 2.58468 29.4436 2.58468 25.1761 5.04596L12.0731 12.5499C7.86574 15.0111 5.2211 19.5735 5.2211 24.4361V39.5039C5.2211 44.4265 7.86574 48.9288 12.0731 51.3901L25.116 58.954C29.3835 61.4153 34.6127 61.4153 38.8802 58.954L51.923 51.3901C56.1905 48.9288 58.7751 44.4265 58.7751 39.5039V24.4361C58.8953 19.5735 56.2506 15.0111 51.9831 12.5499ZM32.0281 45.387C24.6352 45.387 18.6246 39.3838 18.6246 32C18.6246 24.6161 24.6352 18.613 32.0281 18.613C39.4211 18.613 45.4918 24.6161 45.4918 32C45.4918 39.3838 39.4812 45.387 32.0281 45.387Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <div className="hidden">
                <svg
                  width="265"
                  height="64"
                  viewBox="0 0 265 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M96.3298 46.382H90.023V29.9213C90.023 28.0861 89.5765 26.6442 88.6835 25.5955C87.7904 24.5094 86.5626 23.9663 84.9998 23.9663C83.2138 23.9663 81.8185 24.5655 80.8138 25.764C79.8464 26.9625 79.3627 28.6105 79.3627 30.7079V46.382H73V18.8539H79.2511V21.2697C80.9627 19.2097 83.3254 18.1798 86.3393 18.1798C89.7253 18.1798 92.2741 19.3783 93.9857 21.7753C96.1066 19.3783 98.953 18.1798 102.525 18.1798C106.097 18.1798 108.795 19.2285 110.618 21.3258C112.478 23.3858 113.409 26.4007 113.409 30.3708V46.382H107.046V29.9213C107.046 28.0861 106.599 26.6442 105.706 25.5955C104.813 24.5094 103.586 23.9663 102.023 23.9663C100.237 23.9663 98.8414 24.5843 97.8368 25.8202C96.8322 27.0187 96.3298 28.6479 96.3298 30.7079V46.382Z"
                    fill="black"
                  ></path>
                  <path
                    d="M143.804 32.2809L143.748 34.5281H125.05C125.199 36.588 125.925 38.2172 127.227 39.4157C128.529 40.6142 130.204 41.2135 132.25 41.2135C135.19 41.2135 137.534 39.9213 139.283 37.3371L143.58 41.382C140.678 45.1273 136.901 47 132.25 47C128.12 47 124.809 45.6891 122.316 43.0674C119.785 40.4082 118.52 36.9813 118.52 32.7865C118.52 28.7041 119.674 25.2397 121.981 22.3933C124.325 19.5843 127.432 18.1798 131.301 18.1798C135.432 18.1798 138.539 19.5655 140.622 22.3371C142.743 25.1086 143.804 28.4232 143.804 32.2809ZM131.357 24.0225C129.757 24.0225 128.436 24.5281 127.395 25.5393C126.39 26.5506 125.72 27.8427 125.385 29.4157H137.05C137.013 27.8801 136.511 26.6067 135.543 25.5955C134.576 24.5468 133.181 24.0225 131.357 24.0225Z"
                    fill="black"
                  ></path>
                  <path
                    d="M161.988 18.1798C165.039 18.1798 167.588 19.0787 169.634 20.8764V7H175.997V46.382H169.746V43.9101C167.811 45.97 165.225 47 161.988 47C158.118 47 154.918 45.6517 152.388 42.9551C149.895 40.221 148.648 36.7753 148.648 32.618C148.648 28.4607 149.895 25.015 152.388 22.2809C154.881 19.5468 158.081 18.1798 161.988 18.1798ZM167.792 26.3258C166.49 24.6779 164.704 23.8539 162.434 23.8539C160.165 23.8539 158.378 24.6779 157.076 26.3258C155.774 27.9738 155.123 30.0712 155.123 32.618C155.123 35.1648 155.774 37.2622 157.076 38.9101C158.378 40.5581 160.165 41.382 162.434 41.382C164.704 41.382 166.49 40.5581 167.792 38.9101C169.095 37.2622 169.746 35.1648 169.746 32.618C169.746 30.0712 169.095 27.9738 167.792 26.3258Z"
                    fill="black"
                  ></path>
                  <path
                    d="M182.444 18.8539H188.807V35.3146C188.807 37.1498 189.253 38.6105 190.146 39.6966C191.039 40.7453 192.304 41.2697 193.942 41.2697C195.69 41.2697 197.067 40.6517 198.072 39.4157C199.114 38.1423 199.634 36.4569 199.634 34.3595V18.8539H205.997V46.382H199.746V44.1348C197.997 46.0449 195.635 47 192.658 47C189.532 47 187.039 45.9326 185.179 43.7978C183.356 41.6255 182.444 38.6479 182.444 34.8652V18.8539Z"
                    fill="black"
                  ></path>
                  <path
                    d="M224.294 35.9888L220.666 35.0899C215.122 33.779 212.35 30.8764 212.35 26.382C212.35 23.9101 213.28 21.9251 215.141 20.427C217.001 18.9288 219.401 18.1798 222.341 18.1798C226.285 18.1798 229.727 19.7154 232.666 22.7865L228.592 27.1685C226.917 24.8464 224.778 23.6854 222.173 23.6854C221.057 23.6854 220.145 23.9476 219.439 24.4719C218.769 24.9588 218.434 25.5581 218.434 26.2697C218.434 27.5431 219.327 28.4045 221.113 28.8539L225.411 29.8652C230.992 31.1386 233.782 34.0037 233.782 38.4607C233.782 41.0075 232.815 43.0674 230.88 44.6404C228.983 46.2135 226.341 47 222.955 47C218.192 47 214.415 45.221 211.625 41.6629L215.643 37.5056C217.652 40.1648 220.257 41.4944 223.457 41.4944C226.248 41.4944 227.643 40.5581 227.643 38.6854C227.643 37.4869 226.527 36.588 224.294 35.9888Z"
                    fill="black"
                  ></path>
                  <path
                    d="M246.935 47C244.293 47 242.098 46.2509 240.349 44.7528C238.6 43.2172 237.726 41.176 237.726 38.6292C237.726 35.7079 238.768 33.4419 240.852 31.8315C242.935 30.221 245.689 29.4157 249.112 29.4157C250.823 29.4157 252.665 29.7341 254.637 30.3708V28.5169C254.637 27.1685 254.135 26.0824 253.13 25.2584C252.126 24.397 250.842 23.9663 249.279 23.9663C246.414 23.9663 244.256 25.2959 242.805 27.9551L238.507 23.9101C239.512 22.0749 240.982 20.6704 242.917 19.6966C244.889 18.6854 247.028 18.1798 249.335 18.1798C252.944 18.1798 255.791 19.0787 257.874 20.8764C259.958 22.6742 261 25.2397 261 28.573V46.382H254.749V44.2472C252.702 46.0824 250.098 47 246.935 47ZM244.089 38.1798C244.089 39.1161 244.442 39.8839 245.149 40.4831C245.893 41.0824 246.917 41.382 248.219 41.382C250.898 41.382 253.037 40.5955 254.637 39.0225V35.8764C252.628 35.1273 250.73 34.7528 248.944 34.7528C247.456 34.7528 246.265 35.0524 245.372 35.6517C244.517 36.2509 244.089 37.0936 244.089 38.1798Z"
                    fill="black"
                  ></path>
                  <path
                    d="M49.7749 12.7525L36.8679 5.32673C32.6449 2.89109 27.4702 2.89109 23.2471 5.32673L10.2806 12.7525C6.11709 15.1881 3.5 19.703 3.5 24.5148V39.4257C3.5 44.297 6.11709 48.7525 10.2806 51.1881L23.1877 58.6733C27.4107 61.1089 32.5854 61.1089 36.8084 58.6733L49.7155 51.1881C53.9385 48.7525 56.4961 44.297 56.4961 39.4257V24.5148C56.6151 19.703 53.998 15.1881 49.7749 12.7525ZM30.0278 45.2475C22.7118 45.2475 16.7639 39.3069 16.7639 32C16.7639 24.6931 22.7118 18.7525 30.0278 18.7525C37.3438 18.7525 43.3512 24.6931 43.3512 32C43.3512 39.3069 37.4032 45.2475 30.0278 45.2475Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <span data-state="closed">
                <a className="block py-[14px]" href="/">
                  <span className="text-theme-text-primary">
                    <span className="overflow-hidden">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2447 3.92183L12.1688 1.57686C10.8352 0.807712 9.20112 0.807712 7.86753 1.57686L3.77285 3.92183C2.45804 4.69098 1.63159 6.11673 1.63159 7.63627V12.345C1.63159 13.8833 2.45804 15.2903 3.77285 16.0594L7.84875 18.4231C9.18234 19.1923 10.8165 19.1923 12.15 18.4231L16.2259 16.0594C17.5595 15.2903 18.3672 13.8833 18.3672 12.345V7.63627C18.4048 6.11673 17.5783 4.69098 16.2447 3.92183ZM10.0088 14.1834C7.69849 14.1834 5.82019 12.3075 5.82019 10C5.82019 7.69255 7.69849 5.81657 10.0088 5.81657C12.3191 5.81657 14.2162 7.69255 14.2162 10C14.2162 12.3075 12.3379 14.1834 10.0088 14.1834Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </span>
              <nav>
                <ul data-sb-field-path=".menu.items" className="flex">
                  <li className="flex items-center" data-sb-field-path=".0">
                    <div>
                      <div className="py-1 px-3 text-ui-fg-subtle text-sm font-medium cursor-pointer transition-colors">
                        Product
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center" data-sb-field-path=".1">
                    <div>
                      <div className="py-1 px-3 text-ui-fg-subtle text-sm font-medium cursor-pointer transition-colors">
                        Solutions
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center" data-sb-field-path=".2">
                    <div>
                      <div className="py-1 px-3 text-ui-fg-subtle text-sm font-medium cursor-pointer transition-colors">
                        Developers
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center" data-sb-field-path=".3">
                    <div>
                      <div className="py-1 px-3 text-ui-fg-subtle text-sm font-medium cursor-pointer transition-colors">
                        Resources
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center" data-sb-field-path=".4">
                    <a
                      className="py-1 px-3 text-sm font-medium transition-colors text-miami"
                      href="/careers/"
                    >
                      Content &amp; Careers
                    </a>
                  </li>
                  <li className="flex items-center" data-sb-field-path=".5">
                    <a
                      className="py-1 px-3 text-ui-fg-subtle text-sm font-medium transition-colors"
                      href="/pricing/"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="py-[14px] flex gap-3 items-center">
              <a
                href="https://github.com/medusajs/medusa"
                target="_blank"
                rel="noreferrer"
                data-sb-field-path=".githubStars"
                className="transition-fg relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:text-ui-fg-disabled disabled:shadow-buttons-neutral disabled:after:hidden after:transition-fg after:absolute after:inset-0 after:content-[''] after:hidden text-ui-fg-base bg-ui-button-transparent hover:bg-ui-button-transparent-hover active:bg-ui-button-transparent-pressed focus-visible:shadow-buttons-neutral-focus focus-visible:bg-ui-bg-base disabled:!bg-transparent disabled:!shadow-none txt-compact-small-plus gap-x-1 px-2 py-1"
              >
                <span className="">
                  <span className="overflow-hidden">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 1.22217C5.0275 1.22217 1 5.24967 1 10.2222C1 14.2047 3.57625 17.5684 7.15375 18.7609C7.60375 18.8397 7.7725 18.5697 7.7725 18.3334C7.7725 18.1197 7.76125 17.4109 7.76125 16.6572C5.5 17.0734 4.915 16.1059 4.735 15.5997C4.63375 15.3409 4.195 14.5422 3.8125 14.3284C3.4975 14.1597 3.0475 13.7434 3.80125 13.7322C4.51 13.7209 5.01625 14.3847 5.185 14.6547C5.995 16.0159 7.28875 15.6334 7.80625 15.3972C7.885 14.8122 8.12125 14.4184 8.38 14.1934C6.3775 13.9684 4.285 13.1922 4.285 9.74967C4.285 8.77092 4.63375 7.96092 5.2075 7.33092C5.1175 7.10592 4.8025 6.18342 5.2975 4.94592C5.2975 4.94592 6.05125 4.70967 7.7725 5.86842C8.4925 5.66592 9.2575 5.56467 10.0225 5.56467C10.7875 5.56467 11.5525 5.66592 12.2725 5.86842C13.9938 4.69842 14.7475 4.94592 14.7475 4.94592C15.2425 6.18342 14.9275 7.10592 14.8375 7.33092C15.4113 7.96092 15.76 8.75967 15.76 9.74967C15.76 13.2034 13.6562 13.9684 11.6538 14.1934C11.98 14.4747 12.2613 15.0147 12.2613 15.8584C12.2613 17.0622 12.25 18.0297 12.25 18.3334C12.25 18.5697 12.4188 18.8509 12.8688 18.7609C16.4238 17.5684 19 14.1934 19 10.2222C19 5.24967 14.9725 1.22217 10 1.22217Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </span>
                <span>24.4k</span>
              </a>
              <ul data-sb-field-path=".secondaryLinks">
                <li data-sb-field-path=".0">
                  <a
                    href="https://docs.medusajs.com/usage/create-medusa-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="transition-fg relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:text-ui-fg-disabled disabled:shadow-buttons-neutral disabled:after:hidden after:transition-fg after:absolute after:inset-0 after:content-[''] shadow-buttons-inverted text-ui-fg-on-inverted bg-ui-button-inverted after:button-inverted-gradient hover:bg-ui-button-inverted-hover hover:after:button-inverted-hover-gradient active:bg-ui-button-inverted-pressed active:after:button-inverted-pressed-gradient focus-visible:!shadow-buttons-inverted-focus txt-compact-small-plus gap-x-1 px-2 py-1">
                      <span data-sb-field-path=".label">Get Started</span>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pb-4 gap-2 relative z-10 md:hidden">
        <button
          type="button"
          className="mobile-menu-button rounded-full gap-1.5 flex justify-center items-center"
        >
          <span className="">
            <span className="overflow-hidden">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.125 5H16.875M3.125 9.99994H16.875M3.125 15H16.875"
                  stroke="#A1A1AA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Example;
