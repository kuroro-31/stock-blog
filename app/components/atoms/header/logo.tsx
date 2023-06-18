/*
|--------------------------------------------------------------------------
| エラー画面
|--------------------------------------------------------------------------
*/
const Logo = () => {
  return (
    <svg
      width="170"
      height="30"
      viewBox="0 0 231 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.506 33.272C69.7153 33.272 67.9813 33 66.304 32.456C64.6493 31.8893 63.346 31.164 62.394 30.28L63.652 27.628C64.5587 28.444 65.7147 29.1127 67.12 29.634C68.548 30.1327 70.01 30.382 71.506 30.382C73.478 30.382 74.9513 30.0533 75.926 29.396C76.9007 28.716 77.388 27.8207 77.388 26.71C77.388 25.894 77.116 25.2367 76.572 24.738C76.0507 24.2167 75.3933 23.82 74.6 23.548C73.8293 23.276 72.73 22.97 71.302 22.63C69.5113 22.1993 68.0607 21.7687 66.95 21.338C65.862 20.9073 64.9213 20.25 64.128 19.366C63.3573 18.4593 62.972 17.2467 62.972 15.728C62.972 14.4587 63.3007 13.314 63.958 12.294C64.638 11.274 65.658 10.458 67.018 9.846C68.378 9.234 70.0667 8.928 72.084 8.928C73.4893 8.928 74.872 9.10933 76.232 9.472C77.592 9.83466 78.7593 10.356 79.734 11.036L78.612 13.756C77.6147 13.1213 76.5493 12.6453 75.416 12.328C74.2827 11.988 73.172 11.818 72.084 11.818C70.1573 11.818 68.7067 12.1693 67.732 12.872C66.78 13.5747 66.304 14.4813 66.304 15.592C66.304 16.408 66.576 17.0767 67.12 17.598C67.664 18.0967 68.3327 18.4933 69.126 18.788C69.942 19.06 71.0413 19.3547 72.424 19.672C74.2147 20.1027 75.654 20.5333 76.742 20.964C77.83 21.3947 78.7593 22.052 79.53 22.936C80.3233 23.82 80.72 25.01 80.72 26.506C80.72 27.7527 80.38 28.8973 79.7 29.94C79.02 30.96 77.9887 31.776 76.606 32.388C75.2233 32.9773 73.5233 33.272 71.506 33.272ZM94.6972 31.946C94.2212 32.354 93.6319 32.6713 92.9292 32.898C92.2265 33.102 91.5012 33.204 90.7532 33.204C88.9399 33.204 87.5345 32.7167 86.5372 31.742C85.5399 30.7673 85.0412 29.3733 85.0412 27.56V11.036H88.3052V14.98H93.4732V17.666H88.3052V27.424C88.3052 28.3987 88.5432 29.1467 89.0192 29.668C89.5179 30.1893 90.2205 30.45 91.1272 30.45C92.1245 30.45 92.9745 30.1667 93.6772 29.6L94.6972 31.946ZM115.028 14.98V33H111.9V30.144C111.174 31.1413 110.256 31.9007 109.146 32.422C108.035 32.9433 106.811 33.204 105.474 33.204C103.728 33.204 102.164 32.8187 100.782 32.048C99.3989 31.2773 98.3109 30.2007 97.5176 28.818C96.7469 27.4127 96.3616 25.8033 96.3616 23.99C96.3616 22.1767 96.7469 20.5787 97.5176 19.196C98.3109 17.8133 99.3989 16.7367 100.782 15.966C102.164 15.1953 103.728 14.81 105.474 14.81C106.766 14.81 107.956 15.0593 109.044 15.558C110.132 16.034 111.038 16.748 111.764 17.7V14.98H115.028ZM105.746 30.348C106.879 30.348 107.91 30.0873 108.84 29.566C109.769 29.022 110.494 28.274 111.016 27.322C111.537 26.3473 111.798 25.2367 111.798 23.99C111.798 22.7433 111.537 21.644 111.016 20.692C110.494 19.7173 109.769 18.9693 108.84 18.448C107.91 17.9267 106.879 17.666 105.746 17.666C104.59 17.666 103.547 17.9267 102.618 18.448C101.711 18.9693 100.986 19.7173 100.442 20.692C99.9203 21.644 99.6596 22.7433 99.6596 23.99C99.6596 25.2367 99.9203 26.3473 100.442 27.322C100.986 28.274 101.711 29.022 102.618 29.566C103.547 30.0873 104.59 30.348 105.746 30.348ZM124.331 18.006C124.898 16.9633 125.737 16.17 126.847 15.626C127.958 15.082 129.307 14.81 130.893 14.81V17.972C130.712 17.9493 130.463 17.938 130.145 17.938C128.377 17.938 126.983 18.4707 125.963 19.536C124.966 20.5787 124.467 22.0747 124.467 24.024V33H121.203V14.98H124.331V18.006ZM144.402 31.946C143.926 32.354 143.337 32.6713 142.634 32.898C141.932 33.102 141.206 33.204 140.458 33.204C138.645 33.204 137.24 32.7167 136.242 31.742C135.245 30.7673 134.746 29.3733 134.746 27.56V11.036H138.01V14.98H143.178V17.666H138.01V27.424C138.01 28.3987 138.248 29.1467 138.724 29.668C139.223 30.1893 139.926 30.45 140.832 30.45C141.83 30.45 142.68 30.1667 143.382 29.6L144.402 31.946ZM151.458 18.006C152.025 16.9633 152.864 16.17 153.974 15.626C155.085 15.082 156.434 14.81 158.02 14.81V17.972C157.839 17.9493 157.59 17.938 157.272 17.938C155.504 17.938 154.11 18.4707 153.09 19.536C152.093 20.5787 151.594 22.0747 151.594 24.024V33H148.33V14.98H151.458V18.006ZM178.877 14.98V33H175.749V30.144C175.024 31.1413 174.106 31.9007 172.995 32.422C171.885 32.9433 170.661 33.204 169.323 33.204C167.578 33.204 166.014 32.8187 164.631 32.048C163.249 31.2773 162.161 30.2007 161.367 28.818C160.597 27.4127 160.211 25.8033 160.211 23.99C160.211 22.1767 160.597 20.5787 161.367 19.196C162.161 17.8133 163.249 16.7367 164.631 15.966C166.014 15.1953 167.578 14.81 169.323 14.81C170.615 14.81 171.805 15.0593 172.893 15.558C173.981 16.034 174.888 16.748 175.613 17.7V14.98H178.877ZM169.595 30.348C170.729 30.348 171.76 30.0873 172.689 29.566C173.619 29.022 174.344 28.274 174.865 27.322C175.387 26.3473 175.647 25.2367 175.647 23.99C175.647 22.7433 175.387 21.644 174.865 20.692C174.344 19.7173 173.619 18.9693 172.689 18.448C171.76 17.9267 170.729 17.666 169.595 17.666C168.439 17.666 167.397 17.9267 166.467 18.448C165.561 18.9693 164.835 19.7173 164.291 20.692C163.77 21.644 163.509 22.7433 163.509 23.99C163.509 25.2367 163.77 26.3473 164.291 27.322C164.835 28.274 165.561 29.022 166.467 29.566C167.397 30.0873 168.439 30.348 169.595 30.348ZM202.053 7.772V33H198.925V30.144C198.2 31.1413 197.282 31.9007 196.171 32.422C195.06 32.9433 193.836 33.204 192.499 33.204C190.754 33.204 189.19 32.8187 187.807 32.048C186.424 31.2773 185.336 30.2007 184.543 28.818C183.772 27.4127 183.387 25.8033 183.387 23.99C183.387 22.1767 183.772 20.5787 184.543 19.196C185.336 17.8133 186.424 16.7367 187.807 15.966C189.19 15.1953 190.754 14.81 192.499 14.81C193.791 14.81 194.981 15.0593 196.069 15.558C197.157 16.034 198.064 16.748 198.789 17.7V7.772H202.053ZM192.771 30.348C193.904 30.348 194.936 30.0873 195.865 29.566C196.794 29.022 197.52 28.274 198.041 27.322C198.562 26.3473 198.823 25.2367 198.823 23.99C198.823 22.7433 198.562 21.644 198.041 20.692C197.52 19.7173 196.794 18.9693 195.865 18.448C194.936 17.9267 193.904 17.666 192.771 17.666C191.615 17.666 190.572 17.9267 189.643 18.448C188.736 18.9693 188.011 19.7173 187.467 20.692C186.946 21.644 186.685 22.7433 186.685 23.99C186.685 25.2367 186.946 26.3473 187.467 27.322C188.011 28.274 188.736 29.022 189.643 29.566C190.572 30.0873 191.615 30.348 192.771 30.348ZM216.355 30.348C218.508 30.348 220.242 29.6227 221.557 28.172L223.325 30.28C222.531 31.232 221.523 31.9573 220.299 32.456C219.097 32.9547 217.749 33.204 216.253 33.204C214.349 33.204 212.66 32.8187 211.187 32.048C209.713 31.2547 208.569 30.1553 207.753 28.75C206.959 27.3447 206.563 25.758 206.563 23.99C206.563 22.2447 206.948 20.6693 207.719 19.264C208.512 17.8587 209.589 16.7707 210.949 16C212.331 15.2067 213.884 14.81 215.607 14.81C217.239 14.81 218.723 15.184 220.061 15.932C221.398 16.6573 222.463 17.6887 223.257 19.026C224.05 20.3633 224.458 21.9047 224.481 23.65L210.167 26.438C210.62 27.6847 211.379 28.648 212.445 29.328C213.533 30.008 214.836 30.348 216.355 30.348ZM215.607 17.564C214.473 17.564 213.453 17.8247 212.547 18.346C211.663 18.8673 210.971 19.604 210.473 20.556C209.974 21.4853 209.725 22.5733 209.725 23.82V24.16L221.251 21.984C220.956 20.6693 220.299 19.604 219.279 18.788C218.259 17.972 217.035 17.564 215.607 17.564Z"
        fill="black"
      />
      <mask
        id="mask0_1404_3587"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="51"
        height="40"
      >
        <path
          d="M7.96323 2.16361C10.0406 7.87636 10.5599 13.8199 10.5599 17.2245C2.66595 12.2388 0.173114 16.9937 0 19.9943C1.73114 29.1693 10.5599 23.1104 10.5599 23.1104C10.0406 31.7661 9.11732 33.8434 7.96323 37.4788C11.01 39.0022 18.8117 39.7293 22.3317 39.9024C17.7615 33.1163 21.9854 30.7274 25.2746 30.3811C33.2378 31.5929 30.468 38.6906 28.0444 39.9024C32.4761 40.4564 39.8161 38.5175 42.9322 37.4788C41.1318 34.5705 40.3932 26.6303 40.3355 23.1104C47.9525 27.7844 50.6069 22.9373 50.7223 19.9943C50.1683 12.1003 43.6823 14.6278 40.5086 16.8783C39.8161 12.3081 41.8358 5.16425 42.9322 2.16361C38.7775 -0.0522397 31.5067 -0.144567 28.3906 0.0862511C33.584 5.799 28.3906 9.66809 25.2746 9.43439C18.35 8.91505 20.2543 1.9905 22.5048 0.0862511C15.9265 0.259365 10.0983 1.35575 7.96323 2.16361Z"
          fill="#D7CCBE"
        />
      </mask>
      <g mask="url(#mask0_1404_3587)">
        <rect x="-20" y="-15" width="88" height="76" fill="#9DA8AD" />
      </g>
    </svg>
  );
};

export default Logo;
