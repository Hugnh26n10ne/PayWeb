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
    //tinh tong tien chua giam gia
    let soluong=parseInt(document.getElementById('quantity-value').value);
    let tien=100;
    let sum =soluong*tien;
    if(soluong>=1)
    {
        document.getElementById('thanhtien').innerHTML=sum;
        
    }
    if(soluong=='')
    {
        soluong.value=1;
        
    }
    //tinh tien giam gia
    let giamgia =  document.getElementById('giamgia');//lấy giá trị của id giảm giá
    mucdangchon = giamgia.value;
    let giam; // tạo biến để gắn số tiền sau khi giảm giá
    
        if(mucdangchon != 1)// điều kiện thực hiện câu lệnh
        {
             giam= (sum*(100-giamgia.value))/100;
             document.getElementById('thanhtien2').innerHTML=giam;
        }
        else
        {
            document.getElementById('thanhtien2').innerHTML=sum;
        }
    
    
    
    // if(soluong>=1)
    // {
        
    //     document.getElementById('thanhtien2').innerHTML=giam;
    // }
    
}
function hienthind(obj, mess){
    let index="e_"+obj;
    document.getElementById(index).innerHTML=mess;
}
function checkthongtin()
{
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let telephone = document.getElementById('telephone').value;
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let code = document.getElementById('code').value;
    
    if(name==''||name==null||user.length<8||!/^[a-zA-Z0-9]+$/.test(name))
    {
        hienthind('name','Vui lòng không để thông tin rỗng và có ít nhất 8 kí tự!');
        // document.getElementById('e_name').innerHTML='Vui lòng kiểm tra tên đăng nhập';
    }
    else
    {
        hienthind('name','');
        // document.getElementById('e_name').innerHTML='';
    }
    if(address==''||address==null)
    {
        // document.getElementById('e_address').innerHTML='Cái này không bắt buộc';
        hienthind('address','Thông tin không bắt buộc !');   
    }
    else
    {
        // document.getElementById('e_address').innerHTML='';
        hienthind('address','');  
    }
    mailformat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email==''||email==null||!mailformat.test(email))
    {
        // document.getElementById('e_email').innerHTML='Vui lòng kiểm tra email';
        hienthind('email','Vui lòng kiểm tra lại email !');  
    }
    else
    {
        // document.getElementById('e_email').innerHTML='';
        hienthind('email','');  
    }
    
    if(isNaN(telephone))
    {
        // document.getElementById('e_telephone').innerHTML='Vui lòng kiểm tra lại số điện thoại';
        hienthind('telephone','Vui lòng kiểm tra lại số điện thoại !');  
    }
    else if(telephone==null||telephone=='')
    {
        hienthind('telephone','Vui lòng nhập số điện thoại !');
    }
    else
    {
        // document.getElementById('e_telephone').innerHTML='';
        hienthind('telephone','');  
    }
    if(city==''||city==null)
    {
        // document.getElementById('e_city').innerHTML='Cái này không bắt buộc';
        hienthind('city','Thông tin không bắt buộc !');  
    }
    else
    {
        // document.getElementById('e_city').innerHTML='';
        hienthind('city','');
    }
    if(country==''||country==null)
    {
        // document.getElementById('e_country').innerHTML='Cái này không bắt buộc';
        hienthind('country','Thông tin không bắt buộc !');
    }
    else
    {
        // document.getElementById('e_country').innerHTML='';
        hienthind('country','');
    }
    if(code==''||code==null||code.length!=6||!/^[0-9]+$/.test(code))
    {
        // document.getElementById('e_code').innerHTML='Vui lòng kiểm tra mã code';
        hienthind('code','Vui lòng nhập lại 6 kí tự code !');
    }
    else
    {
        // document.getElementById('e_code').innerHTML='';
        hienthind('code','');
    }
}
function tichradio(){
    let radios=document.getElementsByName('radios');
    let radio= document.getElementsByName('radio');
    for(let i = 0; i< radios.length;i++)
    {
        if(radios[i].checked===true)
        {
            radio[i].parentNode.style.display="";
            
        } 
    }    
}
function botichradio(){
    let radios=document.getElementsByName('radios');
    let radio= document.getElementsByName('radio');
    for(let i = 0; i< radios.length;i++)
    {
        if(radios[i].checked===false)
        {
            radio[i].parentNode.style.display="none";
            
        } 
    }    
}
function giamgia(){
    let luachon = document.getElementsByName('giamgia');
    if(luachon.value!=luachon[0])
    {
      
    }
}
function remove(){
    window.location='https://motphimtv.info/xem-phim/chiec-bat-lua-va-vay-cong-chua-tap-4-10707_127327.html';
}
function muathem(){
    window.location='https://coccoc.com/search?query=chi%E1%BA%BFc+b%E1%BA%ADt+l%E1%BB%ADa+v%C3%A0+v%C3%A1y+c%C3%B4ng+ch%C3%BAa+phim';
}
function checkdk(){
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let telephone = document.getElementById('telephone').value;
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let code = document.getElementById('code').value;
    mailformat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if((name==''||name==null||user.length<8||!/^[a-zA-Z0-9]+$/.test(name))&&(address==''||address==null)&&(email==''||email==null||!mailformat.test(email))&&(isNaN(telephone)||telephone==null||telephone=='')&&(city==''||city==null)&&(country==''||country==null)&&(code==''||code==null||code.length!=6||!/^[0-9]+$/.test(code)))
    {
        document.getElementById('checks').disabled = true;
    }
    else
    {
        document.getElementById('checks').disabled= false;
        window.location='https://motphimtv.info/xem-phim/chiec-bat-lua-va-vay-cong-chua-tap-4-10707_127327.html';

    }
}