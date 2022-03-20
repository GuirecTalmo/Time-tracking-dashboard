const app = {
  
  // fonction d'initialisation, lancée au chargement de la page
  init: function () {
    app.getData();
    app.addListenerToActions();
  },

  addListenerToActions: function() {

    const btnHourGlass = document.getElementsByClassName('link_options');
    //fetch => data

          for(const btn of btnHourGlass) {
      btn.addEventListener('click', app.changeCardInDom);
    }

  },

   getData: function () {

    // Replace ./data.json with your JSON feed
   fetch('./js/data.json')
     .then((response) => {
       return response.json()
     })
     .then((datas) => {
       // Work with JSON data here

      for (const data of datas) {

        app.makeCardInDom(data)
        
      }

      // Résout le problème d'espace entre la classe css et le title du json

      let selfcare = document.getElementById("Self Care");

      selfcare.setAttribute("id", "SelfCare");

     })
     .catch((err) => {
      error(400);
     }) 
     
   },

   makeCardInDom : function (data) {
    // let time;
    // console.log(this.value);
    // if(this.value){
    //   time = this.value;
    // }
    // let dataTime;
    // switch(time){
    //   case "daily":
    //     dataTime = data.timeframes.daily;
    //   break;
    //   case "weekly":
    //     dataTime = data.timeframes.weekly;
    //   break;
    //   case "monthly":
    //     dataTime = data.timeframes.monthly;
    //   break;
    //   default:
    //     dataTime = data.timeframes.daily;
    //   break;
    // }

    // récupérer le template
    const template = document.getElementById('templateCards');

    const cloneTemplate = template.content.cloneNode(true);
    const id = cloneTemplate.querySelector('.display_card');
    // modifier le clone du template
    id.setAttribute("id", data.title);

    const title = cloneTemplate.querySelector('.category');

    title.textContent = data.title;

    const currenttime = cloneTemplate.querySelector('.hours');

    currenttime.textContent = data.timeframes.daily.current;

    const previoustime = cloneTemplate.querySelector('.previous');
 
    previoustime.textContent = 'Last week - ' + data.timeframes.daily.previous;

    document.querySelector('.right_container').append(cloneTemplate);

   },

   changeCardInDom : async function (event) {

    try {

      const response = await fetch('./js/data.json');
      // sauf que nous on veut la data ! on va donc utiliser la méthode json de l'objet response
      const data = await response.json();
      // créer les listes dans le DOM    

    document.getElementsByClassName('link_options').value = event.target;

    console.log(event.target.value);

    if (event.target.value === "daily") {

      const allCards = document.querySelectorAll('.display_card')

      console.log(allCards);


     allCards.forEach(element => {
       switch (element.id) {
          case 'Work':
            const worktime = element.querySelector('.hours');
            worktime.textContent = data[0].timeframes.daily.current;
            const workprevioustime = element.querySelector('.previous');
            workprevioustime.textContent = 'Last week - ' + data[0].timeframes.daily.previous;
          break;
          case 'Play':
            const playtime = element.querySelector('.hours');
            playtime.textContent = data[1].timeframes.daily.current;
            const playprevioustime = element.querySelector('.previous');
            playprevioustime.textContent = 'Last week - ' + data[1].timeframes.daily.previous;
          break;
          case 'Study':
            const studytime = element.querySelector('.hours');
            studytime.textContent = data[2].timeframes.daily.current;
            const studyprevioustime = element.querySelector('.previous');
            studyprevioustime.textContent = 'Last week - ' + data[2].timeframes.daily.previous;
          break;
          case 'Exercise':
            const exetime = element.querySelector('.hours');
            exetime.textContent = data[3].timeframes.daily.current;
            const exeprevioustime = element.querySelector('.previous');
            exeprevioustime.textContent = 'Last week - ' + data[3].timeframes.daily.previous;
          break;
          case 'Social':
            const socialtime = element.querySelector('.hours');
            socialtime.textContent = data[4].timeframes.daily.current;
            const socialprevioustime = element.querySelector('.previous');
            socialprevioustime.textContent = 'Last week - ' + data[4].timeframes.daily.previous;
          break;
          case 'SelfCare':
            const selftime = element.querySelector('.hours');
            selftime.textContent = data[5].timeframes.daily.current;
            const selfprevioustime = element.querySelector('.previous');
            selfprevioustime.textContent = 'Last week - ' + data[5].timeframes.daily.previous;
          break;
    }

     });
 
    }

    if (event.target.value === "weekly") {

      const allCards = document.querySelectorAll('.display_card')

      console.log(allCards);


     allCards.forEach(element => {
      switch (element.id) {
        case 'Work':
          const worktime = element.querySelector('.hours');
          worktime.textContent = data[0].timeframes.weekly.current;
          const workprevioustime = element.querySelector('.previous');
          workprevioustime.textContent = 'Last week - ' + data[0].timeframes.weekly.previous;
        break;
        case 'Play':
          const playtime = element.querySelector('.hours');
          playtime.textContent = data[1].timeframes.weekly.current;
          const playprevioustime = element.querySelector('.previous');
          playprevioustime.textContent = 'Last week - ' + data[1].timeframes.weekly.previous;
        break;
        case 'Study':
          const studytime = element.querySelector('.hours');
          studytime.textContent = data[2].timeframes.weekly.current;
          const studyprevioustime = element.querySelector('.previous');
          studyprevioustime.textContent = 'Last week - ' + data[2].timeframes.weekly.previous;
        break;
        case 'Exercise':
          const exetime = element.querySelector('.hours');
          exetime.textContent = data[3].timeframes.weekly.current;
          const exeprevioustime = element.querySelector('.previous');
          exeprevioustime.textContent = 'Last week - ' + data[3].timeframes.weekly.previous;
        break;
        case 'Social':
          const socialtime = element.querySelector('.hours');
          socialtime.textContent = data[4].timeframes.weekly.current;
          const socialprevioustime = element.querySelector('.previous');
          socialprevioustime.textContent = 'Last week - ' + data[4].timeframes.weekly.previous;
        break;
        case 'SelfCare':
          const selftime = element.querySelector('.hours');
          selftime.textContent = data[5].timeframes.weekly.current;
          const selfprevioustime = element.querySelector('.previous');
          selfprevioustime.textContent = 'Last week - ' + data[5].timeframes.weekly.previous;
        break;
    }

     });
 
    }


    if (event.target.value === "monthly") {

      const allCards = document.querySelectorAll('.display_card')

     allCards.forEach(element => {
      switch (element.id) {
        case 'Work':
          const worktime = element.querySelector('.hours');
          worktime.textContent = data[0].timeframes.monthly.current;
          const workprevioustime = element.querySelector('.previous');
          workprevioustime.textContent = 'Last week - ' + data[0].timeframes.monthly.previous;
        break;
        case 'Play':
          const playtime = element.querySelector('.hours');
          playtime.textContent = data[1].timeframes.monthly.current;
          const playprevioustime = element.querySelector('.previous');
          playprevioustime.textContent = 'Last week - ' + data[1].timeframes.monthly.previous;
        break;
        case 'Study':
          const studytime = element.querySelector('.hours');
          studytime.textContent = data[2].timeframes.monthly.current;
          const studyprevioustime = element.querySelector('.previous');
          studyprevioustime.textContent = 'Last week - ' + data[2].timeframes.monthly.previous;
        break;
        case 'Exercise':
          const exetime = element.querySelector('.hours');
          exetime.textContent = data[3].timeframes.monthly.current;
          const exeprevioustime = element.querySelector('.previous');
          exeprevioustime.textContent = 'Last week - ' + data[3].timeframes.monthly.previous;
        break;
        case 'Social':
          const socialtime = element.querySelector('.hours');
          socialtime.textContent = data[4].timeframes.monthly.current;
          const socialprevioustime = element.querySelector('.previous');
          socialprevioustime.textContent = 'Last week - ' + data[4].timeframes.monthly.previous;
        break;
        case 'SelfCare':
          const selftime = element.querySelector('.hours');
          selftime.textContent = data[5].timeframes.monthly.current;
          const selfprevioustime = element.querySelector('.previous');
          selfprevioustime.textContent = 'Last week - ' + data[5].timeframes.monthly.previous;
        break;
    }

     });
 
    }

      
      
    } catch(error) {
      console.error(error);
    }



   },
    
};

document.addEventListener('DOMContentLoaded', app.init );

