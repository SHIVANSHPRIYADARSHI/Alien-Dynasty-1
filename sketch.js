var gameState = "wait"
var bgimg, splashscreen, playbutton, howbutton
var playimg,level1img



function preload() {

    bgimg = loadImage("assets/alienDynasty.gif")
level1img=loadImage("assets/level1bg.jpeg")


}


function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/play_btn.png")
    playbutton.position(width / 2 - 250, height - 145)
    playbutton.size(160, 150)

    playbutton.hide()


   soundbutton = createImg("assets/sound_btn.png")
   soundbutton.position(width / 2 + 80, height - 150)
   soundbutton.size(150, 150)
   soundbutton.hide()


  mutebutton = createImg("assets/mute.png")
  mutebutton.position(width / 2 + 70, height - 150)
  mutebutton.size(165, 150)
  mutebutton.hide()


  level1popbutton=createButton("pop")
  level1popbutton.position(width/2,height/2)
  level1popbutton.hide()

}


function draw() {

if(gameState==="wait"){

    background(bgimg)
    playbutton.show()
    soundbutton.show()

}


playbutton.mousePressed(()=>{
    gameState="play"
    playbutton.hide()
    soundbutton.show()

})


if(gameState==="play"){
background(level1img)
soundbutton.position(0,0)
mutebutton.position(0,0)
level1popbutton.show()

playbutton.hide()
}

soundbutton.mousePressed(()=>{
    soundbutton.hide()
    mutebutton.show()
})
mutebutton.mousePressed(()=>{
    soundbutton.show()
    mutebutton.hide()
})

level1popbutton.mousePressed(()=>{
  gameState="level1"  
})


if(gameState==="level1"){
    level1popbutton.hide()

}
}



























