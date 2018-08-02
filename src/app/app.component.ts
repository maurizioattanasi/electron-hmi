import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs'
import { MqttService, IMqttMessage } from '../../node_modules/ngx-mqtt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/w3.css', '../assets/css/w3-theme-teal.css']
})
export class AppComponent implements OnDestroy {
  title = 'electron hmi';

  message: string;
  gaugeType: string = "semi";
  gaugeValue: number = 28.3;
  gaugeLabel; string = "Speed";
  gaugeAppendText = "°C";

  private subcription: Subscription;

  constructor(private _mqttService: MqttService) {
    this.subcription = this._mqttService.observe('Altair/CA/Temp').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    })
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, { qos: 1, retain: true });
  };

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
