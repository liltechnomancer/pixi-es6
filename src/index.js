import * as pixi from 'pixi.js'

let app = new pixi.Application(),
Container = pixi.Container,
autoDetectRenderer = pixi.autoDetectRenderer,
loader = pixi.loader,
resources = pixi.loader.resources,
Sprite = pixi.Sprite,
TextureCache = pixi.utils.TextureCache
//Create a Pixi stage and renderer and add the
//renderer.view to the DOM
var stage = new Container(),
renderer = autoDetectRenderer(1000, 1000);
document.body.appendChild(renderer.view);