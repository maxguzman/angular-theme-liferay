(function (app) {
  app.AppComponent = ng.core.Component({
    selector: 'my-app', //Application Name
    template: `
        <div>
          <label>name: </label>
          <input [(ngModel)]="name" placeholder="name"/>
        </div>
        <p *ngIf="name">
          Hello <b>{{name}}</b>, how is your day.
        </p>
      `
  })
    .Class({
      constructor: function () {
        this.name = "max";
      }
    });
})(window.app || (window.app = {}));