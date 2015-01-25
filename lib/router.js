
Router.map(function () {
  this.route('datasheets', {
    path: '/datasheets/:tooteKood',
    data: function(){
      var permalinkVar = this.params.tooteKood;
        return Datasheets.findOne({tooteKood: permalinkVar});
    }
});

});


Router.route('/lisatoode', function () {
  this.render('insertBookForm');
});
Router.route('/lisatooteperekond', function () {
  this.render('lisaTootePerekond');
});

Router.route('/mail', function () {
  this.render('contactForm');
});