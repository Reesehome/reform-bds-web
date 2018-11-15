import checkType from 'UTIL/type'

// 替换属性名
const replaceArrLabel = (arr, oldLab, newLab) => {
    if (!arr) {
        console.error('replaceArrLabel()：数据不存在')
        return
    }
    if (!checkType.isArr(arr)) {
        console.error('replaceArrLabel()：需要传入数组')
        return
    }
    const arrLen = arr.length
    for (let i = 0; i < arrLen; i++) {
        arr[i][newLab] = arr[i][oldLab]
        if (arr[i].children) {
            replaceArrLabel(arr[i].children, oldLab, newLab)
        }
    }
    // arr.forEach(item => {
    //     item[newLab] = item[oldLab]
    //     if (item.children) {
    //         replaceArrLabel(item.children, oldLab, newLab)
    //     }
    // })
    return arr
}

// 递归获得父子层级
const pushIntoParent = (arr, item) => {
    const parentId = item.parentId
    const arrLength = arr.length
    for (let i = 0; i < arrLength; i++) {
        if (parentId === arr[i].id) {
            if (!arr[i].children) {
                arr[i].children = [].concat(item)
                return
            }
            arr[i].children.push(item)
            return
        }
        // 逐层检查
        if (arr[i].children) pushIntoParent(arr[i].children, item)
    }
}
export {
    replaceArrLabel,
    pushIntoParent
}
