import * as THREE from 'three';
import { Engine } from './engine/Engine.js';
import { Scene3D } from './scene/Scene3D.js';

// Initialiser le moteur
const engine = new Engine();

// Créer une scène
const scene = new Scene3D();

// Ajouter des objets de test
scene.addTestObjects();

// Démarrer le rendu
engine.start(scene);
