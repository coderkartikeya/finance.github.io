
document.addEventListener("DOMContentLoaded", function () {
    const ele = document.getElementById('mb');
    const ele2 = document.getElementById('cr');

    ele2.addEventListener('click', function () {
        const element = document.getElementById('side');
        if (element) {
            element.style.visibility = 'hidden';
        }
        if (ele2) {
            ele2.style.visibility = 'hidden';
        }
    });

    ele.addEventListener('click', function () {
        const element = document.getElementById('side');
        if (element) {
            element.style.visibility = 'visible';
        }
        const element2 = document.getElementById('cross');
        if (element2) {
            element2.style.visibility = 'visible';
        }
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.backgroundImage='none';
    document.getElementById("nav").style.backgroundColor='black'
    // document.getElementsByTagName("a").style.color='black';
    // document.getElementById("nav").style.color = "black";
  } else {
    document.getElementById("nav").style.backgroundImage="url('images/bg_1.jpg')";
    
  }
}

async function getNewsSentiment() {
    const apiKey = 'F6ZQKJ60IGY9X0B5'; // Replace with your own API key
    const ticker = 'AAPL';
  
    const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();

      const element=document.getElementById('nw');
      function generateHTML(dataArray) {
        return dataArray.feed.map(item => `
          <div class="card">
          <h1>${item.title}</h1>
          <img src="${item.banner_image}" alt="image" />
          </div>
        `).join('');
      }

      element.innerHTML=generateHTML(data);

      
     
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  getNewsSentiment();


  
  


// F6ZQKJ60IGY9X0B5




 



