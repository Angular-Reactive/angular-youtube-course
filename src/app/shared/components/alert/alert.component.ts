import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from './alert.service';
import { Alert, AlertType } from './model/alert.model';
import * as R from 'ramda';

/**
 * This component controls the adding & removing of alerts in the UI, 
 * it maintains an array of alerts that are rendered by the component template.
 */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];
  alertSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(private router: Router, private alertService: AlertService) { }

  /**
   * Subscribes to the observable returned from the alertService.onAlert() method, 
   * this enables the alert component to be notified whenever an alert message is sent 
   * to the alert service and add it to the alerts array for display. Sending an alert 
   * with an empty message to the alert service tells the alert component to clear the 
   * alerts array. 
   * This method also calls router.events.subscribe() to subscribe to route change events 
   * so it can automatically clear alerts on route changes.
   */
  ngOnInit(): void {
    // subscribe to new alert notifications
    this.alertSubscription = this.alertService.onAlert(this.id)
      .subscribe(alert => {
        // clear alerts when an empty alert is received
        if (!alert.message) {
          // filter out alerts without 'keepAfterRouteChange' flag
          this.alerts = R.filter(x => x.keepAfterRouteChange, this.alerts);

          // remove 'keepAfterRouteChange' flag on the rest
          const removeKeepAfterRouteChangeFn = (x: Alert) => R.set(R.lensPath(['keepAfterRouteChange']), false, x);
          R.forEach(removeKeepAfterRouteChangeFn, this.alerts);

          return;
        }

        // add alert to array
        this.alerts.push(alert);

        // auto close alert if required
        if (alert.autoClose) {
          setTimeout(() => this.removeAlert(alert), 3000);
        }
      });

    // clear alerts on location change
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  /**
   * Unsubscribes from the alert service and router when the component is 
   * destroyed to prevent memory leaks from orphaned subscriptions.
   */
  ngOnDestroy(): void {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  /**
   * Removes the specified alert object from the array, it allows individual alerts 
   * to be closed in the UI.
   * @param alert 
   * @returns 
   */
  removeAlert(alert: Alert) {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) return;

    if (this.fade) {
      // fade out alert
      this.alerts.find(x => x === alert).fade = true;

      // remove alert after faded out
      setTimeout(() => {
        this.alerts = R.filter(x => x !== alert, this.alerts);
      }, 250);
    } else {
      // remove alert
      this.alerts = R.filter(x => x !== alert, this.alerts);
    }
  }

  /**
   * Returns a corresponding bootstrap alert class for each of the alert types
   * @param alert 
   * @returns 
   */
  cssClass(alert: Alert) {
    if (!alert) return;

    const classes = ['alert', 'alert-dismissable'];

    const alertTypeClass = {
      [AlertType.Success]: 'alert alert-success',
      [AlertType.Error]: 'alert alert-danger',
      [AlertType.Info]: 'alert alert-info',
      [AlertType.Warning]: 'alert alert-warning'
    }

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }

}
