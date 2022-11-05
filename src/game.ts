import { puzzleImg, right, success, wrong } from './ui'
import * as utils from '@dcl/ecs-scene-utils'

add_base_building()

// Base
function add_base_building() {
  const base = new Entity()
  base.addComponent(new GLTFShape('models/Modeling.glb'))
  base.addComponent(new Transform({
    position: new Vector3(15, 0, 13)
  }))
  base.getComponent(Transform).scale.setAll(0.87)
  base.getComponent(Transform).rotate(Vector3.Up(), 0)
  engine.addEntity(base)
}