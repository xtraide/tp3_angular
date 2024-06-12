import { Component } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
import { Etudiant } from '../../models/etudiant';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
  etudiants: Etudiant[];
  constructor(private etudiantService: EtudiantServiceService) {
    this.etudiants = this.etudiantService.getEtudiants();

  }
}
