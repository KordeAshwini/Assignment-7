import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  standalone: true,
  imports: [],
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css'
})
export class NewCompComponent
{
    public Name : string = "Marvellous Infosystems";
    public Fun()
    {
        this.Name = "Educating for better tomorrow"
    }
}
