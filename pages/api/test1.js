/*
 * @Author       : 胡昊
 * @Date         : 2022-07-26 15:52:27
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-26 15:52:27
 * @FilePath     : /nextjs-blog/pages/api/test.js
 * @Description  :
 */

export default (req, res) => {
  res.status(200).json({ test: "i am test" });
};
