(function (app) {
  app.AppComponent = ng.core.Component({
    selector: 'my-app', //Application Name
    template: '<input type="text" placeholder="Name" name="name" [(ngModel)]="name">' +
              '<p *ngIf="name">Hello {{name}}, are you OK?'
  })
    .Class({
      constructor: function () {
        this.name = "";
      }
    });
})(window.app || (window.app = {}));