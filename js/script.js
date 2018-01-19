// Sample data
// We are going to simulate that it has been returned from a web API (web server)
var server_data = {
  collection:
  {
    title: "Movie List",
    type: "movie",
    version: "1.0",

    items: [
      {
        href: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)",
        data: [
          { name: "name", value: "The Lord of the Rings", prompt: "Name" },
          { name: "description", value: "The Lord of the Rings is a film series consisting of three high fantasy adventure films directed by Peter Jackson. They are based on the novel The Lord of the Rings by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring (2001), The Two Towers (2002) and The Return of the King (2003). They are a New Zealand-American venture produced by WingNut Films and The Saul Zaentz Company and distributed by New Line Cinema.", prompt: "Description" },
          { name: "director", value: "Peter Jackson", prompt: "Director" },
          { name: "datePublished", value: "2001-12-19", prompt: "Release Date" },
          { name: "image", value: "http://www.fotogramas.es/var/ezflow_site/storage/images/series-television/el-senor-de-los-anillos-serie-television-netflix-amazon/137679468-1-esl-ES/El-senor-de-los-anillos-la-serie-que-quieren-Netflix-Amazon-y-HBO_landscape.jpg", prompt: "Imagen" }
        ]
      },
      {
        href: "https://en.wikipedia.org/wiki/The_Hunger_Games_(film_series)",
        data: [
          { name: "name", value: "The Hunger Games", prompt: "Name" },
          { name: "description", value: "The Hunger Games film series consists of four science fiction dystopian adventure films based on The Hunger Games trilogy of novels, by the American author Suzanne Collins. Distributed by Lionsgate and produced by Nina Jacobson and Jon Kilik, it stars Jennifer Lawrence as Katniss Everdeen, Josh Hutcherson as Peeta Mellark, Woody Harrelson as Haymitch Abernathy, Elizabeth Banks as Effie Trinket, Philip Seymour Hoffman as Plutarch Heavensbee, Stanley Tucci as Caesar Flickerman, Donald Sutherland as President Snow, and Liam Hemsworth as Gale Hawthorne. Gary Ross directed the first film, while Francis Lawrence directed the next three films.", prompt: "Description" },
          { name: "director", value: "Gary Ross", prompt: "Director" },
          { name: "datePublished", value: "2012-03-12", prompt: "Release Date" },
          { name: "image", value: "https://i.vimeocdn.com/video/508219594.jpg?mw=600&mh=338", prompt: "Imagen" }
        ]
      },
      {
        href: "https://en.wikipedia.org/wiki/Game_of_Thrones",
        data: [
          { name: "name", value: "Game of Thrones", prompt: "Name" },
          { name: "description", value: "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones. It is filmed in Belfast and elsewhere in the United Kingdom, Canada, Croatia, Iceland, Malta, Morocco, Spain, and the United States. The series premiered on HBO in the United States on April 17, 2011, and its seventh season ended on August 27, 2017. The series will conclude with its eighth season premiering in 2019.", prompt: "Description" },
          { name: "director", value: "Alan Taylor et al", prompt: "Director" },
          { name: "datePublished", value: "2011-04-17", prompt: "Release Date" },
          { name: "image", value: "https://www.infobae.com/new-resizer/xiSczub8_FtT-sQDcwX7rqB1F4Y=/600x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/07/16190425/game-of.jpg", prompt: "Imagen" }

        ]
      }
    ]
  }
};


// Create a Vue app and pass the server data to the app
var app = new Vue({
  el: '#app',
  data: {
    d: server_data
  },
  methods: {

    tituloPelicula: function (item) {

      var resultado;

      for (var i = 0; i < item.data.length; i++) {
        if (item.data[i].name == "name") {
          resultado = item.data[i].value;
        }
      }
      return resultado;
    }

  }
});
