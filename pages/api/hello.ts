/*
 * @Author       : 胡昊
 * @Date         : 2022-07-26 15:32:15
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-26 17:41:46
 * @FilePath     : /nextjs-blog/pages/api/hello.ts
 * @Description  :
 */
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "hello harmer" });
};
