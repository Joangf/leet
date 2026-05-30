/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function (queries) {
    // Bước 1: Tìm giá trị x lớn nhất để xác định kích thước Segment Tree
    let maxBoundary = 0;
    for (const q of queries) {
        maxBoundary = Math.max(maxBoundary, q[1]);
    }
    
    // Kích thước của Segment Tree
    const n = maxBoundary + 1;
    const tree = new Array(4 * n).fill(0);

    // Hàm cập nhật Segment Tree (Point Update)
    function update(node, start, end, idx, val) {
        if (start === end) {
            tree[node] = val;
            return;
        }
        const mid = Math.floor((start + end) / 2);
        if (idx <= mid) {
            update(2 * node, start, mid, idx, val);
        } else {
            update(2 * node + 1, mid + 1, end, idx, val);
        }
        tree[node] = Math.max(tree[2 * node], tree[2 * node + 1]);
    }

    // Hàm truy vấn giá trị lớn nhất trong đoạn [l, r] (Range Maximum Query)
    function queryMax(node, start, end, l, r) {
        if (r < start || end < l) return 0;
        if (l <= start && end <= r) return tree[node];
        
        const mid = Math.floor((start + end) / 2);
        const leftMax = queryMax(2 * node, start, mid, l, r);
        const rightMax = queryMax(2 * node + 1, mid + 1, end, l, r);
        return Math.max(leftMax, rightMax);
    }

    // Mảng lưu vị trí các cọc, luôn giữ thứ tự tăng dần
    // Ban đầu có cọc ở vị trí 0 và một cọc "vô cực" ở biên phải để dễ xử lý biên
    const obstacles = [0, n];
    
    // Ban đầu chưa có cọc nào ở giữa, khoảng cách từ 0 đến biên n là n
    update(1, 0, n, n, n);

    const results = [];

    // Hàm tìm kiếm nhị phân để tìm vị trí chèn hoặc tìm cọc liền kề
    function binarySearch(arr, target) {
        let l = 0, r = arr.length - 1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] === target) return mid;
            if (arr[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return l; // Trả về vị trí đầu tiên lớn hơn target
    }

    // Bước 2: Xử lý từng truy vấn
    for (const q of queries) {
        const type = q[0];
        const x = q[1];

        if (type === 1) {
            // Tìm vị trí của cọc ngay sau x
            const idx = binarySearch(obstacles, x);
            const nextObstacle = obstacles[idx];
            const prevObstacle = obstacles[idx - 1];

            // Chèn x vào mảng obstacles để giữ thứ tự
            obstacles.splice(idx, 0, x);

            // Cập nhật lại Segment Tree:
            // Khoảng trống cũ (prev -> next) bị phá vỡ, thay bằng 2 khoảng mới:
            // (prev -> x) lưu tại vị trí x
            // (x -> next) lưu tại vị trí next
            update(1, 0, n, x, x - prevObstacle);
            update(1, 0, n, nextObstacle, nextObstacle - x);

        } else if (type === 2) {
            const sz = q[2];

            // Tìm cọc lớn nhất mà vẫn nhỏ hơn hoặc bằng x
            let idx = binarySearch(obstacles, x);
            if (obstacles[idx] > x) {
                idx--;
            }
            const prevObstacle = obstacles[idx];

            // 1. Tìm khoảng trống lớn nhất trọn vẹn từ 0 đến prevObstacle
            const maxInPrev = queryMax(1, 0, n, 0, prevObstacle);
            
            // 2. Khoảng trống còn lại từ prevObstacle đến x
            const lastGap = x - prevObstacle;

            // Nếu một trong hai khu vực có khoảng trống >= sz thì thỏa mãn
            if (Math.max(maxInPrev, lastGap) >= sz) {
                results.push(true);
            } else {
                results.push(false);
            }
        }
    }

    return results;
};