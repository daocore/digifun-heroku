const canvas = new UICanvas()

export const right = new UIImage(canvas, new Texture("images/game/right.jpg"))
right.width = 804
right.height = 402
right.sourceWidth = 804
right.sourceHeight = 402
right.isPointerBlocker = true
right.visible = false

export const wrong = new UIImage(canvas, new Texture("images/game/wrong.jpg"))
wrong.width = "804px"
wrong.height = "402px"
wrong.sourceWidth = 804
wrong.sourceHeight = 402
wrong.isPointerBlocker = true
wrong.visible = false

export const puzzleImg = new UIImage(canvas, new Texture("images/game/puzzle.jpg"))
puzzleImg.width = "804px"
puzzleImg.height = "402px"
puzzleImg.sourceWidth = 804
puzzleImg.sourceHeight = 402
puzzleImg.isPointerBlocker = true
puzzleImg.visible = false
puzzleImg.positionY = 0

export const success = new UIImage(canvas, new Texture("images/game/success.jpg"))
success.width = "804px"
success.height = "402px"
success.sourceWidth = 804
success.sourceHeight = 402
success.isPointerBlocker = true
success.visible = false
success.positionY = 0