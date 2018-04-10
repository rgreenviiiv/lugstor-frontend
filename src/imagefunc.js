import 'p5/lib/addons/p5.dom';
export default function sketch(p) {
let video;
let button;
let snapshots = []
  p.setup = function(){
    p.createCanvas(640,480);
    p.background(51);
    video = p.createCapture(p.VIDEO);
    video.size(640,480);
    video.hide()
    button = p.createButton('save');
    button.mousePressed(takesnap);
  }
  function takesnap(e){
    snapshots.push(video.get());
    console.log(e);
    console.log(snapshots)
  }
  // function showImage(src, width, height, alt){
  //   snapshots.push(video.get());
  //   let img = document.createElement("img");
  //   img.src = "http://localhost:3002/imagecap" + snapshots[0];
  //   img.width = 640;
  //   img.height = 480;
  //   img.alt = alt;
  //   document.body.appendChild(img);
  // }
  p.draw = function(){
    p.image(video, 0, 0)

  }
}
