// Sleep
// https://leetcode.com/problems/sleep/description/

// Tags: Frontend (javaScript)

async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, millis)
    });
}