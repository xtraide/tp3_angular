import { Component } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrl: './etudiant-hors-paris.component.css'
})
export class EtudiantHorsParisComponent {
  etudiants: Etudiant[];
  constructor(private etudiantService: EtudiantServiceService) {
    this.etudiants = this.etudiantService.getEtudiants().filter(etudiant => etudiant.ville != 'Paris');
  }
}
