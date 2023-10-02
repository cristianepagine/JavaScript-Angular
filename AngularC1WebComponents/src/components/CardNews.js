class CardNews extends HTMLElement {
    constructor() {
      super();
    const shadow = this.attachShadow({ mode: "open" }); 
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
         }
         build(){
          const componentRoot = document.createElement("div");
          componentRoot.setAttribute("class","card");

          const cardLeft = document.createElement("div");
          cardLeft.setAttribute("class", "card_left");

          const autor = document.createElement("span");
          autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

          const linkTitle = document.createElement("a");
          linkTitle.textContent = this.getAttribute("title");
          linkTitle.href = this.getAttribute("link-url");
          

          const newsContent = document.createElement("p");
          newsContent.textContent = this.getAttribute("news");


          cardLeft.appendChild(autor);
          cardLeft.appendChild(linkTitle);
          cardLeft.appendChild(newsContent);

          const cardRigth = document.createElement("div");
          cardRigth.setAttribute("class", "card_rigth");

          const newsImage = document.createElement("img");
          newsImage.src = this.getAttribute ("photo") || "assets/default.jpg";
          newsImage.alt = "DarthVader";

          cardRigth.appendChild(newsImage);

          componentRoot.appendChild(cardLeft);
          componentRoot.appendChild(cardRigth);
          return componentRoot;
          
         }
         styles() {
          const style = document.createElement("style");
          style.textContent = `
              .card {
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 1rem;

              }
              
              .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
                font-weight: 700;
                display: flex;
                flex-direction: column;
                text-decoration: none;
                margin-top: 0.2rem;
              }
              
              .card_left > span {
                font-weight: 400;
              }
              
              .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
              }
              
              .card_left > p {
                color: rgb(70, 70, 70);
                font-weight: 300;

              }
              .card_rigth {
                padding: 1rem;
                max-width:150px;
                max-height:150px;
                width: auto;
                height: auto;
                display: flex;
                justify-content: center;   
                align-items: center;  
              }
              .card_rigth img {
                padding: 1rem;
                border-radius:1.5rem;
                max-width:10rem;
                height: 10rem;
                display: flex;
                justify-content: center;   
                align-items: center; 
              }
              

              
          `;
      
          return style;
        }
  }
  
  customElements.define("card-news", CardNews)