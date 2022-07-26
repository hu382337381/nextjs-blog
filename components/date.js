/*
 * @Author       : 胡昊
 * @Date         : 2022-07-26 14:43:39
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-26 14:45:12
 * @FilePath     : /nextjs-blog/components/date.js
 * @Description  :
 */

import { format, parseISO } from "date-fns";

export default ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d,yyyy")}</time>;
};
