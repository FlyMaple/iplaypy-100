// Python練習題問題如下：
// 提問：將一個列表的數據複製到另一個列表中。

// 請仔細看要求，這裡要求的是複制數據到一個新的列表中。

// Python列表數據複製，Python解題思路分析：可以了解下[ ：]的含義

// python解題源代碼如下：

const list = [1, 2, 3];
const list_copy = [...list]

console.log(`list: ${list}`);
console.log(`list_copy: ${list_copy}`);