import { Component } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
@Component({
  selector: 'app-etudiants-paris',
  templateUrl: './etudiants-paris.component.html',
  styleUrl: './etudiants-paris.component.css'
})
export class EtudiantsParisComponent {
  etudiants: Etudiant[];
  constructor(private etudiantService: EtudiantServiceService) {
    this.etudiants = this.etudiantService.getEtudiants().filter(etudiant => etudiant.ville === 'Paris');
  }
}
