import './myWallet.scss'
import ButtonMUI from 'components/ButtonMUI'


const MyWallet = () => {
    return (
        <div>
            <div className="wallet">
                <div className="wallet-group wallet-group--balance">
                    <div className="wallet-group-head">
                        <h2 className="wallet-group-title">
                            Your Cryptowallet
                        </h2>
                        <ButtonMUI outlinedButton>add cryptowallet...</ButtonMUI>
                    </div>
                    <div className="wallet-group-content">
                        <div className="wallet-addresses">
                            <div className="wallet-address">
                                <div className="wallet-address-title">
                                    Total balance (0x43Bc...q21)
                                </div>
                                <div className="wallet-address-value">
                                    <span>1200,67</span> USD
                                </div>
                            </div>
                            <div className="wallet-address">
                                <div className="wallet-address-title">
                                    Total balance (0x43Bc...q21)
                                </div>
                                <div className="wallet-address-value">
                                    <span>1200,67</span> USD
                                </div>
                            </div>
                            <div className="wallet-address">
                                <div className="wallet-address-title">
                                    Total balance (0x43Bc...q21)
                                </div>
                                <div className="wallet-address-value">
                                    <span>1200,67</span> USD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wallet-group wallet-group--cards">
                    <div className="wallet-group-head">
                        <h2 className="wallet-group-title">
                            You Fiat Cards
                        </h2>
                        <ButtonMUI outlinedButton>+ ADD CARD</ButtonMUI>

                    </div>
                    <div className="wallet-group-content">
                        <div className="some-slider">
                            <div className="slide">
                                <div className="wallet-card active">
                                    <div className="wallet-card-logo">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 0H0V21H21V0ZM1.52817 1.52817H19.4718V19.4718H1.52817V1.52817ZM2.02113 2.02113H18.9789V18.9789H2.02113V2.02113ZM13.8979 12.874L11.6638 10.6401L11.6638 12.5084L13.8979 14.7501V14.7502L15.2323 16.0891V16.089L15.2324 16.0891L15.2323 16.0771V4.91089H13.8979V12.874ZM9.33637 10.3599L7.10229 8.12601V16.0891H5.7679V4.92291L5.7678 4.91091L5.7679 4.91099V4.91095L7.10229 6.24982V6.24997L9.33642 8.49169L9.33637 10.3599Z" fill="currentColor"/>
                                        </svg>

                                    </div>
                                    <div className="wallet-card-check">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12.5" cy="12.5" r="12.5" fill="#FEFEFE"/>
                                            <path d="M10.3292 15.2293L6.85423 11.7543L5.6709 12.9293L10.3292 17.5876L20.3292 7.5876L19.1542 6.4126L10.3292 15.2293Z" fill="#2FA451"/>
                                        </svg>
                                    </div>
                                    <div className="wallet-card-balance">
                                        <span>670</span> USD
                                    </div>
                                    <div className="wallet-card-details">
                                        <div className="wallet-card-number">
                                            5495 7331 2345 5678
                                        </div>
                                        <div className="wallet-card-year">
                                            04/25
                                        </div>
                                    </div>
                                    <div className="wallet-card-system">
                                        <svg width="58" height="37" viewBox="0 0 58 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1359 32.3219C26.106 34.9783 22.1755 36.5819 17.8807 36.5819C8.29751 36.5819 0.528809 28.5979 0.528809 18.7492C0.528809 8.90048 8.29751 0.916504 17.8807 0.916504C22.1755 0.916504 26.106 2.52011 29.1359 5.1765C32.1659 2.52011 36.0964 0.916504 40.3912 0.916504C49.9744 0.916504 57.7431 8.90048 57.7431 18.7492C57.7431 28.5979 49.9744 36.5819 40.3912 36.5819C36.0964 36.5819 32.1659 34.9783 29.1359 32.3219Z" fill="#ED0006"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1357 32.3219C32.8666 29.0511 35.2324 24.1841 35.2324 18.7492C35.2324 13.3144 32.8666 8.44734 29.1357 5.1765C32.1657 2.52011 36.0962 0.916504 40.391 0.916504C49.9742 0.916504 57.7429 8.90048 57.7429 18.7492C57.7429 28.5979 49.9742 36.5819 40.391 36.5819C36.0962 36.5819 32.1657 34.9783 29.1357 32.3219Z" fill="#F9A000"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1361 32.3221C32.8669 29.0512 35.2326 24.1842 35.2326 18.7494C35.2326 13.3146 32.8669 8.4476 29.1361 5.17676C25.4052 8.4476 23.0396 13.3146 23.0396 18.7494C23.0396 24.1842 25.4052 29.0512 29.1361 32.3221Z" fill="#FF5E00"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="wallet-card">
                                    <div className="wallet-card-logo">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 0H0V21H21V0ZM1.52817 1.52817H19.4718V19.4718H1.52817V1.52817ZM2.02113 2.02113H18.9789V18.9789H2.02113V2.02113ZM13.8979 12.874L11.6638 10.6401L11.6638 12.5084L13.8979 14.7501V14.7502L15.2323 16.0891V16.089L15.2324 16.0891L15.2323 16.0771V4.91089H13.8979V12.874ZM9.33637 10.3599L7.10229 8.12601V16.0891H5.7679V4.92291L5.7678 4.91091L5.7679 4.91099V4.91095L7.10229 6.24982V6.24997L9.33642 8.49169L9.33637 10.3599Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <div className="wallet-card-check"></div>
                                    <div className="wallet-card-balance">
                                        <span>1670</span> USD
                                    </div>
                                    <div className="wallet-card-details">
                                        <div className="wallet-card-number">
                                            5495 7331 2345 5678
                                        </div>
                                        <div className="wallet-card-year">
                                            04/25
                                        </div>
                                    </div>
                                    <div className="wallet-card-system">
                                        <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2505 15.5165H8.00987L4.82991 3.38475C4.67897 2.82669 4.3585 2.33333 3.88708 2.1008C2.71062 1.51646 1.41424 1.05141 0 0.81686V0.349787H6.83134C7.77417 0.349787 8.48129 1.05141 8.59914 1.86626L10.2491 10.6173L14.4877 0.349787H18.6104L12.2505 15.5165ZM20.9675 15.5165H16.9626L20.2604 0.349787H24.2653L20.9675 15.5165ZM29.4467 4.55143C29.5646 3.73456 30.2717 3.26748 31.0967 3.26748C32.3931 3.15021 33.8052 3.38476 34.9838 3.96708L35.6909 0.701619C34.5123 0.234547 33.216 0 32.0395 0C28.1524 0 25.3239 2.10081 25.3239 5.01648C25.3239 7.23457 27.3274 8.39921 28.7417 9.10083C30.2717 9.80043 30.861 10.2675 30.7431 10.9671C30.7431 12.0165 29.5646 12.4836 28.3881 12.4836C26.9739 12.4836 25.5596 12.1338 24.2653 11.5494L23.5582 14.8169C24.9724 15.3992 26.5025 15.6338 27.9167 15.6338C32.2752 15.749 34.9838 13.6502 34.9838 10.5C34.9838 6.53295 29.4467 6.30042 29.4467 4.55143ZM49 15.5165L45.82 0.349787H42.4044C41.6972 0.349787 40.9901 0.81686 40.7544 1.51646L34.8659 15.5165H38.9887L39.8116 13.3004H44.8772L45.3486 15.5165H49ZM42.9936 4.43416L44.1701 10.1502H40.8723L42.9936 4.43416Z" fill="#8F90A6"/>
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="wallet-group wallet-group--limits">
                    <div className="wallet-group-head">
                        <h2 className="wallet-group-title">
                            Limits
                        </h2>
                    </div>
                    <div className="wallet-group-content">
                        <div className="wallet-limits">
                            <div className="wallet-limit">
                                <div className="wallet-limit-chart">
                                    <svg width="212" height="210" viewBox="0 0 212 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M212 105C212 162.99 164.542 210 106 210C47.4578 210 0 162.99 0 105C0 47.0101 47.4578 0 106 0C164.542 0 212 47.0101 212 105ZM25.6469 105C25.6469 148.959 61.6222 184.595 106 184.595C150.378 184.595 186.353 148.959 186.353 105C186.353 61.0408 150.378 25.4049 106 25.4049C61.6222 25.4049 25.6469 61.0408 25.6469 105Z" fill="#EBEBF3"/>
                                        <path d="M212 105C212 131.129 202.165 156.319 184.417 175.648C166.669 194.978 142.283 207.059 116.024 209.529C89.7647 212 63.5187 204.684 42.414 189.01C21.3093 173.337 6.86239 150.431 1.89588 124.77C-3.07063 99.1086 1.80012 72.5348 15.5565 50.2407C29.3128 27.9466 50.9664 11.534 76.2864 4.20971C101.606 -3.11461 128.774 -0.824426 152.48 10.6328C176.187 22.0901 194.729 41.8911 204.484 66.1673L180.656 75.5629C173.261 57.1604 159.205 42.1502 141.234 33.4651C123.264 24.78 102.669 23.0439 83.4757 28.5961C64.2819 34.1483 47.8674 46.5898 37.4394 63.4898C27.0114 80.3898 23.3192 100.534 27.084 119.987C30.8489 139.439 41.8004 156.802 57.7987 168.684C73.7971 180.565 93.6928 186.111 113.599 184.238C133.505 182.365 151.99 173.208 165.444 158.555C178.898 143.902 186.353 124.807 186.353 105H212Z" fill="#1994D9"/>
                                        <path d="M72.51 110.642C72.51 112.501 71.898 114.031 70.674 115.232C69.45 116.433 67.8633 117.147 65.914 117.374V120.4H63.772V117.408C61.9133 117.272 60.3267 116.762 59.012 115.878C57.72 114.994 56.7793 113.804 56.19 112.308L58.91 110.744C59.6807 112.852 61.3013 114.042 63.772 114.314V106.086C62.752 105.723 61.9247 105.395 61.29 105.1C60.678 104.783 60.032 104.363 59.352 103.842C58.672 103.321 58.162 102.686 57.822 101.938C57.5047 101.167 57.346 100.283 57.346 99.286C57.346 97.45 57.958 95.954 59.182 94.798C60.406 93.642 61.936 92.9733 63.772 92.792V89.8H65.914V92.826C67.274 93.0073 68.4867 93.4833 69.552 94.254C70.6173 95.0247 71.4447 96.0673 72.034 97.382L69.382 98.878C68.7247 97.2233 67.5687 96.2373 65.914 95.92V103.74C66.9567 104.125 67.784 104.465 68.396 104.76C69.008 105.055 69.6767 105.474 70.402 106.018C71.1273 106.539 71.66 107.185 72 107.956C72.34 108.727 72.51 109.622 72.51 110.642ZM60.474 99.286C60.474 100.147 60.7347 100.85 61.256 101.394C61.7773 101.938 62.616 102.448 63.772 102.924V95.886C62.7747 96.022 61.97 96.396 61.358 97.008C60.7687 97.5973 60.474 98.3567 60.474 99.286ZM65.914 114.246C67.002 114.087 67.8407 113.691 68.43 113.056C69.042 112.399 69.348 111.605 69.348 110.676C69.348 109.747 69.0647 109.01 68.498 108.466C67.954 107.899 67.0927 107.367 65.914 106.868V114.246ZM75.0024 117V114.416L83.4004 105.848C85.6444 103.604 86.7664 101.677 86.7664 100.068C86.7664 98.7307 86.3584 97.688 85.5424 96.94C84.7264 96.192 83.729 95.818 82.5504 95.818C80.3064 95.818 78.6744 96.8833 77.6544 99.014L75.0024 97.45C75.7504 95.9087 76.7817 94.7413 78.0964 93.948C79.4337 93.1547 80.907 92.758 82.5164 92.758C84.511 92.758 86.245 93.4153 87.7184 94.73C89.1917 96.0447 89.9284 97.8127 89.9284 100.034C89.9284 102.437 88.5117 105.055 85.6784 107.888L79.5924 113.94H90.3704V117H75.0024ZM108.937 114.076C107.328 116.32 105.072 117.442 102.171 117.442C99.2697 117.442 97.0143 116.32 95.405 114.076C93.7957 111.832 92.991 108.84 92.991 105.1C92.991 101.36 93.7957 98.368 95.405 96.124C97.0143 93.88 99.2697 92.758 102.171 92.758C105.072 92.758 107.328 93.88 108.937 96.124C110.546 98.368 111.351 101.36 111.351 105.1C111.351 108.84 110.546 111.832 108.937 114.076ZM97.717 111.934C98.7597 113.543 100.244 114.348 102.171 114.348C104.098 114.348 105.582 113.543 106.625 111.934C107.69 110.325 108.223 108.047 108.223 105.1C108.223 102.153 107.69 99.8753 106.625 98.266C105.582 96.634 104.098 95.818 102.171 95.818C100.244 95.818 98.7597 96.6227 97.717 98.232C96.6743 99.8413 96.153 102.131 96.153 105.1C96.153 108.047 96.6743 110.325 97.717 111.934ZM130.438 114.076C128.829 116.32 126.573 117.442 123.672 117.442C120.771 117.442 118.515 116.32 116.906 114.076C115.297 111.832 114.492 108.84 114.492 105.1C114.492 101.36 115.297 98.368 116.906 96.124C118.515 93.88 120.771 92.758 123.672 92.758C126.573 92.758 128.829 93.88 130.438 96.124C132.047 98.368 132.852 101.36 132.852 105.1C132.852 108.84 132.047 111.832 130.438 114.076ZM119.218 111.934C120.261 113.543 121.745 114.348 123.672 114.348C125.599 114.348 127.083 113.543 128.126 111.934C129.191 110.325 129.724 108.047 129.724 105.1C129.724 102.153 129.191 99.8753 128.126 98.266C127.083 96.634 125.599 95.818 123.672 95.818C121.745 95.818 120.261 96.6227 119.218 98.232C118.175 99.8413 117.654 102.131 117.654 105.1C117.654 108.047 118.175 110.325 119.218 111.934ZM151.939 114.076C150.33 116.32 148.074 117.442 145.173 117.442C142.272 117.442 140.016 116.32 138.407 114.076C136.798 111.832 135.993 108.84 135.993 105.1C135.993 101.36 136.798 98.368 138.407 96.124C140.016 93.88 142.272 92.758 145.173 92.758C148.074 92.758 150.33 93.88 151.939 96.124C153.548 98.368 154.353 101.36 154.353 105.1C154.353 108.84 153.548 111.832 151.939 114.076ZM140.719 111.934C141.762 113.543 143.246 114.348 145.173 114.348C147.1 114.348 148.584 113.543 149.627 111.934C150.692 110.325 151.225 108.047 151.225 105.1C151.225 102.153 150.692 99.8753 149.627 98.266C148.584 96.634 147.1 95.818 145.173 95.818C143.246 95.818 141.762 96.6227 140.719 98.232C139.676 99.8413 139.155 102.131 139.155 105.1C139.155 108.047 139.676 110.325 140.719 111.934Z" fill="#1994D9"/>
                                    </svg>

                                </div>
                                <div className="wallet-limit-title">
                                    Credit limits
                                </div>
                                <div className="wallet-limit-value">
                                    <span>$1750</span>/$2000
                                </div>
                            </div>
                            <div className="wallet-limit">
                                <div className="wallet-limit-chart">
                                    <svg width="212" height="210" viewBox="0 0 212 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M212 105C212 162.99 164.542 210 106 210C47.4578 210 0 162.99 0 105C0 47.0101 47.4578 0 106 0C164.542 0 212 47.0101 212 105ZM25.6469 105C25.6469 148.959 61.6222 184.595 106 184.595C150.378 184.595 186.353 148.959 186.353 105C186.353 61.0408 150.378 25.4049 106 25.4049C61.6222 25.4049 25.6469 61.0408 25.6469 105Z" fill="#EBEBF3"/>
                                        <path d="M212 105C212 131.129 202.165 156.319 184.417 175.648C166.669 194.978 142.283 207.059 116.024 209.529C89.7647 212 63.5187 204.684 42.414 189.01C21.3093 173.337 6.86239 150.431 1.89588 124.77C-3.07063 99.1086 1.80012 72.5348 15.5565 50.2407C29.3128 27.9466 50.9664 11.534 76.2864 4.20971C101.606 -3.11461 128.774 -0.824426 152.48 10.6328C176.187 22.0901 194.729 41.8911 204.484 66.1673L180.656 75.5629C173.261 57.1604 159.205 42.1502 141.234 33.4651C123.264 24.78 102.669 23.0439 83.4757 28.5961C64.2819 34.1483 47.8674 46.5898 37.4394 63.4898C27.0114 80.3898 23.3192 100.534 27.084 119.987C30.8489 139.439 41.8004 156.802 57.7987 168.684C73.7971 180.565 93.6928 186.111 113.599 184.238C133.505 182.365 151.99 173.208 165.444 158.555C178.898 143.902 186.353 124.807 186.353 105H212Z" fill="#1994D9"/>
                                        <path d="M72.51 110.642C72.51 112.501 71.898 114.031 70.674 115.232C69.45 116.433 67.8633 117.147 65.914 117.374V120.4H63.772V117.408C61.9133 117.272 60.3267 116.762 59.012 115.878C57.72 114.994 56.7793 113.804 56.19 112.308L58.91 110.744C59.6807 112.852 61.3013 114.042 63.772 114.314V106.086C62.752 105.723 61.9247 105.395 61.29 105.1C60.678 104.783 60.032 104.363 59.352 103.842C58.672 103.321 58.162 102.686 57.822 101.938C57.5047 101.167 57.346 100.283 57.346 99.286C57.346 97.45 57.958 95.954 59.182 94.798C60.406 93.642 61.936 92.9733 63.772 92.792V89.8H65.914V92.826C67.274 93.0073 68.4867 93.4833 69.552 94.254C70.6173 95.0247 71.4447 96.0673 72.034 97.382L69.382 98.878C68.7247 97.2233 67.5687 96.2373 65.914 95.92V103.74C66.9567 104.125 67.784 104.465 68.396 104.76C69.008 105.055 69.6767 105.474 70.402 106.018C71.1273 106.539 71.66 107.185 72 107.956C72.34 108.727 72.51 109.622 72.51 110.642ZM60.474 99.286C60.474 100.147 60.7347 100.85 61.256 101.394C61.7773 101.938 62.616 102.448 63.772 102.924V95.886C62.7747 96.022 61.97 96.396 61.358 97.008C60.7687 97.5973 60.474 98.3567 60.474 99.286ZM65.914 114.246C67.002 114.087 67.8407 113.691 68.43 113.056C69.042 112.399 69.348 111.605 69.348 110.676C69.348 109.747 69.0647 109.01 68.498 108.466C67.954 107.899 67.0927 107.367 65.914 106.868V114.246ZM75.0024 117V114.416L83.4004 105.848C85.6444 103.604 86.7664 101.677 86.7664 100.068C86.7664 98.7307 86.3584 97.688 85.5424 96.94C84.7264 96.192 83.729 95.818 82.5504 95.818C80.3064 95.818 78.6744 96.8833 77.6544 99.014L75.0024 97.45C75.7504 95.9087 76.7817 94.7413 78.0964 93.948C79.4337 93.1547 80.907 92.758 82.5164 92.758C84.511 92.758 86.245 93.4153 87.7184 94.73C89.1917 96.0447 89.9284 97.8127 89.9284 100.034C89.9284 102.437 88.5117 105.055 85.6784 107.888L79.5924 113.94H90.3704V117H75.0024ZM108.937 114.076C107.328 116.32 105.072 117.442 102.171 117.442C99.2697 117.442 97.0143 116.32 95.405 114.076C93.7957 111.832 92.991 108.84 92.991 105.1C92.991 101.36 93.7957 98.368 95.405 96.124C97.0143 93.88 99.2697 92.758 102.171 92.758C105.072 92.758 107.328 93.88 108.937 96.124C110.546 98.368 111.351 101.36 111.351 105.1C111.351 108.84 110.546 111.832 108.937 114.076ZM97.717 111.934C98.7597 113.543 100.244 114.348 102.171 114.348C104.098 114.348 105.582 113.543 106.625 111.934C107.69 110.325 108.223 108.047 108.223 105.1C108.223 102.153 107.69 99.8753 106.625 98.266C105.582 96.634 104.098 95.818 102.171 95.818C100.244 95.818 98.7597 96.6227 97.717 98.232C96.6743 99.8413 96.153 102.131 96.153 105.1C96.153 108.047 96.6743 110.325 97.717 111.934ZM130.438 114.076C128.829 116.32 126.573 117.442 123.672 117.442C120.771 117.442 118.515 116.32 116.906 114.076C115.297 111.832 114.492 108.84 114.492 105.1C114.492 101.36 115.297 98.368 116.906 96.124C118.515 93.88 120.771 92.758 123.672 92.758C126.573 92.758 128.829 93.88 130.438 96.124C132.047 98.368 132.852 101.36 132.852 105.1C132.852 108.84 132.047 111.832 130.438 114.076ZM119.218 111.934C120.261 113.543 121.745 114.348 123.672 114.348C125.599 114.348 127.083 113.543 128.126 111.934C129.191 110.325 129.724 108.047 129.724 105.1C129.724 102.153 129.191 99.8753 128.126 98.266C127.083 96.634 125.599 95.818 123.672 95.818C121.745 95.818 120.261 96.6227 119.218 98.232C118.175 99.8413 117.654 102.131 117.654 105.1C117.654 108.047 118.175 110.325 119.218 111.934ZM151.939 114.076C150.33 116.32 148.074 117.442 145.173 117.442C142.272 117.442 140.016 116.32 138.407 114.076C136.798 111.832 135.993 108.84 135.993 105.1C135.993 101.36 136.798 98.368 138.407 96.124C140.016 93.88 142.272 92.758 145.173 92.758C148.074 92.758 150.33 93.88 151.939 96.124C153.548 98.368 154.353 101.36 154.353 105.1C154.353 108.84 153.548 111.832 151.939 114.076ZM140.719 111.934C141.762 113.543 143.246 114.348 145.173 114.348C147.1 114.348 148.584 113.543 149.627 111.934C150.692 110.325 151.225 108.047 151.225 105.1C151.225 102.153 150.692 99.8753 149.627 98.266C148.584 96.634 147.1 95.818 145.173 95.818C143.246 95.818 141.762 96.6227 140.719 98.232C139.676 99.8413 139.155 102.131 139.155 105.1C139.155 108.047 139.676 110.325 140.719 111.934Z" fill="#1994D9"/>
                                    </svg>
                                </div>
                                <div className="wallet-limit-title">
                                    Credit limits
                                </div>
                                <div className="wallet-limit-value">
                                    <span>$1750</span>/$2000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wallet-group wallet-group--activity">
                    <div className="wallet-group-head">
                        <h2 className="wallet-group-title">
                            Recent activities
                        </h2>
                        <ButtonMUI outlinedButton>View all transfer</ButtonMUI>
                    </div>
                    <div className="wallet-group-content">
                        <div className="wallet-activity">
                            <div className="wallet-activity-inner">
                                <table className='wallet-activity-table'>
                                    <thead>
                                        <tr>
                                            <th>
                                                Today
                                            </th>
                                            <th>
                                                Number
                                            </th>
                                            <th>
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Payment of dividends
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            Example company, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> - </td>
                                            <td>
                                                <span className='green'>
                                                    +$10,55
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Replenishment of a brokerage account
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            MBI, brokerage account, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> - </td>
                                            <td>
                                                <span>
                                                    -$230,49
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Purchase of Example Bank shares
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            MBI, brokerage account, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>8pcs</td>
                                            <td>
                                                <span className='green'>+$1200,38</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Payment of dividends
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            Example company, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> - </td>
                                            <td>
                                                <span className='green'>
                                                    +$10,55
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Replenishment of a brokerage account
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            MBI, brokerage account, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> - </td>
                                            <td>
                                                <span>
                                                    -$230,49
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Purchase of Example Bank shares
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            MBI, brokerage account, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>8pcs</td>
                                            <td>
                                                <span className='green'>+$1200,38</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className='wallet-activity-table'>
                                    <thead>
                                        <tr>
                                            <th>
                                                Yesterday
                                            </th>
                                            <th>
                                                Number
                                            </th>
                                            <th>
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Payment of dividends
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            Example company, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> - </td>
                                            <td>
                                                <span className='green'>
                                                    +$10,55
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Replenishment of a brokerage account
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            MBI, brokerage account, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> - </td>
                                            <td>
                                                <span>
                                                    -$230,49
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Purchase of Example Bank shares
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            MBI, brokerage account, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>8pcs</td>
                                            <td>
                                                <span className='green'>+$1200,38</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Payment of dividends
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            Example company, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> - </td>
                                            <td>
                                                <span className='green'>
                                                    +$10,55
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Replenishment of a brokerage account
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            MBI, brokerage account, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> - </td>
                                            <td>
                                                <span>
                                                    -$230,49
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-item">
                                                    <div className="activity-item-time">
                                                        6:15
                                                    </div>
                                                    <div className="activity-item-logo">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                                                    </div>
                                                    <div className="activity-item-info">
                                                        <div className="activity-item-title">
                                                            Purchase of Example Bank shares
                                                        </div>
                                                        <div className="activity-item-descr">
                                                            MBI, brokerage account, $
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>8pcs</td>
                                            <td>
                                                <span className='green'>+$1200,38</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wallet-group wallet-group--payments-stats">
                    <div className="wallet-group-head">
                        <h2 className="wallet-group-title">
                            Int.Payments
                        </h2>
                    </div>
                    <div className="wallet-group-content">
                        <div className="wallet-payments-stats">
                            <div className="stat-item">
                                <div className="stat-item-title">
                                    Awaiting
                                </div>
                                <div className="stat-item-value">
                                    12
                                </div>
                            </div>
                            <hr />
                            <div className="stat-item">
                                <div className="stat-item-title">
                                    In progress
                                </div>
                                <div className="stat-item-value">
                                    5
                                </div>
                            </div>
                            <hr />
                            <div className="stat-item">
                                <div className="stat-item-title">
                                    Completed
                                </div>
                                <div className="stat-item-value">
                                    15
                                </div>
                            </div>
                            <hr />
                            <div className="stat-item">
                                <div className="stat-item-title">
                                    Canceled
                                </div>
                                <div className="stat-item-value">
                                    1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWallet