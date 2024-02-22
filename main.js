const app = new Vue({
    el: '#app',
    data: {
      name: 'Иван Иванов',
      photo: 'my-photo.jpg',
      education: [
        {
          year: '2018-2022',
          institution: 'Московский государственный университет',
          degree: 'бакалавр компьютерных наук'
        },
        {
          year: '2015-2018',
          institution: 'Школа №123',
          degree: ''
        }
      ],
      skills: [
        'Программирование: JavaScript, Python, Java',
        'Веб-разработка']}
});
  