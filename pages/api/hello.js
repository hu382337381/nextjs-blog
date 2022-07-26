/*
 * @Author       : 胡昊
 * @Date         : 2022-07-26 15:32:15
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-26 15:32:16
 * @FilePath     : /nextjs-blog/pages/api/hello.js
 * @Description  :
 */

export default (req, res) => {
  res.status(200).json({ text: "hello harmer" });
};
