let inputs = document.querySelectorAll('input');
let p = document.querySelectorAll('p');
let first = 0;
let last = 0;
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click',(e)=>{
        if(!e.shiftKey){
            first = i;
            p[i].classList.toggle('decoration-2');
            p[i].classList.toggle('line-through');
            p[i].classList.toggle('bg-gray-100');
        }else{
            last = i;
            p[i].classList.toggle('decoration-2');
            p[i].classList.toggle('line-through');
            p[i].classList.toggle('bg-gray-100');
            if(first<last){
                for (let i = first+1 ; i < last; i++) {
                    p[i].classList.toggle('decoration-2');
                    p[i].classList.toggle('line-through');
                    p[i].classList.toggle('bg-gray-100');
                    inputs[i].setAttribute('checked', true);
                }
            }else{
                for (let i = last+1 ; i < first; i++) {
                    p[i].classList.toggle('decoration-2');
                    p[i].classList.toggle('line-through');
                    p[i].classList.toggle('bg-gray-100');
                    inputs[i].setAttribute('checked', true);
                }
            }
        }
    })
    
}

