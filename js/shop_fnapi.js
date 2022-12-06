const api = new XMLHttpRequest();

const grid = document.querySelector('#grid');
const pavosImg = document.createElement("IMG");
pavosImg.scr = "https://fortnite-api.com/images/vbuck.png";

api.open('GET', 'https://fortnite-api.com/v2/shop/br?languaje=es-419', true);
api.send();

api.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText).data;
    const Daily = document.querySelector('#daily .shopGrid');
    const Featured = document.querySelector('#featured .shopGrid');
    const Special = document.querySelector('#special .shopGrid');

    const fechaTextNode = document.createTextNode(datos.date.replace("T00:00:00Z", ""));
    const fechaHTML = document.querySelector("H4");
    fechaHTML.appendChild(fechaTextNode);

    const datosDaily = datos.daily.entries;
    const datosFeatured = datos.featured.entries;
    const datosSpecial = datos.specialFeatured.entries;

    for(let i in datosDaily){
      let itemCard = document.createElement("DIV");
      let itemHipervinculo = document.createElement("A");
      let img = document.createElement("IMG");
      let name = document.createElement("H2");
      let price = document.createElement("P");
      let nameText;
      let priceText;

      price.appendChild(pavosImg);
      itemHipervinculo.appendChild(img);
      itemCard.appendChild(itemHipervinculo);
      itemCard.appendChild(name);
      itemCard.appendChild(price);
      

      if(datosDaily[i].bundle == null){
        nameText = document.createTextNode(datosDaily[i].items[0].name);
        priceText = document.createTextNode(datosDaily[i].finalPrice);
        img.src = datosDaily[i].newDisplayAsset.materialInstances[0].images.Background;

        itemHipervinculo.href = `item.html?itemid=${datosDaily[i].items[0].id}`;
        itemHipervinculo.target = "_blank";
      } else{
        nameText = document.createTextNode(datosDaily[i].bundle.name);
        priceText = document.createTextNode(datosDaily[i].finalPrice);
        
        img.src = datosDaily[i].bundle.image;
      }

      name.appendChild(nameText);
      price.appendChild(priceText);

      itemCard.className = "cardItem";
      Daily.appendChild(itemCard);
    }

    for(let i in datosFeatured){
      let itemCard = document.createElement("DIV");
      let itemHipervinculo = document.createElement("A");
      let img = document.createElement("IMG");
      let name = document.createElement("H2");
      let price = document.createElement("P");
      let nameText;
      let priceText;

      price.appendChild(pavosImg);
      itemHipervinculo.appendChild(img);
      itemCard.appendChild(itemHipervinculo);
      itemCard.appendChild(name);
      itemCard.appendChild(price);
      

      if(datosFeatured[i].bundle == null){
        nameText = document.createTextNode(datosFeatured[i].items[0].name);
        priceText = document.createTextNode(datosFeatured[i].finalPrice);
        img.src = datosFeatured[i].newDisplayAsset.materialInstances[0].images.Background;

        itemHipervinculo.href = `item.html?itemid=${datosFeatured[i].items[0].id}`;
        itemHipervinculo.target = "_blank";
      } else{
        nameText = document.createTextNode(datosFeatured[i].bundle.name);
        priceText = document.createTextNode(datosFeatured[i].finalPrice);
        
        img.src = datosFeatured[i].bundle.image;
      }

      name.appendChild(nameText);
      price.appendChild(priceText);

      itemCard.className = "cardItem";
      Featured.appendChild(itemCard);
    }

    for(let i in datosSpecial){
      let itemCard = document.createElement("DIV");
      let itemHipervinculo = document.createElement("A");
      let img = document.createElement("IMG");
      let name = document.createElement("H2");
      let price = document.createElement("P");
      let nameText;
      let priceText;

      price.appendChild(pavosImg);
      itemHipervinculo.appendChild(img);
      itemCard.appendChild(itemHipervinculo);
      itemCard.appendChild(name);
      itemCard.appendChild(price);
      

      if(datosSpecial[i].bundle == null){
        nameText = document.createTextNode(datosSpecial[i].items[0].name);
        priceText = document.createTextNode(datosSpecial[i].finalPrice);
        img.src = datosSpecial[i].newDisplayAsset.materialInstances[0].images.Background;

        itemHipervinculo.href = `item.html?itemid=${datosSpecial[i].items[0].id}`;
        itemHipervinculo.target = "_blank";
      } else{
        nameText = document.createTextNode(datosSpecial[i].bundle.name);
        priceText = document.createTextNode(datosSpecial[i].finalPrice);
        
        img.src = datosSpecial[i].bundle.image;
      }

      name.appendChild(nameText);
      price.appendChild(priceText);

      itemCard.className = "cardItem";
      Special.appendChild(itemCard);
    }

  }
}