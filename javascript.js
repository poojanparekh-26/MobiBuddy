// let product;

// function p_num(img,name,price){
//     let s_r_c=document.getElementById(img).src;
//     sessionStorage.setItem("src",s_r_c);
//     let l_name=document.getElementById(name).innerHTML;
//     sessionStorage.setItem("name",i_name);
//     let l_price=document.getElementById(price).innerText;
//     sessionStorage.setItem("price",l_price);
// }

function call(){
    let txt=sessionStorage.getItem("ID");
    document.getElementById('demo').innerText=txt;
}


