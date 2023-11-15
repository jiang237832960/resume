// 创建一个函数来处理从小程序发送过来的 POST 请求  
function handlePostRequest(postData) {  
    // 使用 Fetch API 发送一个 POST 请求到另一个 API  
    fetch('http://hi.pcmoe.net/bear.php', {  
        method: 'POST',  
        headers: {  
            'Content-Type': 'application/json'  
        },  
        body: JSON.stringify(postData)  
    })  
    .then(response => response.json())  
    .then(data => {  
        // 将另一个 API 的响应返回给小程序  
        return data;  
    })  
    .catch(error => {  
        console.error(error);  
        // 在发生错误时返回一个错误消息给小程序  
        return { error: 'An error occurred' };  
    });  
}  
  
// 在小程序中调用这个函数，并传递数据  
const postData = { /* 小程序发送的数据 */ };  
handlePostRequest(postData);
