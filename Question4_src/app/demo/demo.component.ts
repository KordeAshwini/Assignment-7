import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent
{
    public Name : string = "Marvellous Infosystems";

    public ChangeCase(Type:string):void
    {
        this.Name = Type == "Upper" ? this.Name.toUpperCase() : this.Name.toLowerCase();
    }
}
