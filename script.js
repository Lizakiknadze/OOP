var cinema = {
    name: 'Amirani',
    languages : ['ქართული, ინგლისური'],
    adress : {
        qucha : 'კოსტავა',
        IMDB : 10
    },
    movies: [
        {movie: 'სპაიდერმენი', IMDB : 8.3},
        {movie: 'ავატარი', IMDB : 7.8},
        {movie: 'ინტერსტელარი', IMDB : 8.6},
        {movie: 'ჯოკერი', IMDB : 8.4},
        {movie: 'ბეტმენი', IMDB : 7.9}
    ]
}
document.write('<h2>კინოთეატრ ამირანში სეანსები ორ ენაზეა:</h2>')
for(var i = 0; i < cinema.languages.length; i++){
    document.write(cinema.languages[i] + '</br>')
}

document.write('<h2>ფილმების ჩამონათვალი</h2>')
for(var i = 0; i < cinema.movies.length; i++){
    document.write(cinema.movies[i].movie + '</br>')
    document.write(cinema.movies[i].IMDB + '</br>')
}