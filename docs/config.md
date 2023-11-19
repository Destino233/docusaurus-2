# 服务器配置文件[Debug用]

## 服务器基本概况

生电服运行在独立计算机上 有16GB运行内存（分配给服务端12G）

>- *目前服务器运行压力较小，暂不考虑升级内存*

服务端：Leaves [Github链接(别忘了点个Star)](https://github.com/LeavesMC/Leaves)
版本：1.20.1 
>由于mojang修改了村民交易机制，所以暂时不会升级到新版本



## 生电服配置文件
为什么要放配置文件？ 我也不知道（bushi

>配置文件有可能更新不及时 遇到问题可以先找管理员/腐竹

### bukkit.yml
~~~yml
settings:
  allow-end: true
  warn-on-overload: true
  permissions-file: permissions.yml
  update-folder: update
  plugin-profiling: false
  connection-throttle: 4000
  query-plugins: true
  deprecated-verbose: default
  shutdown-message: 服务器关闭辣！
  minimum-api: none
  use-map-color-cache: true
spawn-limits:
  monsters: '-1'
  animals: '-1'
  water-animals: '-1'
  water-ambient: 10
  water-underground-creature: 5
  axolotls: 5
  ambient: 15
chunk-gc:
  period-in-ticks: 400
ticks-per:
  animal-spawns: 400
  monster-spawns: 1
  water-spawns: 1
  water-ambient-spawns: 1
  water-underground-creature-spawns: 1
  axolotl-spawns: 1
  ambient-spawns: 1
  autosave: 6000
aliases: now-in-commands.yml
~~~
### spigot.yml
~~~yml
# This is the main configuration file for Spigot.
# As you can see, there's tons to configure. Some options may impact gameplay, so use
# with caution, and make sure you know what each option does before configuring.
# For a reference for any variable inside this file, check out the Spigot wiki at
# http://www.spigotmc.org/wiki/spigot-configuration/
#
# If you need help with the configuration or have any questions related to Spigot,
# join us at the Discord or drop by our forums and leave a post.
#
# Discord: https://www.spigotmc.org/go/discord
# Forums: http://www.spigotmc.org/

settings:
  debug: false
  sample-count: 12
  timeout-time: 60
  restart-on-crash: true
  restart-script: ./start.sh
  bungeecord: true
  player-shuffle: 0
  user-cache-size: 5000
  save-user-cache-on-stop-only: false
  moved-wrongly-threshold: 0.0625
  moved-too-quickly-multiplier: 10
  netty-threads: 4
  attribute:
    maxHealth:
      max: 2048
    movementSpeed:
      max: 2048
    attackDamage:
      max: 2048
  log-villager-deaths: true
  log-named-deaths: true
messages:
  whitelist: 你不在此服务器的白名单中\n访问https://wj.qq.com/s2/12583953/17f9/来申请白名单\n或加入QQ群893645505(朝樱沐玩家群①)
  unknown-command: Unknown command. Type "/help" for help.
  server-full: 人满了（悲）
  outdated-client: Outdated client! Please use {0}
  outdated-server: Outdated server! I'm still on {0}
  restart: 服务器重启维护 预计30秒左右可以再次进入服务器
advancements:
  disable-saving: false
  disabled:
  - minecraft:story/disabled
commands:
  spam-exclusions:
  - /skill
  silent-commandblock-console: false
  replace-commands:
  - setblock
  - summon
  - testforblock
  - tellraw
  log: true
  tab-complete: 0
  send-namespaced: true
players:
  disable-saving: false
world-settings:
  default:
    seed-trailruins: 83469867
    below-zero-generation-in-existing-chunks: true
    merge-radius:
      item: 2.5
      exp: 3
    item-despawn-rate: 6000
    view-distance: 15
    simulation-distance: default
    thunder-chance: 100000
    enable-zombie-pigmen-portal-spawns: true
    wither-spawn-sound-radius: 0
    hanging-tick-frequency: 100
    arrow-despawn-rate: 1200
    trident-despawn-rate: 1200
    zombie-aggressive-towards-villager: true
    nerf-spawner-mobs: false
    mob-spawn-range: 8
    end-portal-sound-radius: 0
    growth:
      pitcherplant-modifier: 100
      torchflower-modifier: 100
      cactus-modifier: 100
      cane-modifier: 100
      melon-modifier: 100
      mushroom-modifier: 100
      pumpkin-modifier: 100
      sapling-modifier: 100
      beetroot-modifier: 100
      carrot-modifier: 100
      potato-modifier: 100
      wheat-modifier: 100
      netherwart-modifier: 100
      vine-modifier: 100
      cocoa-modifier: 100
      bamboo-modifier: 100
      sweetberry-modifier: 100
      kelp-modifier: 100
      twistingvines-modifier: 100
      weepingvines-modifier: 100
      cavevines-modifier: 100
      glowberry-modifier: 100
    entity-activation-range:
      animals: 32
      monsters: 32
      raiders: 48
      misc: 0
      water: 16
      villagers: 32
      flying-monsters: 32
      wake-up-inactive:
        animals-max-per-tick: 4
        animals-every: 1200
        animals-for: 100
        monsters-max-per-tick: 8
        monsters-every: 400
        monsters-for: 100
        villagers-max-per-tick: 4
        villagers-every: 600
        villagers-for: 100
        flying-monsters-max-per-tick: 8
        flying-monsters-every: 200
        flying-monsters-for: 100
      villagers-work-immunity-after: 100
      villagers-work-immunity-for: 20
      villagers-active-for-panic: true
      tick-inactive-villagers: true
      ignore-spectators: false
    entity-tracking-range:
      display: 128
      players: 144
      animals: 48
      monsters: 64
      misc: 32
      other: 64
    ticks-per:
      hopper-transfer: 8
      hopper-check: 1
    hopper-amount: 1
    hopper-can-load-chunks: false
    dragon-death-sound-radius: 0
    seed-village: 10387312
    seed-desert: 14357617
    seed-igloo: 14357618
    seed-jungle: 14357619
    seed-swamp: 14357620
    seed-monument: 10387313
    seed-shipwreck: 165745295
    seed-ocean: 14357621
    seed-outpost: 165745296
    seed-endcity: 10387313
    seed-slime: 987234911
    seed-nether: 30084232
    seed-mansion: 10387319
    seed-fossil: 14357921
    seed-portal: 34222645
    seed-ancientcity: 20083232
    seed-buriedtreasure: 10387320
    seed-mineshaft: default
    seed-stronghold: default
    hunger:
      jump-walk-exhaustion: 0.05
      jump-sprint-exhaustion: 0.2
      combat-exhaustion: 0.1
      regen-exhaustion: 6
      swim-multiplier: 0.01
      sprint-multiplier: 0.1
      other-multiplier: 0
    max-tnt-per-tick: 5000
    max-tick-time:
      tile: 50
      entity: 50
    verbose: false
  worldeditregentempworld:
    verbose: false
config-version: 12
stats:
  disable-saving: false
  forced-stats: {}

~~~
### paper-global.yml
~~~yml
# This is the global configuration file for Paper.
# As you can see, there's a lot to configure. Some options may impact gameplay, so use
# with caution, and make sure you know what each option does before configuring.
# 
# If you need help with the configuration or have any questions related to Paper,
# join us in our Discord or check the docs page.
# 
# The world configuration options have been moved inside
# their respective world folder. The files are named paper-world.yml
# 
# Docs: https://docs.papermc.io/
# Discord: https://discord.gg/papermc
# Website: https://papermc.io/

_version: 28
block-updates:
  disable-chorus-plant-updates: false
  disable-mushroom-block-updates: false
  disable-noteblock-updates: false
  disable-tripwire-updates: false
chunk-loading:
  autoconfig-send-distance: false
  enable-frustum-priority: true
  global-max-chunk-load-rate: '-1'
  global-max-chunk-send-rate: '-1'
  global-max-concurrent-loads: 500
  max-concurrent-sends: 100
  min-load-radius: 100
  player-max-chunk-load-rate: 20
  player-max-concurrent-loads: 20
  target-player-chunk-send-rate: 20
chunk-loading-advanced:
  auto-config-send-distance: true
  player-max-concurrent-chunk-generates: 0
  player-max-concurrent-chunk-loads: 0
chunk-loading-basic:
  player-max-chunk-generate-rate: -1.0
  player-max-chunk-load-rate: 100.0
  player-max-chunk-send-rate: 75.0
chunk-system:
  gen-parallelism: default
  io-threads: -1
  worker-threads: -1
collisions:
  enable-player-collisions: true
  send-full-pos-for-hard-colliding-entities: true
commands:
  fix-target-selector-tag-completion: true
  suggest-player-names-when-null-tab-completions: true
  time-command-affects-all-worlds: false
console:
  enable-brigadier-completions: true
  enable-brigadier-highlighting: true
  has-all-permissions: false
item-validation:
  book:
    author: 8192
    page: 16384
    title: 8192
  book-size:
    page-max: 2560
    total-multiplier: 0.98
  display-name: 8192
  lore-line: 8192
  resolve-selectors-in-books: false
logging:
  deobfuscate-stacktraces: true
  log-player-ip-addresses: true
messages:
  kick:
    authentication-servers-down: <lang:multiplayer.disconnect.authservers_down>
    connection-throttle: Connection throttled! Please wait before reconnecting.
    flying-player: <lang:multiplayer.disconnect.flying>
    flying-vehicle: <lang:multiplayer.disconnect.flying>
  no-permission: <red>I'm sorry, but you do not have permission to perform this command.
    Please contact the server administrators if you believe that this is in error.
  use-display-name-in-quit-message: true
misc:
  chat-threads:
    chat-executor-core-size: -1
    chat-executor-max-size: -1
  compression-level: default
  fix-entity-position-desync: true
  lag-compensate-block-breaking: true
  load-permissions-yml-before-plugins: true
  max-joins-per-tick: 4
  region-file-cache-size: 256
  strict-advancement-dimension-check: false
  use-alternative-luck-formula: false
  use-dimension-type-for-custom-spawners: false
packet-limiter:
  all-packets:
    action: KICK
    interval: 7.0
    max-packet-rate: 5000.0
  kick-message: <red><lang:disconnect.exceeded_packet_rate>
  overrides:
    ServerboundPlaceRecipePacket:
      action: DROP
      interval: 4.0
      max-packet-rate: 5.0
player-auto-save:
  max-per-tick: -1
  rate: -1
proxies:
  bungee-cord:
    online-mode: true
  proxy-protocol: false
  velocity:
    enabled: false
    online-mode: false
    secret: ''
scoreboards:
  save-empty-scoreboard-teams: false
  track-plugin-scoreboards: false
spam-limiter:
  incoming-packet-threshold: 300
  recipe-spam-increment: 1
  recipe-spam-limit: 20
  tab-spam-increment: 1
  tab-spam-limit: 500
timings:
  enabled: true
  hidden-config-entries:
  - database
  - proxies.velocity.secret
  history-interval: 300
  history-length: 3600
  server-name: Unknown Server
  server-name-privacy: false
  url: https://timings.aikar.co/
  verbose: true
unsupported-settings:
  allow-grindstone-overstacking: true
  allow-headless-pistons: true
  allow-permanent-block-break-exploits: true
  allow-piston-duplication: true
  compression-format: ZLIB
  perform-username-validation: true
watchdog:
  early-warning-delay: 10000
  early-warning-every: 5000

~~~
### paper-world-defaults.yml
~~~yml
# This is the world defaults configuration file for Paper.
# As you can see, there's a lot to configure. Some options may impact gameplay, so use
# with caution, and make sure you know what each option does before configuring.
# 
# If you need help with the configuration or have any questions related to Paper,
# join us in our Discord or check the docs page.
# 
# Configuration options here apply to all worlds, unless you specify overrides inside
# the world-specific config file inside each world folder.
# 
# Docs: https://docs.papermc.io/
# Discord: https://discord.gg/papermc
# Website: https://papermc.io/

_version: 30
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 1
    hidden-blocks:
    - copper_ore
    - deepslate_copper_ore
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - coal_ore
    - deepslate_coal_ore
    - lapis_ore
    - deepslate_lapis_ore
    - mossy_cobblestone
    - obsidian
    - chest
    - diamond_ore
    - deepslate_diamond_ore
    - redstone_ore
    - deepslate_redstone_ore
    - clay
    - emerald_ore
    - deepslate_emerald_ore
    - ender_chest
    lava-obscures: true
    max-block-height: 64
    replacement-blocks:
    - stone
    - oak_planks
    - deepslate
    update-radius: 2
    use-permission: false
  obfuscation:
    items:
      hide-durability: false
      hide-itemmeta: false
      hide-itemmeta-with-visual-effects: false
chunks:
  auto-save-interval: default
  delay-chunk-unloads-by: 0s
  entity-per-chunk-save-limit:
    arrow: -1
    ender_pearl: -1
    experience_orb: -1
    fireball: -1
    small_fireball: -1
    snowball: -1
  fixed-chunk-inhabited-time: -1
  flush-regions-on-save: false
  max-auto-save-chunks-per-tick: 20
  prevent-moving-into-unloaded-chunks: true
collisions:
  allow-player-cramming-damage: false
  allow-vehicle-collisions: true
  fix-climbing-bypassing-cramming-rule: false
  max-entity-collisions: 8
  only-players-collide: false
entities:
  armor-stands:
    do-collision-entity-lookups: true
    tick: true
  behavior:
    allow-spider-world-border-climbing: true
    baby-zombie-movement-modifier: 0.5
    disable-chest-cat-detection: false
    disable-creeper-lingering-effect: false
    disable-player-crits: false
    door-breaking-difficulty:
      husk:
      - HARD
      vindicator:
      - NORMAL
      - HARD
      zombie:
      - HARD
      zombie_villager:
      - HARD
      zombified_piglin:
      - HARD
    ender-dragons-death-always-places-dragon-egg: false
    experience-merge-max-value: -1
    mobs-can-always-pick-up-loot:
      skeletons: false
      zombies: false
    nerf-pigmen-from-nether-portals: false
    parrots-are-unaffected-by-player-movement: false
    phantoms-do-not-spawn-on-creative-players: false
    phantoms-only-attack-insomniacs: true
    phantoms-spawn-attempt-max-seconds: 119
    phantoms-spawn-attempt-min-seconds: 60
    piglins-guard-chests: true
    pillager-patrols:
      disable: false
      spawn-chance: 0.2
      spawn-delay:
        per-player: false
        ticks: 12000
      start:
        day: 5
        per-player: false
    player-insomnia-start-ticks: 72000
    should-remove-dragon: false
    spawner-nerfed-mobs-should-jump: false
    zombie-villager-infection-chance: -1.0
    zombies-target-turtle-eggs: true
  entities-target-with-follow-range: false
  markers:
    tick: true
  mob-effects:
    immune-to-wither-effect:
      wither: true
      wither-skeleton: true
    spiders-immune-to-poison-effect: true
    undead-immune-to-certain-effects: true
  sniffer:
    boosted-hatch-time: default
    hatch-time: default
  spawning:
    all-chunks-are-slime-chunks: false
    alt-item-despawn-rate:
      enabled: false
      items:
        cobblestone: 300
    count-all-mobs-for-spawning: false
    creative-arrow-despawn-rate: default
    despawn-ranges:
      ambient:
        hard: 128
        soft: 32
      axolotls:
        hard: 128
        soft: 32
      creature:
        hard: 128
        soft: 32
      misc:
        hard: 128
        soft: 32
      monster:
        hard: 128
        soft: 32
      underground_water_creature:
        hard: 128
        soft: 32
      water_ambient:
        hard: 64
        soft: 32
      water_creature:
        hard: 128
        soft: 32
    disable-mob-spawner-spawn-egg-transformation: false
    duplicate-uuid:
      mode: SAFE_REGEN
      safe-regen-delete-range: 32
    filter-bad-tile-entity-nbt-from-falling-blocks: true
    filtered-entity-tag-nbt-paths:
    - Pos
    - Motion
    - SleepingX
    - SleepingY
    - SleepingZ
    iron-golems-can-spawn-in-air: false
    monster-spawn-max-light-level: -1
    non-player-arrow-despawn-rate: default
    per-player-mob-spawns: true
    scan-for-legacy-ender-dragon: true
    skeleton-horse-thunder-spawn-chance: default
    slime-spawn-height:
      slime-chunk:
        maximum: 40.0
      surface-biome:
        maximum: 70.0
        minimum: 50.0
    spawn-limits:
      ambient: -1
      axolotls: -1
      creature: -1
      monster: -1
      underground_water_creature: -1
      water_ambient: -1
      water_creature: -1
    wandering-trader:
      spawn-chance-failure-increment: 25
      spawn-chance-max: 75
      spawn-chance-min: 25
      spawn-day-length: 24000
      spawn-minute-length: 1200
    wateranimal-spawn-height:
      maximum: default
      minimum: default
  tracking-range-y:
    animal: default
    display: default
    enabled: false
    misc: default
    monster: default
    other: default
    player: default
environment:
  disable-explosion-knockback: false
  disable-ice-and-snow: false
  disable-teleportation-suffocation-check: false
  disable-thunder: false
  fire-tick-delay: 30
  frosted-ice:
    delay:
      max: 40
      min: 20
    enabled: true
  generate-flat-bedrock: false
  nether-ceiling-void-damage-height: disabled
  optimize-explosions: false
  portal-create-radius: 16
  portal-search-radius: 128
  portal-search-vanilla-dimension-scaling: true
  treasure-maps:
    enabled: true
    find-already-discovered:
      loot-tables: default
      villager-trade: false
  water-over-lava-flow-speed: 5
feature-seeds:
  generate-random-seeds-for-all: false
fishing-time-range:
  maximum: 600
  minimum: 100
fixes:
  disable-unloaded-chunk-enderpearl-exploit: true
  falling-block-height-nerf: disabled
  fix-curing-zombie-villager-discount-exploit: false
  fix-items-merging-through-walls: true
  prevent-tnt-from-moving-in-water: false
  split-overstacked-loot: true
  tnt-entity-height-nerf: disabled
hopper:
  cooldown-when-full: true
  disable-move-event: false
  ignore-occluding-blocks: false
lootables:
  auto-replenish: false
  max-refills: -1
  refresh-max: 2d
  refresh-min: 12h
  reset-seed-on-fill: true
  restrict-player-reloot: true
  restrict-player-reloot-time: disabled
maps:
  item-frame-cursor-limit: 128
  item-frame-cursor-update-interval: 10
max-growth-height:
  bamboo:
    max: 16
    min: 11
  cactus: 3
  reeds: 3
misc:
  disable-end-credits: false
  disable-relative-projectile-velocity: false
  disable-sprint-interruption-on-attack: false
  light-queue-size: 20
  max-leash-distance: 10.0
  redstone-implementation: VANILLA
  shield-blocking-delay: 5
  show-sign-click-command-failure-msgs-to-player: false
  update-pathfinding-on-block-update: true
scoreboards:
  allow-non-player-entities-on-scoreboards: false
  use-vanilla-world-scoreboard-name-coloring: false
spawn:
  allow-using-signs-inside-spawn-protection: false
  keep-spawn-loaded: true
  keep-spawn-loaded-range: 10
tick-rates:
  behavior:
    villager:
      validatenearbypoi: -1
  container-update: 1
  grass-spread: 1
  mob-spawner: 1
  sensor:
    villager:
      secondarypoisensor: 40
unsupported-settings:
  fix-invulnerable-end-crystal-exploit: false

~~~






















































