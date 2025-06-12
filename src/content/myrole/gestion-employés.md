---
title: Page gestion des employés sur un décors
img: /assets/decorsGestion.webp
img_alt: Image de la destion des décors
support:
  - React
  - React Aria
  - API
competencies:
  - AC34.01
---
## Quel était l'objectif ?

<strong>Le but de cette tâche qui m'avait été donnée était de modifier le code existant pour faire fonctionner le système de <strong>Drag&Drop</strong> pour la gestion des employés sur un décor. Avant de modifier la page, il n'y avait que le drag des cards qui fonctionnait. </strong>

La condition qui m'avait été imposée par mon MAP était d'utiliser la librairie <strong>React Aria</strong> car c'est celle qu'on utilise de partout dans l'app et qu'elle permet de faire des composants <strong>accessibles</strong> et <strong>faciles d'utilisation</strong>.

J'ai commencé par faire le système de drag avec React Aria. Je me suis beaucoup servi de la documentation de React Aria pour d'abord comprendre comment fonctionnait la librairie (c'était la première fois que je l'utilisais). J'ai fait un mini prototype pour faire en sorte que le système de drag & drop fonctionne bien. J'ai ensuite réutilisé le même système dans ma page de gestion des décors. 

![Screenshot de mon code React](/assets/registrationDropZone.webp)
_Exemple de la dropzone de registration_

![Screenshot de mon code React](/assets/setSectionDrag&Drop.webp)
_Exemple de la dropzone de setSection_

Je me suis ensuite occupé de la partie <strong>API</strong>. Il y avait déjà des points API utilisés dans la page mais ce n'était pas forcément les bons. J'ai donc essayé de penser la page à ma façon. A la base, je voulais faire un système qui transfère les données d'une DropZone à une autre. J'ai pas mal cherché comment transférer des données via la DropZone et un composant enfant, mais je n'ai rien trouvé. C'est là que j'ai pensé que je pouvais faire différents appels API. J'en aurais une DropZone qui contiendrait tous les employés et une autre qui aurait seulement les employés assignés au décor.

J'ai donc utilisé les points d'API déjà existants et j'en ai modifié d'autres. Il y avait déjà un point d'API qui permettait d'avoir tous les employés d'un groupe d'employés. J'ai donc demandé à Amaury (développeur Back-end) de modifier ce point d'API pour rajouter un paramètre qui permette de choisir si l'employé est 'en attente' ou 'validé' par la production (c'était une condition pour pouvoir assigner un employé à un décor).

![Screenshot de mon code React](/assets/allEmployee.webp)
_Exemple de l'utilisation d'un point d'API_

J'ai ensuite créé un point d'API qui me permettait d'avoir seulement les employés assignés au décor. J'ai donc créé ce point d'API en front de zéro, mais la partie back-end, c'est Amaury qui s'en est occupé.

![Screenshot de mon code React](/assets/setEmployee.webp)
_Exemple de l'utilisation d'un point d'API_

J'ai ensuite fait les fonctions de Drag & Drop (en suivant la doc React Aria).

![Screenshot de mon code React](/assets/drag&drop.webp)
_Exemple des fonctions de drag and drop_

![Screenshot de mon code React](/assets/registration.webp)
_Exemple de mon composant registration_

![Screenshot de mon code React](/assets/setSection.webp)
_Exemple de mon composant setSection_

J'ai aussi fait des filtres pour le nombre de pages ou encore l'état de la candidature des employées.

![Screenshot de mon code React](/assets/pageManagement.webp)
_Exemple du filtre pour l'affichage des employés_

![Screenshot de mon code React](/assets/registrationDrag&DropFunction.webp)
_Exemple de la fonction pour définir les employés qui sont déjà assigné à un décors_

<br>

### Récap démarche

* Analyse du besoin et compréhension des contraintes (utilisation de React Aria pour l’accessibilité).
* Prise en main de la librairie React Aria.
* Intégration du système de drag & drop dans la page de gestion des décors.
* Création et modification des points d’API existants.
* Développement des fonctions de drag & drop.
* Modification des composants pour la gestion des employés et des décors.
* Mise en place de filtres pour améliorer l’affichage des employés.

<br>

### Résultat

![GIF de ma page gestion des décors](/assets/dragNdrop.gif)

![Screenshot de ma page gestion des décors](/assets/decorsGestion.webp)

![Screenshot de ma page gestion des décors filtre](/assets/decorsFiltre.webp)
<br>

### Pistes d'améliorations

* Unifier un peu plus le code