function tangSoLuong(){
    let tang =parseInt(document.getElementById('quantity-value').value);
    document.getElementById('quantity-value').value=tang+1;
}
function giamSoLuong(){
    let giam=parseInt(document.getElementById('quantity-value').value);
    if(giam>1)
    {
        document.getElementById('quantity-value').value=giam-1;
    }
    
}
function thanhtoan()
{
    
    let soluong=parseInt(document.getElementById('quantity-value').value);
    let tien=100;
    let sum = soluong*tien;
    if(soluong=='')
    {
        soluong.value=1;
        
    }
    if(soluong>=1)
    {
        document.getElementById('thanhtien').innerHTML=sum;
        document.getElementById('thanhtien2').innerHTML=sum;
    }
    
}
function checkthongtin()
{
    
}
