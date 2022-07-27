/*
 * @Author       : 胡昊
 * @Date         : 2022-07-25 15:24:00
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-27 09:23:48
 * @FilePath     : /nextjs-blog/pages/_app.tsx
 * @Description  :
 */

import { AppProps } from "next/app";
import "../styles/global.css";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
