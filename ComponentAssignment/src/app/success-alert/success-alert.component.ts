import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    template:`
    <h3>Success</h3>
    <app-warning-alert></app-warning-alert>
    `,
    styles: [`
    h3 {
        color: green;
    }
    `]
})
export class SuccessAlertComponent {

}