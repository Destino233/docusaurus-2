# 服务器配置文件[Debug用]

## 服务器基本概况

生电服运行在独立计算机上 有16GB运行内存（分配给服务端12G）

>- *目前服务器运行压力较小，暂不考虑升级内存*

服务端：Leaves [Github链接(别忘了点个Star)](https://github.com/LeavesMC/Leaves)
版本：1.20.1 
>由于mojang修改了村民交易机制，所以暂时不会升级到新版本



## 生电服配置文件
为什么要放配置文件？ 我也不知道（bushi

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
>配置文件有可能更新不及时 遇到问题可以先找管理员/腐竹