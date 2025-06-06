
AFRAME.registerComponent('Z0MB1E',{
    init:function() {
        var posX= -50
        var posY= -3
        var posZ= -150
for (var i=1; i<=3; i++){
    var id= 'Z0MB1E${i}'; 
    var position= {x:posX, y:posY, z:posZ};
    posX= posX+ 100
    this.zombieSpawn(id, position);
} 
    },
    zombieSpawn: function(id, position){
    var environEL = document.querySelector('a-scene');
    var zombEL = document.createElement('a-entity')    
    zombEL.setAttribute('gltf-model','#Zs')
    zombEL.setAttribute('scale', '25 25 25')
    zombEL.setAttribute('position', position)
    zombEL.setAttribute('animation-mixer',{clip:'Walk'})
    zombEL.setAttribute("id", id) 
    zombEL.setAttribute('animation',{property:'position',to:'-10 0 1000', loop:'true', duration:'150000'})
    environEL.appendChild(zombEL)
    }
}) 
