numeros.addEventListener('click',clicar)
botao.addEventListener('click', enviar)
let r= 0

function clicar(){
    
   limpar_selecao()

   r = event.target.getAttribute('value')
   switch (r == event.target.getAttribute('value')){
       case r == 1:   
        b1.style.backgroundColor = 'hsl(217, 12%, 63%)'
       break
       case r == 2:   
        b2.style.backgroundColor = 'hsl(217, 12%, 63%)'
       break
       case r == 3:   
        b3.style.backgroundColor = 'hsl(217, 12%, 63%)'
       break
       case r == 4:   
        b4.style.backgroundColor = 'hsl(217, 12%, 63%)'
       break
       case r == 5:   
        b5.style.backgroundColor = 'hsl(217, 12%, 63%)'
       break
       defalt:   
        
       break 
    
    }      
    
    


}



function enviar(){
    if (r == 0){
        alert('Nenhuma nota ')
    }else{
      caixa1.style.display = 'none'
      caixa2.style.display = 'flex'
      res.textContent = `You selected ${r} out of 5`
    }
}    



function limpar_selecao(){
    b1.style.backgroundColor = ''
    b2.style.backgroundColor = ''
    b3.style.backgroundColor = ''
    b4.style.backgroundColor = ''
    b5.style.backgroundColor = ''
}
 




