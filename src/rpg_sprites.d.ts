declare class Sprite_Base {
  initialize(): void

  update(): void

  hide(): void

  show(): void

  updateVisibility(): void

  updateAnimationSprites(): void

  startAnimation(): void

  isAnimationPlaying(): boolean
}

declare class Sprite_Button {
  initialize(): void

  update(): void

  updateFrame(): void

  setColdFrame(x: number, y: number, width: number, height: number): void

  setHotFrame(x: number, y: number, width: number, height: number): void

  setClickHandler(method: unknown): void

  callClickHandler(): void

  processTouch(): void

  isActive(): boolean

  isButtonTouched(): boolean

  canvasToLocalX(x: number): number

  canvasToLocalY(y: number): number
}

declare class Sprite_Character {
  initialize(): void

  initMembers(): void

  setCharacter(charactor: unknown): void

  update(): void

  updateVisibility(): void

  isTile(): boolean

  tilesetBitmap(tileId: number): unknown

  updateBitmap(): void

  isImageChanged(): boolean

  setTileBitmap(): void

  setCharacterBitmap(): void

  updateFrame(): void

  updateTileFrame(): void

  updateCharacterFrame(): void

  characterBlockX(): number

  characterBlockY(): number

  characterPatternX(): number

  characterPatternY(): number

  patternWidth(): number

  patternHeight(): number

  updateHalfBodySprites(): void

  createHalfBodySprites(): void

  updatePosition(): void

  updateAnimation(): void

  updateOther(): void

  setupAnimation(): void

  setupBalloon(): void

  startBalloon(): void

  updateBalloon(): void

  endBalloon(): void

  isBalloonPlaying(): number
}

declare class Sprite_Battler {
  initialize(): void

  setBattler(battler: unknown): void

  setHome(x: number, y: number): void

  update(): void

  updateVisibility(): void

  updateMain(): void

  updateBitmap(): void

  updateFrame(): void

  updateMove(): void

  updatePosition(): void

  updateAnimation(): void

  updateDamagePopup(): void

  updateSelectionEffect(): void

  setupAnimation(): void

  setupDamagePopup(): void

  damageOffsetX(): number

  damageOffsetY(): number

  startMove(x: number, y: number, duration: number): void

  onMoveEnd(): void

  isEffecting(): boolean

  isMoving(): boolean

  inHomePosition(): boolean
}

declare class Sprite_Actor {
  initialize(battler: unknown): void

  initMembers(): void

  createMainSprite(): void

  createShadowSprite(): void

  createWeaponSprite(): void

  createStateSprite(): void

  setBattler(battler: unknown): void

  moveToStartPosition(): void

  setActorHome(index: number): void

  update(): void

  updateShadow(): void

  updateMain(): void

  setupMotion(): void

  setupWeaponAnimation(): void

  startMotion(): void

  updateTargetPosition(): void

  updateBitmap(): void

  updateFrame(): void

  updateMove(): void

  updateMotion(): void

  updateMotionCount(): void

  motionSpeed(): number

  refreshMotion(): void

  startEntryMotion(): void

  stepForward(): void

  stepBack(): void

  retreat(): void

  onMoveEnd(): void

  damageOffsetX(): number

  damageOffsetY(): number
}

declare class Sprite_Enemy {
  initialize(battler: unknown): void

  initMembers(): void

  createStateIconSprite(): void

  setBattler(battler: unknown): void

  update(): void

  updateBitmap(): void

  loadBitmap(name: string, hue: string): void

  updateFrame(): void

  updatePosition(): void

  updateStateSprite(): void

  initVisibility(): void

  setupEffect(): void

  startEffect(effectType: string): void

  startAppear(): void

  startDisappear(): void

  startWhiten(): void

  startBlink(): void

  startCollapse(): void

  startBossCollapse(): void

  startInstantCollapse(): void

  updateEffect(): void

  isEffecting(): boolean

  revertToNormal(): void

  updateWhiten(): void

  updateBlink(): void

  updateAppear(): void

  updateDisappear(): void

  updateCollapse(): void

  updateBossCollapse(): void

  updateInstantCollapse(): void

  damageOffsetX(): number

  damageOffsetY(): number
}

declare class Sprite_Animation {
  initialize(): void

  initMembers(): void

  setup(target: string, animation: string, mirror: string, delay: number): void

  remove(): void

  setupRate(): void

  setupDuration(): void

  update(): void

  updateFlash(): void

  updateScreenFlash(): void

  absoluteX(): number

  absoluteY(): number

  updateHiding(): void

  isPlaying(): boolean

  loadBitmaps(): void

  isReady(): boolean

  createSprites(): void

  createCellSprites(): void

  createScreenFlashSprite(): void

  updateMain(): void

  updatePosition(): void

  updateFrame(): void

  currentFrameIndex(): number

  updateAllCellSprites(frame: number): void

  updateCellSprite(sprite: string, cell: string): void

  processTimingData(timing: number): void

  startFlash(color: string, duration: number): void

  startScreenFlash(color: string, duration: number): void

  startHiding(duration: number): void
}

declare class Sprite_Damage {
  initialize(): void

  setup(target: unknown): void

  setupCriticalEffect(): void

  digitWidth(): number

  digitHeight(): number

  createMiss(): void

  createDigits(baseRow: number, value: number): void

  createChildSprite(): unknown

  update(): void

  updateChild(sprite: unknown): void

  updateFlash(): void

  updateOpacity(): void

  isPlaying(): boolean
}

declare class Sprite_StateIcon {
  initialize(): void

  initMembers(): void

  loadBitmap(): void

  setup(battler: unknown): void

  update(): void

  animationWait(): number

  updateIcon(): void

  updateFrame(): void
}

declare class Sprite_StateOverlay {
  initialize(): void

  initMembers(): void

  loadBitmap(): void

  setup(battler: unknown): void

  update(): void

  animationWait(): number

  updatePattern(): void

  updateFrame(): void
}

declare class Sprite_Weapon {
  initialize(): void

  initMembers(): void

  setup(weaponImageId: number): void

  update(): void

  animationWait(): number

  updatePattern(): void

  loadBitmap(): void

  updateFrame(): void

  isPlaying(): boolean
}

declare class Sprite_Balloon {
  initialize(): void

  initMembers(): void

  loadBitmap(): void

  setup(balloonId: number): void

  update(): void

  updateFrame(): void

  speed(): number

  waitTime(): number

  frameIndex(): number

  isPlaying(): boolean
}

declare class Sprite_Picture {
  initialize(pictureId: number): void

  picture(): unknown

  update(): void

  updateBitmap(): void

  updateOrigin(): void

  updatePosition(): void

  updateScale(): void

  updateTone(): void

  updateOther(): void

  loadBitmap(): void
}

declare class Sprite_Timer {
  initialize(): void

  createBitmap(): void

  update(): void

  updateBitmap(): void

  redraw(): void

  timerText(): string

  updatePosition(): void

  updateVisibility(): void
}

declare class Sprite_Destination {
  initialize(): void

  update(): void

  createBitmap(): void

  updatePosition(): void

  updateAnimation(): void
}

declare class Spriteset_Base {
  initialize(): void

  createLowerLayer(): void

  createUpperLayer(): void

  update(): void

  createBaseSprite(): void

  createToneChanger(): void

  createWebGLToneChanger(): void

  createCanvasToneChanger(): void

  createPictures(): void

  createTimer(): void

  createScreenSprites(): void

  updateScreenSprites(): void

  updateToneChanger(): void

  updateWebGLToneChanger(): void

  updateCanvasToneChanger(): void

  updatePosition(): void
}

declare class Spriteset_Map {
  initialize(): void

  createLowerLayer(): void

  update(): void

  hideCharacters(): void

  createParallax(): void

  createTilemap(): void

  loadTileset(): void

  createCharacters(): void

  createShadow(): void

  createDestination(): void

  createWeather(): void

  updateTileset(): void

  _canvasReAddParallax(): void

  updateParallax(): void

  updateTilemap(): void

  updateShadow(): void

  updateWeather(): void
}

declare class Spriteset_Battle {
  initialize(): void

  createLowerLayer(): void

  createBackground(): void

  update(): void

  createBattleField(): void

  createBattleback(): void

  updateBattleback(): void

  locateBattleback(): void

  battleback1Bitmap(): unknown

  battleback2Bitmap(): unknown

  battleback1Name(): string

  battleback2Name(): string

  overworldBattleback1Name(): string

  overworldBattleback2Name(): string

  normalBattleback1Name(): string

  normalBattleback2Name(): string

  terrainBattleback1Name(): unknown

  terrainBattleback2Name(): unknown

  defaultBattleback1Name(): string

  defaultBattleback2Name(): string

  shipBattleback1Name(): string

  shipBattleback2Name(): string

  autotileType(): unknown

  createEnemies(): void

  compareEnemySprite(a: number, b: number): number

  createActors(): void

  updateActors(): void

  battlerSprites(): unknown

  isAnimationPlaying(): boolean

  isEffecting(): boolean

  isAnyoneMoving(): boolean

  isBusy(): boolean
}
