if(Meteor.isClient) {

Template.admin.events({
  "submit .uus-toode": function(event) {
//this function is called when the new task form is submitted
    var tooteKood = event.target.tooteKood.value;


    Datasheets.insert({
      tooteKood: tooteKood

    });
      //clear form
    event.target.tooteKood.value = "";

    //prevent default form submit
    return false;
  }

});

Template.admin.events({
  "submit .uus-tootePerekond": function(event) {
//this function is called when the new task form is submitted
    var tootePerekond = event.target.tootePerekond.value;


    Datasheets.insert({
      tootePerekond: tootePerekond

    });
      //clear form
    event.target.tootePerekond.value = "";

    //prevent default form submit
    return false;
  }

});
}

