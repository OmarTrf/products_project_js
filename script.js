$( document ).ready(function() {
   card = document.querySelectorAll(".card");
    let result = document.querySelector(".resultat");
    let totaltP = document.querySelector('.totalP');
    let total_prix = 0;
   //disabled all button ADD TO CART
   for(var i=0;i<card.length;i++){
      let btns_add = card[i].querySelector(".body").querySelector("button");
      let quantity = card[i].querySelector(".body").querySelector("input");
      
      
      let current_prix = 0;
      totaltP.innerHTML = '<p>Total de panier : <span>0$</span>';
      btns_add.disabled = true;
      btns_add.style.opacity = ".4";
      let quan = null;
      quantity.addEventListener("change",function(){
         if (this.value > 0) {
            quan = parseInt(this.value);
            this.nextElementSibling.disabled = false;
            this.nextElementSibling.style.opacity = "1";
            
         }else{
            this.nextElementSibling.style.disabled = true;
            this.nextElementSibling.style.opacity = ".4";
         }
         //TOTAL PRIX


      });
      btns_add.addEventListener("click",function(e){
               e.preventDefault();
               let title = this.parentElement.parentElement.previousElementSibling.previousElementSibling.querySelector("h2");
               let prix = this.parentElement.parentElement.previousElementSibling.querySelector(".prix");
               let img = this.parentElement.parentElement.previousElementSibling.querySelector("img");
               //CREATE ARTICLE & ELEMENTS
               let article = document.createElement('div');
               article.classList.add('article');

               let cartProduct = document.createElement('div');
               cartProduct.classList.add('cartProduct');
               let my_img = document.createElement('img');
               my_img.setAttribute('src', img.getAttribute('src'));

               let imgProduct = document.createElement('div');
               imgProduct.classList.add('imgProduct');

               let descProduct = document.createElement('div');
               descProduct.classList.add('descProduct');
               descProduct.innerHTML = title.innerHTML;

               let countProduct = document.createElement('div');
               countProduct.classList.add('countProduct');
               countProduct.innerHTML = '<p><span>'+quan+'</span> X <span>'+prix.innerHTML+'</span></p>';

               let btn_del = document.createElement('button');
               btn_del.classList.add("btn_del");
               btn_del.innerHTML = "<i class='far fa-trash-alt'></i>";
               current_prix = parseInt(quan) * parseInt((prix.innerHTML).replace('$',''));
               total_prix+=current_prix;

               imgProduct.appendChild(my_img);
               cartProduct.appendChild(imgProduct);
               cartProduct.appendChild(descProduct);
               cartProduct.appendChild(countProduct);
               article.appendChild(cartProduct);
               article.appendChild(btn_del);
               result.appendChild(article);
               btn_del.addEventListener('click',function(){
                  total_prix -= current_prix;
                  article.remove();
                  totaltP.innerHTML = '<p>Total de panier : <span>'+total_prix+'$</span>';
               });
   totaltP.innerHTML = '<p>Total de panier : <span>'+total_prix+'$</span>';
          
            });
   }
});
