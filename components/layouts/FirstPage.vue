<template>
    <!--------------- firstPage---- -------->
    <div class="container firstPage mt-[50px]">
      <div class="firstpageimage">
        <img
          class="xl:mr-4"
          src="../../assets/images/firstpag1.png"
          alt="img"
        />
        <img
          class="xl:mr-[30px]"
          src="../../assets/images/firstpage2.png"
          alt="img"
        />
      </div>
      <div class="textt">
        <h1 class="mb-[20px]">
          Международный фармацевтический<br />
          форум Узбекистана
        </h1>
        <p>
          Уникальная профессиональная международная площадка для лидеров
          фармацевтической отрасли, с<br />
          участием руководителей крупнейших производителей, дистрибьютеров,
          органов власти, регуляторно-<br />надзорных органов, лицензиаров
          технологий производства, юристов и консалтинговых специалистов,<br />
          работающих в данной сфере и многих других.
        </p>
      </div>
      <div class="textt2">
        <h1 class="mb-[20px]">
          Международный фармацевтический
          форум Узбекистана
        </h1>
        <p>
          Уникальная профессиональная международная площадка для лидеров
          фармацевтической отрасли, с
          участием руководителей крупнейших производителей, дистрибьютеров,
          органов власти, регуляторно-надзорных органов, лицензиаров
          технологий производства, юристов и консалтинговых специалистов,
          работающих в данной сфере и многих других.
        </p>
      </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.textt2{
  display: none;
}
.firstpageimage{
    display: flex;
}
.firstPage{
    display: flex;
}
.firstpageimage img{
    width: 200px;
height: 200px;
}
.textt h1{
    font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 120%;
color: #1C2F3F;
font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.textt p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #1C2F3F;
    opacity: 0.5;
}
@media (max-width:1280px){
  .textt{
      display: none;
    }
    .textt2 h1{
    font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 120%;
color: #1C2F3F;
font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.textt2 p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #1C2F3F;
    opacity: 0.5;
}
}
@media (max-width:1024px){
  .textt{
      display: none;
    }
    .textt2{
      display: block;
    }
    .textt2 h1{
    font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 120%;
color: #1C2F3F;
font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.textt2 p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #1C2F3F;
}
}
@media (max-width:768px){
  .firstPage{
        display: flex;
        flex-wrap: wrap;
    }
    .firstpageimage{
      gap: 25px;
    }
    .firstpageimage img{
        width: 358px;
        height: 350px;
        margin-bottom: 20px;
    }
    .textt{
      display: none;
    }
    .textt2{
      display: block;
    }
    .textt2 h1{
    font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 120%;
color: #1C2F3F;
font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.textt2 p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #1C2F3F;
    opacity: 0.5;
}
}
@media (max-width:640px){
  .firstpageimage{
        gap: 10px;
    }
    .firstPage{
        display: flex;
        flex-wrap: wrap;
      
    }
    .firstpageimage img{
    width: 187px;
height: 200px;
}
    .textt{
      display: none;
    }
    .textt2{
      display: block;
    }
    .textt2 h1{
    font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 120%;
color: #1C2F3F;
font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.textt2 p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #1C2F3F;
    opacity: 0.5;
}
}
@media (max-width:414px){
  .firstpageimage{
        gap: 10px;
    }
    .firstpageimage img{
    width: 187px;
height: 200px;
}

    .firstPage{
        display: flex;
        flex-wrap: wrap;    
    } 
   
    .textt{
      display: none;
    }
    .textt2{
      display: block;
    }
    .textt h1{
    font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 120%;
color: #1C2F3F;
font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.textt2 p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #1C2F3F;
    opacity: 0.5;
}
}
</style>