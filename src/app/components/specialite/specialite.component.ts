import { Component } from '@angular/core';
import { Specialite } from '../../models/specialite';
import { SpecServiceService } from '../../services/spec-service.service';
@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent {
  specialites: Specialite[];
  constructor(private specService: SpecServiceService) {
    this.specialites = this.specService.getSpecialites();
    console.log(this.specialites);
  }

}
