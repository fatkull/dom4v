let btns = document.querySelectorAll('button[data-btn]')
let p = document.querySelector('p')
let count = 0

btns.forEach(item => {
    item.onclick = () => {
        let method = item.getAttribute('data-btn')
        switch (method) {
            case '+':
                setInterval(() => {
                   count += 1
                   p.innerHTML = count
                }, 500);
                break;
            case '-':
                setInterval(() => {
                    count -= 1
                    p.innerHTML = count
                }, 500);
                break;
            case 'stop':
                // count = 0
                // p.innerHTML = count
                // clearInterval()
                break;
        }
        
    }
})
    
    
    
    //     console.log(method);
    //     if(method == '+') {
    //             setInterval(() => {
    //                 count += 1
    //                 p.innerHTML = count
    //             }, 500)
    //         }
    // }  



        // 