import * as pixi from 'pixi.js'

let app = new pixi.Application(),
Container = pixi.Container,
autoDetectRenderer = pixi.autoDetectRenderer,
loader = pixi.loader,
resources = pixi.loader.resources,
Sprite = pixi.Sprite,
TextureCache = pixi.utils.TextureCache


let stage = new Container(),
renderer = autoDetectRenderer(1000, 1000);
document.body.appendChild(renderer.view);