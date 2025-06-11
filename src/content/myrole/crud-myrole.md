---
title: CRUD MyRole
img: /assets/users.webp
img_alt: Screenshot de ma page utilisateurs du CRUD MyRole
support:
  - Symfony
  - API Platform
  - Tailwind
competencies:
  - AC34.02
  - AC34.04
  - AC34.05
---
## Quel était l'objectif ?

L'objectif de ce projet était d'avoir une première approche de <strong>Symfony</strong> et de <strong>API Platform</strong>.
A la fin de ce projet, j'ai pu passer à travailler sur la V3 de MyRole qui est en cours de développement.

Après avoir suivi le tuto de <strong>Grafikart</strong> sur Symfony, j'ai du recréer une mini version de MyRole.

J'ai décidé de <strong>forker un github</strong> d'un <strong>Symfony Docker</strong> pour avoir déjà une base créer. J'ai aussi fait ce choix car je ne voulais pas avoir de problème de version car je travaillais sur mon pc portable et mon pc fixe.

![Screenshot de mon code register Symfony](/assets/register.webp)
_Exemple d'un controller Symfony (ici pour l'inscription)_

J'ai choisi d'utiliser <strong>TWIG</strong> au début pour me familiariser avec ce langage de code (que j'utilise aussi pour l'intégration de contrat) et j'ai ajouté Tailwind CSS pour avoir des pages un minimum stylisé rapidement.

![Screenshot de mon code register Twig](/assets/registerTwig.webp)
_Exemple d'un template Twig (ici pour l'inscription)_

J'ai du suivre un schéma de base de données auquel j'ai réfléchi avant de me lancer dans la programmation. Je me suis basé sur les éléments qui nous étaient demandés. J'ai d'ailleurs utilisé <strong>postgres SQL</strong> comme base de données car c'est celle qui est utilisé dans la V3 de MyRole (version sur laquelle je travaille depuis la fin de ce projet).

Après avoir fait toute la partie Symfony pur, j'ai fait une pause dans ce projet pour apprendre à utiliser API Platform. J'ai d'abord suivi le tuto de Grafikart sur API Platform puis j'ai fait quelques tests sur le projet que j'avais commencé en suivant le premier tuto. Ca m'a permis d'utiliser mon projet de test comme un playground pour bien découvrir l'usage d'API Platform.

J'ai donc repris mon projet de mini MyRole et j'ai modifié toute la partie backend pour qu'elle fonctionne avec API Platform.

![Screenshot de mon code ApiResource](/assets/ApiResource.webp)
_Exemple d'API Resource (ici pour les contrats)_

<br>

### Récap démarche

* Suivi du tuto de Grafikart pour découvrir les bases de Symfony.
* Fork d’un projet Symfony Docker pour avoir un environnement stable sur plusieurs machines.
* Conception d’un schéma de base de données adapté aux besoins du projet.
* Utilisation de Twig pour le templating et intégration de Tailwind pour un style rapide et propre.
* Choix de PostgreSQL comme base de données pour rester cohérent avec la V3 de MyRole.
* Mise en pause du projet pour apprendre API Platform via un second tutoriel de Grafikart.
* Intégration d’API Platform dans le projet existant pour transformer le backend en API RESTful.
<br>

### Résultat

![Screenshot de ma page utilisateurs du CRUD MyRole](/assets/users.webp)

![Screenshot de ma page utilisateurs du CRUD MyRole](/assets/users2.webp)

![Screenshot de ma page création de films du CRUD MyRole](/assets/filmCreate.webp)

![Screenshot de ma page films du CRUD MyRole](/assets/films.webp)
<br>

### Pistes d'améliorations

* Ajouter en front les données créé grâces à API Platform (ici, elles étaient simplement testé via requêtes sur Bruno)
* Rajouter un front-end en React pour avoir un vrai aperçu de la v3 de MyRole